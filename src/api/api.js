import axios from 'axios';

const CONTACTS_BASE_URL = 'https://connections-api.goit.global/';

const apiContactsBaseUrl = axios.create({
  baseURL: CONTACTS_BASE_URL,
});

const resourceApi = resource => {
  return {
    getAll: () => apiContactsBaseUrl.get(`${resource}`),
    create: data => apiContactsBaseUrl.post(`${resource}`, data),
    delete: id => apiContactsBaseUrl.delete(`/${resource}/${id}`),
  };
};

const contactsApi = resourceApi('contacts');

export { contactsApi, apiContactsBaseUrl };
