import { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import FormAddContact from '../FormAddContact/FormAddContact';
import FilterContact from '../FilterContact/FilterContact';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.find(elem => elem.name === contact.name)) {
      alert('You have this contacts');
      return;
    }
    this.setState(prevState => {
      return this.state.contacts.length > 0
        ? { contacts: [...prevState.contacts, contact] }
        : { contacts: [contact] };
    });
  };

  removeContact = event => {
    const idContactToRemove = event.target.attributes.id.nodeValue;
    const indexContact = this.state.contacts.findIndex(
      elem => elem.id === idContactToRemove
    );
    const arrayContacts = [...this.state.contacts];
    arrayContacts.splice(indexContact, 1);
    this.setState({ contacts: arrayContacts });
  };

  findContactsByName = event =>
    this.setState({ filter: event.target.value.trim().toLowerCase() });

  render() {
    const contactToFind = this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <>
        <Section title={'Phonebook'}>
          <FormAddContact addContactOnSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <FilterContact
            findContactsByName={this.findContactsByName}
            filters={this.state.filter}
          />
          <Contacts
            contacts={
              this.state.filter !== '' ? contactToFind : this.state.contacts
            }
            removeContacts={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

FormAddContact.propTypes = {
  addContactOnSubmit: PropTypes.func.isRequired,
};

FilterContact.propTypes = {
  findContactsByName: PropTypes.func.isRequired,
  filters: PropTypes.string,
};
Contacts.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
      PropTypes.array
    ),
  ]),
  removeContacts: PropTypes.func.isRequired,
};
