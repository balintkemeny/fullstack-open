const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello, {props.name}!</p>
      <p>Your are {props.age} years old.</p>
    </div>
  )
}

const App = () => (
  <div>
    <h1>Greetings!</h1>
    <Hello name='George' age = {2 * 16} />
    <Hello name='Daisy'  age = {5} />
  </div>
)

export default App