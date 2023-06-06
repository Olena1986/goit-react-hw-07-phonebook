import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyle } from './ContactForm.styled';


const ContactForm = ({ handleAddContact }) => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    handleAddContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <FormStyle.Form onSubmit={handleSubmit}>
      <FormStyle.Label>
        Name:
        <FormStyle.Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormStyle.Label>

      <FormStyle.Label>
        Number:
        <FormStyle.Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </FormStyle.Label>
      <FormStyle.SubmitButton type="submit">Add Contact</FormStyle.SubmitButton>
    </FormStyle.Form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};

export default ContactForm;

