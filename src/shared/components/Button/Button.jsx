import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({ children, text, type, title, clickHandler, location }) => {
	return (
		<Btn type={type} title={title} onClick={clickHandler} location={location}>
			{children}
			{text}
		</Btn>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	clickHandler: PropTypes.func,
	location: PropTypes.string,
};

export default Button;
