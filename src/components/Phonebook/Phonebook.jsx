import { Component } from 'react';

import Section from './Section';
import Contacts from './Contacts';
import FormAddContact from './FormAddContact';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormAddContact />
        </Section>
        <Section title={'Contacts'}>
          <Contacts />
        </Section>
      </>
    );
  }
}
