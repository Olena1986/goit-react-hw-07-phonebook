import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, addContactThunk, deleteContactThunk  } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter: (state, {payload}) => {
      state.filter = payload;
    },
  },
 extraReducers: builder => { builder.addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
 

      }).addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
 

      }).addCase(deleteContactThunk.fulfilled, (state, action) => {
        const contactId = state.contacts.items.findIndex(item => item.id === action.payload);
        state.contacts.items.splice(contactId, 1);     


      }).addMatcher(
				action => action.type.endsWith('/fulfilled'),
				(state) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;

				}
			)
			.addMatcher(
				action => action.type.endsWith('/pending'),
				(state) => {
					state.contacts.isLoading = true;
          state.contacts.error = null;
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, action) => {
					state.contacts.error = action.payload;
                  state.contacts.isLoading = false;
				})
  }
    
})




export const {  addContact, deleteContact, updateFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

