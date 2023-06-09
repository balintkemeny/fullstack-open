import { useState } from "react"

const App = () => {
  const [ value, setValue ] = useState(10);

  const setToValue = (newValue) => () => {
    setValue(newValue)
    console.log(`The value now is: ${newValue}.`);
  };


  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>Thousand</button>
      <button onClick={setToValue(0)}>Reset</button>
      <button onClick={setToValue(value + 1)}>Increment</button>
    </div>
  );
};

export default App