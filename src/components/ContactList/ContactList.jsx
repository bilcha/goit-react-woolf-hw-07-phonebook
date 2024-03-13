import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { filteredContactsSelector } from 'store/selectors';

export const ContactList = () => {
  const getFilteredItems = useSelector(filteredContactsSelector);
  return (
    <ul>
      {getFilteredItems.map(item => (
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
