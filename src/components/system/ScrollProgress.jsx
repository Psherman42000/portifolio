export default function ScrollProgress({ progress }) {
  return (
    <div className="panel-progress" aria-hidden="true">
      <div className="panel-progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}

