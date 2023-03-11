import { createSlice } from '@reduxjs/toolkit';
import {
	fetchContacts,
	fetchContactById,
	addContact,
	deleteContact,
	editContact,
} from './contactsOperations';

const handlePending = state => {
	state.isLoading = true;
};
const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		currentContact: null,
		isLoading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContactById.pending, handlePending)
			.addCase(addContact.pending, handlePending)
			.addCase(deleteContact.pending, handlePending)
			.addCase(editContact.pending, handlePending)
			.addCase(fetchContacts.rejected, handleRejected)
			.addCase(fetchContactById.rejected, handleRejected)
			.addCase(addContact.rejected, handleRejected)
			.addCase(deleteContact.rejected, handleRejected)
			.addCase(editContact.rejected, handleRejected)
			.addCase(fetchContacts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = payload;
			})
			.addCase(fetchContactById.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentContact = payload;
			})
			.addCase(addContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items.push(payload);
			})
			.addCase(deleteContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				if (state.currentContact && state.currentContact.id === payload.id)
					state.currentContact = null;
				state.items = state.items.filter(contact => contact.id !== payload.id);
			})
			.addCase(editContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.map(contact => {
					if (contact.id === payload.id) {
						const editedContact = { ...contact, ...payload };
						return editedContact;
					} else {
						return contact;
					}
				});
			});
	},
});
export const contactsReducer = contactsSlice.reducer;
