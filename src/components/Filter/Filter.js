import { FilterLabel } from './Filter.styled';

export const Filter = ({ onFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input onChange={e => onFilter(e.currentTarget.value)} name="filter" />
    </FilterLabel>
  );
};