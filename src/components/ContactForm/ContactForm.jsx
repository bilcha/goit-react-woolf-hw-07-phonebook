import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'store/contacts/slice';

import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleAddContacts({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  }
  function handleAddContacts(newData) {
    if (
      contacts.find(
        item => item.name.toLowerCase() === newData.name.toLowerCase()
      )
    ) {
      alert(`${newData.name} is already in contacts.`);
    } else {
      dispatch(addContact(newData));
    }
  }
  function handleChange({ target: { name, value } }) {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameField">Name</label>
        <input
          className={styles.inputField}
          id="nameField"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneField">Number</label>
        <input
          className={styles.inputField}
          id="phoneField"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </div>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
