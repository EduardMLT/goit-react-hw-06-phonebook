import { useSelector } from 'react-redux';

import { ContactListCard } from 'components/ContactListCard/ContactListCard.js';
import { List } from './ContactList.styled';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <ContactListCard item={item} />
        </li>
      ))}
    </List>
  );
};