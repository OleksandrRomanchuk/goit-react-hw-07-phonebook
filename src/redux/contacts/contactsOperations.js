import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
	'https://63fc83688ef914c55599030a.mockapi.io/api/contacts';

const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios('/');

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const fetchContactById = createAsyncThunk(
	'contacts/fetchConntactById',
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await axios(`/${id}`);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, { rejectWithValue }) => {
		try {
			console.log(contact);
			const { data } = await axios.post('/', contact);
			console.log('data: ', data);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
	{
		condition: (contact, { getState }) => {
			const {
				contacts: { items },
			} = getState();

			const result = items.some(({ name }) => name === contact.name);

			return !result;
		},
	}
);

const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await axios.delete(`/${id}`);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const editContact = createAsyncThunk(
	'contacts/editContact',
	async (contact, { rejectWithValue }) => {
		try {
			const { data } = await axios.put(`/${contact.id}`, contact);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
	{
		condition: (contact, { getState }) => {
			const {
				contacts: { items },
			} = getState();

			const result = items.some(
				({ name, id }) => name === contact.name && id !== contact.id
			);

			return !result;
		},
	}
);

export {
	fetchContacts,
	fetchContactById,
	addContact,
	deleteContact,
	editContact,
};
