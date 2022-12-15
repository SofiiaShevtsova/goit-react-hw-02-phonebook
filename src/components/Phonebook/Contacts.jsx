// import styled from '@emotion/styled';

const Contacts = props => {
  const { contacts } = props;
  return contacts.length > 0 ? (
    <ul className="a">
      {contacts.map((elem) => (
        <Contact name = {elem.name} number={elem.number} key={elem.id}/>
      ))}
    </ul>
  ) : (
    <p className="x">"There is no contacts"</p>
  );
};

const Contact = props => {
  const {name, number} = props
  return (<li className="stat__item">{name}: <span>{ number}</span></li>)
}

export default Contacts;
