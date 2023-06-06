import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: ""
}


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, {payload}) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, {payload}) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== payload);
    },
    updateFilter: (state, {payload}) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
