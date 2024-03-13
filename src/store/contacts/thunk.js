import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsAPI,
  deleteContactsAPI,
  getContactsAPI,
} from 'api/contactAPI';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContactsAPI()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => addContactsAPI(contact)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContactsAPI(id)
);
