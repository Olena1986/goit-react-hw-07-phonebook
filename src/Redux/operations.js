import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://647f305ac246f166da904a97.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk (
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const addContactThunk = createAsyncThunk (
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const { data } = await axios.post('contacts', contact);
      return data;
        }
         catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            await axios.delete(`contacts/${id}`);
      return id;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);     
        } 
    },
    {
        condition: (_, thunkAPI) => {
            const loading = thunkAPI.getState().contacts.isLoading;
            if (loading) {
                return false
            }
        }
    }
)
