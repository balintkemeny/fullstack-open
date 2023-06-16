import { useState } from 'react'

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Arto Hellas', number: '+151-2233445' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const contactsToDisplay = nameFilter === ''
    ? contacts
    : contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const handleInputChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    
    if (contacts.some(person => person.name === newName)) {
      alert(`${newName} is already added to the Phonebook!`)
      setNewName('')
      setNewNumber('')
      return
    }
    
    const contactObject = {
      id: contacts.length + 1,
      name: newName,
      number: newNumber
    }

    console.log('Button clicked. New contact added: ', contactObject)
    setContacts(contacts.concat(contactObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>search: <input onChange={(event) => setNameFilter(event.target.value)} value={nameFilter}/></div>
      </form>
      <h2>Add a new contact:</h2>
      <form onSubmit={addNote}>
        <div>name: <input onChange={handleInputChangeName} value={newName}/></div>
        <div>number: <input onChange={handleInputChangeNumber} value={newNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Contacts:</h2>
      <ul>
        {contactsToDisplay.map(person => <li key={person.id}>{person.name}: {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App