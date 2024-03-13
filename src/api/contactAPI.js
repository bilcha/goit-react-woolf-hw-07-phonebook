import axios from 'axios';

axios.defaults.baseURL =
  'https://65f0e3fada8c6584131c90b1.mockapi.io/phone-book/contacts';

export const getContactsAPI = async () => {
  const { data } = await axios('');
  return data;
};

export const addContactsAPI = async contact => {
  const { data } = await axios.post('', contact);
  return data;
};

export const deleteContactsAPI = async id => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};
