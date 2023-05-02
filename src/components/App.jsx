import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Phonebook } from './Phonebook/Phonebook.jsx';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <Phonebook
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid gray',
            }}
          />
        </Section>
        <Section title={'Number'}></Section>
      </>
    );
  }
}
