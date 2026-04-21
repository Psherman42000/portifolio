import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

// Lightweight value noise for a subtle moving signal field.
const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
      (c - a) * u.y * (1.0 - u.x) +
      (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 flowUv = uv * vec2(3.2, 2.5) * aspect;

    float t = uTime * 0.07;
    float field = noise(flowUv + vec2(t * 1.4, -t * 0.65));
    float field2 = noise(flowUv * 1.8 + vec2(-t * 0.9, t * 1.1));
    float waves = smoothstep(0.48, 0.82, field * 0.62 + field2 * 0.38);

    float diagonalPulse = sin((uv.x + uv.y) * 18.0 - uTime * 0.9) * 0.5 + 0.5;
    diagonalPulse = smoothstep(0.72, 1.0, diagonalPulse) * 0.18;

    vec3 base = vec3(0.011, 0.023, 0.058);
    vec3 cyan = vec3(0.0, 1.0, 0.82);
    vec3 violet = vec3(0.48, 0.38, 1.0);

    vec3 color = base;
    color += cyan * waves * 0.12;
    color += violet * field2 * 0.045;
    color += cyan * diagonalPulse * 0.08;

    float vignette = smoothstep(1.35, 0.15, distance(uv, vec2(0.5)));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`

function ShaderPlane({ quality = 'high' }) {
  const materialRef = useRef(null)
  const resolution = useMemo(() => new THREE.Vector2(window.innerWidth, window.innerHeight), [])

  useFrame((state) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * (quality === 'low' ? 0.8 : 1)
    materialRef.current.uniforms.uResolution.value.set(state.size.width, state.size.height)
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: resolution },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

export default function BackgroundShader({ quality = 'high' }) {
  return (
    <div className="background-canvas-shell" aria-hidden="true">
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }} dpr={[1, quality === 'low' ? 1 : 1.25]}>
        <ShaderPlane quality={quality} />
      </Canvas>
    </div>
  )
}

