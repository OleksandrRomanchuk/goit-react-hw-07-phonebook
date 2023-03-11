import { useLocation } from 'react-router-dom';

import { AppNav, List, PageLink } from './AppNavigation.styled';

const AppNavigation = () => {
	const { pathname } = useLocation();
	const ongroupsPage = Boolean(pathname.includes('/my-groups'));

	return (
		<AppNav ongroupsPage={ongroupsPage}>
			<List>
				<li>
					<PageLink to="/my-contacts">My contacts</PageLink>
				</li>
				<li>
					<PageLink to="/my-groups">My groups</PageLink>
				</li>
				<li>
					<PageLink to="/register">Sign up</PageLink>
				</li>
				<li>
					<PageLink to="/login">Log in</PageLink>
				</li>
			</List>
		</AppNav>
	);
};

export default AppNavigation;
