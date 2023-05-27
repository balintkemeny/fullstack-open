const Hello = ({ name, age }) => {
  const yearOfBirth = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>You are {age} years old.</p>
      <p>So you were probably born in {yearOfBirth()}.</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 25
  
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name='George' age = {2 * 16} />
      <Hello name='Daisy'  age = {5} />
      <Hello name= {name}  age = {age} />
    </div>
  )
}

export default App