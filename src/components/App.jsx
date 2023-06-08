
import { useDispatch, useSelector } from 'react-redux';
import { AppStyle } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { updateFilter } from 'Redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'Redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  

 useEffect(() => {
    dispatch(fetchContactsThunk());
 }, [dispatch]);
  
  
  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  const filteredContacts = contacts?.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <AppStyle.AppContainer>
      <AppStyle.AppTitle>Phonebook</AppStyle.AppTitle>
      <ContactForm />

      <AppStyle.AppSubtitle>Contacts</AppStyle.AppSubtitle>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </AppStyle.AppContainer>
  );
};

export default App;
