import { contactsReducer } from './contacts/slice.js';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/slice.js';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
