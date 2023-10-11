import { ContactListCard } from 'components/ContactListCard/ContactListCard.js';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(item => (
        <li key={item.id}>
          <ContactListCard item={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};