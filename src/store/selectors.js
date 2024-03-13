import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilters = state => state.filter.filter;

export const filteredContactsSelector = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterValue) => {
    return contacts?.filter(el => el.name.toLowerCase().includes(filterValue));
  }
);
