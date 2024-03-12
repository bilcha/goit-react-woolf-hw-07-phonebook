import { deleteContact } from 'store/contacts/slice';
import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, number }) => {
  const disptch = useDispatch();

  function deleteContactHandler(id) {
    disptch(deleteContact(id));
  }
  return (
    <li>
      {name}: {number}
      <button
        className={styles.button}
        onClick={() => deleteContactHandler(id)}
      >
        Delete
      </button>
    </li>
  );
};
