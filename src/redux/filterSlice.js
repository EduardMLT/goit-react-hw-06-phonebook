export const filterContacts = value => {
  return {
    type: 'filter/filterContacts',
    payload: value,
  };
};

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/filterContacts':
      return action.payload;
    default:
      return state;
  }
};
