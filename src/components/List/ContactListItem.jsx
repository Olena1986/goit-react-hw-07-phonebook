import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemStyle } from './ContactListItem.styled';
import { deleteContact } from 'Redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ contact }) => {
   const dispatch = useDispatch();

  return (
    <ContactItemStyle.Item>
      {contact.name}
      <ContactItemStyle.Button onClick={()=> dispatch(deleteContact(contact.id))}>Delete</ContactItemStyle.Button>
    </ContactItemStyle.Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;

