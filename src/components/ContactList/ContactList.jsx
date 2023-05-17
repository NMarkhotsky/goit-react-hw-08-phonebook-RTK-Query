import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/contacts/filtersSlice';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactsLoader } from 'components/Loader/Loader';

export const ContactList = () => {
  const { data = [], isLoading, isError } = useGetContactsQuery();
  const filter = useSelector(selectFilters);

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {isLoading && !isError && <ContactsLoader />}
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
