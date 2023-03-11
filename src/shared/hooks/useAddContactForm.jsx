import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
	loadDataFromLocalSt,
	saveDataToLocalSt,
} from 'shared/helpers/localStfunc';

export const useAddContactForm = (initialState, onSubmit, LS_KEY) => {
	// const navigate = useNavigate();
	const [state, setState] = useState(
		() => loadDataFromLocalSt(LS_KEY) ?? { ...initialState }
	);

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'contactsGroupList':
				return (
					state['group'] !== '---' &&
					setState(prevState => ({ ...prevState, group: value }))
				);
			case 'linkedin':
				return setState(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));
			case 'facebook':
				return setState(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));
			case 'telegram':
				return setState(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));

			default:
				return setState(prevState => ({ ...prevState, [name]: value }));
		}
	};

	const onFormSubmit = async event => {
		event.preventDefault();

		const newContact = { ...state };

		if (!newContact.group) newContact.group = '---';

		const result = await onSubmit(newContact);

		if (result) {
			saveDataToLocalSt(LS_KEY, initialState);
			setState({ ...initialState });
			// navigate('/my-contacts');
		} else {
			alert('Contact with such names is already in your phone book.');
		}
	};

	return { state, setState, handleChange, onFormSubmit };
};
