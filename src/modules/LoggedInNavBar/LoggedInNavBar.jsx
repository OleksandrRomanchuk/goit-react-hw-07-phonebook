import Logo from 'shared/components/Logo/Logo';
import Filter from '../../shared/components/Filter/Filter';
import AppNavigation from 'shared/components/AppNavigation/AppNavigation';
import UserMenu from 'shared/components/UserMenu/UserMenu';

const LoggedInNavBar = () => {
	return (
		<>
			<Logo />
			<Filter />
			<AppNavigation />
			<UserMenu />
		</>
	);
};

export default LoggedInNavBar;
