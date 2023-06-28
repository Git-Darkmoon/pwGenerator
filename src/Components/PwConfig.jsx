import { useGlobalContext } from "./Context"
import PwOptions from "./PwOptions"

function PwConfig() {
  const { pwLength, setPwLength } = useGlobalContext()

  return (
    <>
      <div className="generator-info">
        <h3 id="charTxt">character length</h3>
        <h2 id="charLength">{pwLength}</h2>
      </div>
      <input
        type="range"
        name="pwLength"
        id="pwLength"
        step={1}
        min={1}
        max={20}
        value={pwLength}
        onChange={(e) => {
          setPwLength(e.target.value)
        }}
      />
      <PwOptions />
      <section className="generator-strength">
        <h1>Strength</h1>
        <meter
          id="pwStrength-meter"
          min="0"
          max="20"
          low="8"
          high="14"
          optimum="20"
          value={pwLength}
        />
      </section>
    </>
  )
}

export default PwConfig
