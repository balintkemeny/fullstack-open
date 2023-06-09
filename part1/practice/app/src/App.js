import { useState } from "react"

const App = () => {
  const [ value, setValue ] = useState(10);

  const hello = () => {
    const handler = () => {
      console.log("Hello, World!")
    };

    return handler;
  };


  return (
    <div>
      {value}
      <button onClick={hello()}>Click Me!</button>
    </div>
  );
};

export default App