import React from 'react';
import PropTypes from 'prop-types';
import { ContactListStyle } from './ContactList.styled';
import ContactListItem from '../List/ContactListItem';

const ContactList = ({ contacts }) => {
 
  return (
    <ContactListStyle.ListStyle>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact}/>
      ))}
    </ContactListStyle.ListStyle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;

