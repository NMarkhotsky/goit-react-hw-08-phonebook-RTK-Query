import { useDispatch, useSelector } from 'react-redux';
import { filteredContact } from 'redux/contacts/filtersSlice';
import { Label, P } from './Filter.styled';
import { selectFilters } from 'redux/contacts/selector';

export const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const changeFilter = ({ target: { value } }) => {
    dispatch(filteredContact(value));
  };

  return (
    <Label>
      <P>Find contacts by name</P>
      <input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
