import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'firebaseAPP/firebaseAPPConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const register = createAsyncThunk('auth/registerUser', async credentials => {
	const { email, password } = credentials;
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		console.log(user);
		// return user;
	} catch (error) {
		console.log(error);
	}
});

export { register };
