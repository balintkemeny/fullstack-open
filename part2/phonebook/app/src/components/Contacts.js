const Contact = ({ contact }) => (
  <li>
    {contact.name}: {contact.number}
  </li>
);

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} />
    ))}
  </ul>
);

export default Contacts;
