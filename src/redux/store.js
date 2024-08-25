import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    authSlice: authReducer,
  },
});
