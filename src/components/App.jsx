import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';

import { selectError, selectIsLoading } from 'store/selectors';
import styles from './App.module.css';
import { getContactsThunk } from 'store/contacts/thunk';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <h2 className={styles.loadingText}>Loading.... </h2>}
      {error && <h2 className={styles.errorText}>{error}</h2>}
    </div>
  );
};

export default App;
