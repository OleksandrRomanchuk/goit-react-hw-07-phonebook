import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { LogoLink } from './Logo.styled';

const Logo = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	if (isLoggedIn) return <LogoLink to="/my-contacts">Phonebook</LogoLink>;

	return <LogoLink to="/">Phonebook</LogoLink>;
};

export default Logo;
