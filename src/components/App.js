import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactList } from './ContactList/ContactList.js';
import { Filter } from './Filter/Filter.js';

import { useState, useEffect } from 'react';

import { Wrapper } from './App.styled';



export const App = () => {

  const getInitialContacts = () => {
  if (localStorage.getItem('contacts') !== null) {
    return JSON.parse(localStorage.getItem('contacts'));
  }
  return [];
  };
  
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState(''); 

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = cardId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== cardId)
    );
  };

  const filterContacts = value => {
    setFilter(value);
  };

  const getFilteredContactsList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  
    return (
      <Wrapper>
        <h1>Phoneboook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={filterContacts} />
        <ContactList
          contacts={getFilteredContactsList()}
          onDelete={deleteContact}
        />
        <GlobalStyle />
      </Wrapper>
    );
  
}