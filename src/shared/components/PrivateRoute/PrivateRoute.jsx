import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/selectors';

const PrivateRoute = ({ component: Component }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const token = useSelector(selectToken);

	if (!isLoggedIn && !token) {
		return <Navigate to="/" />;
	}

	return <Component />;
};

export default PrivateRoute;
