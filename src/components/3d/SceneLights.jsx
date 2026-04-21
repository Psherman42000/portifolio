export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 2, 4]} intensity={18} color="#00FFD1" />
      <pointLight position={[-3, -2, 2]} intensity={10} color="#7B61FF" />
    </>
  )
}
