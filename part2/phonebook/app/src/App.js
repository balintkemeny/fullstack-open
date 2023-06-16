import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '+151-2233445' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleInputChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the Phonebook!`)
      setNewName('')
      setNewNumber('')
      return
    }
    
    const contactObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    console.log('Button clicked. New contact added: ', contactObject)
    setPersons(persons.concat(contactObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>name: <input onChange={handleInputChangeName} value={newName}/></div>
        <div>number: <input onChange={handleInputChangeNumber} value={newNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.id}>{person.name}: {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App