import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredItems = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter);
    });
  };
  return (
    <ul>
      {getFilteredItems().map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};
