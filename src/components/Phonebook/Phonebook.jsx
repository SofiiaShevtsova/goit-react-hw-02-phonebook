import { Component } from 'react';

import Section from './Section';
import Contacts from './Contacts';
import FormAddContact from './FormAddContact';
import FilterContact from './FilterContact';

let contactsToFind = null;

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
    this.setState(prevState =>
      this.state.contacts.length > 0
        ? { contacts: [...prevState.contacts, contact] }
        : { contacts: [contact] }
    );
  };

  removeContact = event => {
    const nameForFind = event.target.attributes.id.nodeValue;
    const indexContact = this.state.contacts.findIndex(
      elem => elem.id === nameForFind
    );
    const array = [...this.state.contacts];
    array.splice(indexContact, 1);
    this.setState({ contacts: array });
  };

  findContactsByName = event => {
    this.setState({ filter: event.target.value.trim() });
    const inputValue = event.target.value.trim().toLowerCase();

    contactsToFind = this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(inputValue)
    );
    return;
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormAddContact
            contacts={this.state.contacts}
            addContactOnSubmit={this.addContact}
          />
        </Section>
        <Section title={'Contacts'}>
          <FilterContact
            findContactsByName={this.findContactsByName}
            filters={this.state.filter}
          />
          <Contacts
            contacts={contactsToFind || this.state.contacts}
            removeContacts={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
