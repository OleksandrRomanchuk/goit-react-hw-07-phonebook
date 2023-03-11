import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: { name: '', email: '' },
		isLoggedIn: false,
	},
	extraReducers: builder => {
		builder.addCase(register.fulfilled, state => {
			// state.user =
			console.log(state.user);
		});
	},
});

export const authReducer = authSlice.reducer;
