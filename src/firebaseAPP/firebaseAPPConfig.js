import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBdHXihzfdJiD9wdT_Z7cHYJoKI7qcw_28',
	authDomain: 'phonebook-b75ef.firebaseapp.com',
	projectId: 'phonebook-b75ef',
	storageBucket: 'phonebook-b75ef.appspot.com',
	messagingSenderId: '41695561343',
	appId: '1:41695561343:web:85ed70076e34e70f7e214a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
