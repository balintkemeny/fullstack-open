import { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import contactService from "./services/contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    contactService.getAll().then((initialContacts) => {
      setContacts(initialContacts);
    });
  }, []);

  const contactsToDisplay =
    nameFilter === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(nameFilter.toLowerCase())
        );

  const handleChangeName = (event) => setNewName(event.target.value);
  const handleChangeNumber = (event) => setNewNumber(event.target.value);
  const handleChangeNameFilter = (event) => setNameFilter(event.target.value);

  const addNote = (event) => {
    event.preventDefault();

    if (contacts.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the Phonebook!`);
      setNewName("");
      setNewNumber("");
      return;
    }

    const contactObject = {
      id: contacts.length + 1,
      name: newName,
      number: newNumber,
    };

    contactService
      .create(contactObject)
      .then((newContact) => {
        console.log("Button clicked. New contact added: ", newContact);

        setContacts(contacts.concat(newContact));
        setNewName("");
        setNewNumber("");
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} handleChangeFilter={handleChangeNameFilter} />
      <h2>Add a new contact:</h2>
      <ContactForm
        addNote={addNote}
        handleChangeName={handleChangeName}
        newName={newName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />
      <h2>Contacts:</h2>
      <Contacts contacts={contactsToDisplay} />
    </div>
  );
};

export default App;
