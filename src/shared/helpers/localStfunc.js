const saveDataToLocalSt = (key, value) => {
	try {
		const serializedState = JSON.stringify(value);
		localStorage.setItem(key, serializedState);
	} catch (error) {
		console.error('Set state error: ', error.message);
	}
};

const loadDataFromLocalSt = key => {
	try {
		const serializedState = localStorage.getItem(key);
		return serializedState === null ? undefined : JSON.parse(serializedState);
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

// LSK = LocalStorageKey
const newContactLSK = 'newContactformValues(hw-07)';
const registerFormLSK = 'registerFormValues(hw-07)';
const loginFormLSK = 'loginFormValues(hw-07)';
const editFormLSK = 'editFormValues(hw-07)';

export {
	saveDataToLocalSt,
	loadDataFromLocalSt,
	newContactLSK,
	registerFormLSK,
	loginFormLSK,
	editFormLSK,
};
