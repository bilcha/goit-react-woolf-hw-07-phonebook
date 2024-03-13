import { createSlice } from '@reduxjs/toolkit';
import {
  handleAddContact,
  handleDeleteContact,
  handleFulfilledContacts,
  handlePending,
  handleRejected,
} from './handlers';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
