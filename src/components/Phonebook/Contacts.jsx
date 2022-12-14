// import styled from '@emotion/styled';

const Contacts = props => {
  props = null;
  return props ? (
    <ul className="a">
      <li className="stat__item">
        Good: <span>{}</span>
      </li>
    </ul>
  ) : (
    <p className="x">"There is no contacts"</p>
  );
};

export default Contacts;
