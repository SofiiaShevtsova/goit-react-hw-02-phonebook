// import styled from '@emotion/styled';

const Contacts = props => {
  const { contacts, removeContacts } = props;
  return contacts.length > 0 ? (
    <ul className="a">
      {contacts.map(elem => (
        <Contact
          name={elem.name}
          number={elem.number}
          id={elem.id}
          key={elem.id}
          removeContacts={removeContacts}
        />
      ))}
    </ul>
  ) : (
    <p className="x">"There is no contacts"</p>
  );
};

const Contact = props => {
  const { name, number, removeContacts, id } = props;
  return (
    <li className="stat__item">
      {name}: <span>{number}</span>
      <button type="button" id={id} onClick={removeContacts}>
        Delete
      </button>
    </li>
  );
};

export default Contacts;
