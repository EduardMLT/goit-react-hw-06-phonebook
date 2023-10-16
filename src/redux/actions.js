export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const filterContacts = value => {
  return {
    type: 'filter/filterContacts',
    payload: value,
  };
};
