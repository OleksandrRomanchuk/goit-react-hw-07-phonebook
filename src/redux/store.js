import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
import { groupFilterReducer } from './groupFilter/groupFilterSlice';

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
		auth: authReducer,
		groupFilter: groupFilterReducer,
	},
});
