import { contactsReducer } from './contacts/slice.js';
import { filterReducer } from './filter/slice.js';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
