const Contact = ({ contact, deleteHandler }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={deleteHandler}>Delete</button>
  </li>
);

const Contacts = ({ contacts, deleteHandler }) => (
  <ul>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteHandler={deleteHandler(contact.id)}
      />
    ))}
  </ul>
);

export default Contacts;
