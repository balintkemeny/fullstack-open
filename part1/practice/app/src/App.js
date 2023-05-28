import { useState } from "react"

const Display = ({ counter }) => (
  <div>{counter}</div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const incrementCounter = () => setCounter(counter + 1)
  const decrementCounter = () => setCounter(counter - 1)
  const resetCounterToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button text='plus' handleClick={incrementCounter} />
      <Button text='minus' handleClick={decrementCounter} />
      <Button text='zero' handleClick={resetCounterToZero} />
    </div>
  )
}

export default App