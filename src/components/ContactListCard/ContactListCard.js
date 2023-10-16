import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

export const ContactListCard = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name}: {number}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};




