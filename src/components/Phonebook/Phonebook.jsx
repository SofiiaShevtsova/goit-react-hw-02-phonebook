import { Component } from 'react';

import Section from './Section';
import Contacts from './Contacts';
import FormAddContact from './FormAddContact';
import FilterContact from './FilterContact';

export class Phonebook extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: '',
  };

  addContact = (contact) => {
    this.setState(prevState => (this.state.contacts.length > 0 ?
      { contacts: [...prevState.contacts, contact] } :
      { contacts: [contact] }))
  }

  findContactsByName = (value) => {
console.log(value);
  }

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormAddContact name={this.state.name} contacts={this.state.contacts} number={this.state.number} addContactOnSubmit={ this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <FilterContact findContactsByName={this.findContactsByName} filter={ this.filter} />
          <Contacts contacts={ this.state.contacts} />
        </Section>
      </>
    );
  }
}
