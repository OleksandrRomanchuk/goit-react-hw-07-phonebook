import LoginForm from 'modules/LoginForm/LoginForm';
// import { useDispatch } from 'react-redux';
// import { authLogin } from 'redux/auth/operation';

const LoginPage = () => {
	// const dispatch = useDispatch();

	const onLoginFormSubmit = credentials => {
		// dispatch(authLogin(credentials));
	};

	return <LoginForm onSubmit={onLoginFormSubmit} />;
};

export default LoginPage;
