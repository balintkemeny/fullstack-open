import { useState } from "react"

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const incrementCounter = () => setCounter(counter + 1)
  const resetCounterToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={incrementCounter}>
        plus
      </button>
      <button onClick={resetCounterToZero}>
        reset
      </button>
    </div>
  )
}

export default App