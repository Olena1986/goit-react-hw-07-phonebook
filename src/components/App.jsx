
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { AppStyle } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact, updateFilter } from 'Redux/contactsSlice.js';

const App = () => {
  const dispatch = useDispatch();
 const contacts = useSelector(state => state.contacts.contacts);
const filter = useSelector(state => state.contacts.filter);

 const handleAddContact = ({ name, number }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number, id: nanoid() }));
  };


  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

 const filteredContacts = contacts?.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <AppStyle.AppContainer>
      <AppStyle.AppTitle>Phonebook</AppStyle.AppTitle>
      <ContactForm handleAddContact={handleAddContact} />

      <AppStyle.AppSubtitle>Contacts</AppStyle.AppSubtitle>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </AppStyle.AppContainer>
  );
};

export default App;
