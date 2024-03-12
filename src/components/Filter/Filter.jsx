import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'store/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const addFilter = e => {
    const filters = e.target.value.toLowerCase();
    dispatch(setFilter(filters));
  };
  return (
    <>
      <label htmlFor="filterField">Find contacts by name</label>
      <input
        className={styles.inputField}
        id="filterField"
        onChange={addFilter}
      />
    </>
  );
};
