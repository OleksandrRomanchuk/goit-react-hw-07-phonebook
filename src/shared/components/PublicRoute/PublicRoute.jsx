import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ component: Component }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	if (isLoggedIn) {
		return <Navigate to="/my-contacts" />;
	}

	return <Component />;
};

export default PublicRoute;
