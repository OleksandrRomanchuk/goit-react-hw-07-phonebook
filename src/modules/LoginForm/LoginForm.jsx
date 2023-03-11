import PropTypes from 'prop-types';
import FormField from 'shared/components/FormField/FormField';
import Button from 'shared/components/Button/Button';
import { useEffect } from 'react';
import { useForm } from 'shared/hooks/useForm';
import { saveDataToLocalSt, loginFormLSK } from 'shared/helpers/localStfunc';
import { initialsLoginFormValues } from './initialsLoginFormValues';
import { fields } from './fields';

import { Form } from './LoginForm.styled';

const LoginForm = ({ onSubmit }) => {
	const { state, handleChange, onFormSubmit } = useForm(
		initialsLoginFormValues,
		onSubmit,
		loginFormLSK
	);

	useEffect(() => {
		saveDataToLocalSt(loginFormLSK, state);
	}, [state]);

	const { email, password } = state;

	return (
		<Form onSubmit={onFormSubmit}>
			<FormField handleChange={handleChange} value={email} {...fields.email} />
			<FormField
				handleChange={handleChange}
				value={password}
				{...fields.password}
			/>
			<Button type="submit" text="Log in" title="Log in" />
		</Form>
	);
};

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
