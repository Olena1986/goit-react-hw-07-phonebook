import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemStyle } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'Redux/operations';

const ContactListItem = ({ contact }) => {
   const dispatch = useDispatch();

  return (
    <ContactItemStyle.Item>
      {contact.name}: {contact.number}
      <ContactItemStyle.Button onClick={()=> dispatch(deleteContactThunk(contact.id))}>Delete</ContactItemStyle.Button>
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

