import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactList } from './ContactList/ContactList.js';
import { Filter } from './Filter/Filter.js';

import { Wrapper } from './App.styled';


export const App = () => {

  
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <GlobalStyle />
      </Wrapper>
    );
  
}