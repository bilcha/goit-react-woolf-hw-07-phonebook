import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsAPI,
  deleteContactsAPI,
  getContactsAPI,
} from 'api/contactAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  (_, thunkAPI) => {
    try {
      const response = getContactsAPI();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  (contact, thunkAPI) => {
    try {
      const response = addContactsAPI(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  (id, thunkAPI) => {
    try {
      const response = deleteContactsAPI(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
