import Container from 'shared/components/Container/Container';
import Filter from 'shared/components/Filter/Filter';
import AppNavigation from 'shared/components/AppNavigation/AppNavigation';
import { useLocation } from 'react-router-dom';

import { NavBar, Logo } from './Header.styled';

const Header = () => {
	const { pathname } = useLocation();
	const onGroupsPage = Boolean(pathname.includes('/my-groups'));

	return (
		<NavBar>
			<Container layout="flex">
				<Logo to="/my-contacts">Phonebook</Logo>
				{!onGroupsPage && <Filter />}

				<AppNavigation />
			</Container>
		</NavBar>
	);
};

export default Header;
