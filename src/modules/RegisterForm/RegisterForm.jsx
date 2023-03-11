import PropTypes from 'prop-types';
import FormField from 'shared/components/FormField/FormField';
import Button from 'shared/components/Button/Button';
import { useEffect } from 'react';
import { useForm } from 'shared/hooks/useForm';
import { saveDataToLocalSt, registerFormLSK } from 'shared/helpers/localStfunc';
import { initialsRegisterFormValues } from './initialsRegisterFormValues';
import { fields } from './fields';

import { Form } from './RegisterForm.styled';

const RegisterForm = ({ onSubmit }) => {
	const { state, handleChange, onFormSubmit } = useForm(
		initialsRegisterFormValues,
		onSubmit,
		registerFormLSK
	);

	useEffect(() => {
		saveDataToLocalSt(registerFormLSK, state);
	}, [state]);

	const { name, email, password } = state;

	return (
		<Form onSubmit={onFormSubmit}>
			<FormField handleChange={handleChange} value={name} {...fields.name} />
			<FormField handleChange={handleChange} value={email} {...fields.email} />
			<FormField
				handleChange={handleChange}
				value={password}
				{...fields.password}
			/>
			<Button type="submit" text="Register" title="Register" />
		</Form>
	);
};

RegisterForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
