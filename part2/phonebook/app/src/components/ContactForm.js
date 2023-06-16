const ContactForm = (props) => (
  <form onSubmit={props.addNote}>
    <div>
      name: <input onChange={props.handleChangeName} value={props.newName} />
    </div>
    <div>
      number: <input onChange={props.handleChangeNumber} value={props.newNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default ContactForm;
