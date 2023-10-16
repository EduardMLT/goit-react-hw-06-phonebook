import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

import { FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input onChange={handleFilterChange} name="filter" />
    </FilterLabel>
  );
};


