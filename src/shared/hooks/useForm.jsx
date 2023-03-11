import { useState } from 'react';
import { loadDataFromLocalSt } from 'shared/helpers/localStfunc';

export const useForm = (initialState, onSubmit, LS_KEY) => {
	const [state, setState] = useState(
		() => loadDataFromLocalSt(LS_KEY) ?? { ...initialState }
	);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = event => {
		event.preventDefault();

		onSubmit({ ...state });
		setState({ ...initialState });
	};

	return { state, setState, handleChange, onFormSubmit };
};
