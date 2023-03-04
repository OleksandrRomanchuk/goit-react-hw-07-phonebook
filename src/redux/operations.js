import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
	'https://63fc83688ef914c55599030a.mockapi.io/api/contacts';

const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const { data } = await axios('/');

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkAPI) => {
		try {
			const { data } = await axios.post('/', contact);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
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
	async (id, thunkAPI) => {
		try {
			const { data } = await axios.delete(`/${id}`);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const editContact = createAsyncThunk(
	'contacts/editContact',
	async (contact, thunkAPI) => {
		try {
			const { data } = await axios.put(`/${contact.id}`, contact);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
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

export { fetchContacts, addContact, deleteContact, editContact };