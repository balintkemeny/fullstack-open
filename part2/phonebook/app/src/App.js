import { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import contactService from "./services/contacts";
import Notification from "./components/Notification"

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState({ message: null });

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
  const resetNotification = () => setNotification({ message: null });

  const upsertContact = (event) => {
    event.preventDefault();

    const existingContact = contacts.find((c) => c.name === newName);
    if (existingContact) {
      updateContactPhoneNumber({ ...existingContact, number: newNumber });
      return;
    }

    const contactObject = {
      id: contacts.length + 1,
      name: newName,
      number: newNumber,
    };

    contactService.create(contactObject).then((newContact) => {
      setContacts(contacts.concat(newContact));
      setNewName("");
      setNewNumber("");
      setNotification({ message: `Added ${newContact.name} to the Phonebook`, type: "notificationSuccess" })
      setTimeout(resetNotification, 5000);
    });
  };

  const deleteNoteWithId = (id) => () => {
    const contact = contacts.find((c) => c.id === id);
    if (!window.confirm(`Delete ${contact.name}?`)) {
      return;
    }

    contactService.deleteWithId(id).then(() => {
      setContacts(contacts.filter((c) => c.id !== id));
    });
  };

  const updateContactPhoneNumber = (contact) => {
    if (
      window.confirm(
        `${contact.name} is already added to the phonebook. Replace the old number with the new one?`
      )
    ) {
      contactService.update(contact).then((modifiedContact) => {
        setContacts(
          contacts.map((c) =>
            c.id === modifiedContact.id ? modifiedContact : c
          )
        );
        setNotification({ message: `Modified ${modifiedContact.name}'s phone number`, type: "notificationSuccess" })
        setTimeout(resetNotification, 5000);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter filter={nameFilter} handleChangeFilter={handleChangeNameFilter} />
      <h2>Add a new contact:</h2>
      <ContactForm
        upsertContact={upsertContact}
        handleChangeName={handleChangeName}
        newName={newName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />
      <h2>Contacts:</h2>
      <Contacts contacts={contactsToDisplay} deleteHandler={deleteNoteWithId} />
    </div>
  );
};

export default App;
