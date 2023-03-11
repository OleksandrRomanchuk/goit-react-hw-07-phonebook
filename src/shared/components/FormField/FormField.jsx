import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { Label, Input } from './FormField.styled';

const FormField = ({ label, handleChange, ...restProps }) => {
	const id = useMemo(() => nanoid(5), []);

	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} onChange={handleChange} {...restProps} />
		</div>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default FormField;
