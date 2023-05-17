import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/ContactFilter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/GlobalStyle/Container.styled';

export default function Contacts() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {/* {isLoading && !error && <ContactsLoader />} */}
    </Container>
  );
}
