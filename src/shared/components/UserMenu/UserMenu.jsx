import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { authLogout } from 'redux/auth/operation';
import { resetContactsState } from 'redux/contacts/actions';

import { InfoWrapper, UserName } from './UserMenu.styled';

const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	const clickHandler = () => {
		dispatch(authLogout());
		dispatch(resetContactsState());
	};

	return (
		<InfoWrapper>
			<UserName>{userName}</UserName>
			<Button
				type="button"
				text="Log out"
				title="Log out"
				clickHandler={clickHandler}
				location="logOut"
			/>
		</InfoWrapper>
	);
};

export default UserMenu;
