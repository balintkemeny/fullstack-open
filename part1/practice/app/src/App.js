import { useState } from "react"

const App = () => {
  const [ value, setValue ] = useState(10);

  const hello = (target) => {
    const handler = () => {
      console.log(`Hello, ${target}!`);
    };

    return handler;
  };


  return (
    <div>
      {value}
      <button onClick={hello("John")}>Click Me!</button>
    </div>
  );
};

export default App