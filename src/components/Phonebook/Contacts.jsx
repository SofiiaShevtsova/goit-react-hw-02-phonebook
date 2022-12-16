import StyleList from './PhonebookStyles';

const {ListOfContactsStyle, BtnDeleteContact} = StyleList

const Contacts = props => {
  const { contacts, removeContacts } = props;
  console.log(contacts);
  return contacts.length > 0 ? (
    <ListOfContactsStyle>
      {contacts.map(elem => (
        <Contact
          name={elem.name}
          number={elem.number}
          id={elem.id}
          key={elem.id}
          removeContacts={removeContacts}
        />
      ))}
    </ListOfContactsStyle>
  ) : (
    <p className="x">"There is no contacts"</p>
  );
};

const Contact = props => {
  const { name, number, removeContacts, id } = props;
  return (
    <li className="stat__item">
      {name}: <span>{number}</span>
      <BtnDeleteContact type="button" id={id} onClick={removeContacts}>
        Delete
      </BtnDeleteContact>
    </li>
  );
};

export default Contacts;
