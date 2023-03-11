import RegisterForm from 'modules/RegisterForm/RegisterForm';
// import { useDispatch } from 'react-redux';
// import { authRegister } from 'redux/auth/operation';

const RegisterPage = () => {
	// const dispatch = useDispatch();

	const onRegisterFormSubmit = credentials => {
		// dispatch(authRegister(credentials));
	};

	return <RegisterForm onSubmit={onRegisterFormSubmit} />;
};

export default RegisterPage;
