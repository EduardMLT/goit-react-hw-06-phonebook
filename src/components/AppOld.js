import { GlobalStyle } from 'GlobalStyle';
import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactList } from './ContactList/ContactList.js';
import { Filter } from './Filter/Filter.js';

import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = cardId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== cardId),
      };
    });
  };

  filterContacts = value => {
    console.log(value);
    this.setState({
      filter: value,
    });
  };

  getFilteredContactsList = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Wrapper>
        <h1>Phoneboook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.filterContacts} />
        <ContactList
          contacts={this.getFilteredContactsList()}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Wrapper>
    );
  }
}


