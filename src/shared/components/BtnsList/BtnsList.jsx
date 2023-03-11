import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectCurrentContact } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { CgDetailsMore } from 'react-icons/cg';
import { BiEditAlt } from 'react-icons/bi';

import { BtnList, DeleteBtn, DetailBtn, EditBtn } from './BtnsList.styled';

const BtnsList = ({ id }) => {
	const contact = useSelector(selectCurrentContact);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const isOnGroupsPage = Boolean(location.pathname.includes('my-groups'));

	const deleteBtnClickHandler = id => {
		dispatch(deleteContact(id));
		if (contact && contact.id === id) {
			navigate('/my-contacts');
		}
	};

	return (
		<BtnList>
			<li>
				<DetailBtn
					to={isOnGroupsPage ? `/my-contacts/${id}/details` : id}
					state={{ from: location }}
					title="Show more details"
				>
					<CgDetailsMore />
				</DetailBtn>
			</li>
			<li>
				<EditBtn
					to={`/my-contacts/edit/${id}`}
					state={{ from: location }}
					title="Edit contact"
				>
					<BiEditAlt />
				</EditBtn>
			</li>
			<li>
				<DeleteBtn
					type="button"
					onClick={() => deleteBtnClickHandler(id)}
					title="Delete contact"
				>
					<TiUserDeleteOutline />
				</DeleteBtn>
			</li>
		</BtnList>
	);
};

BtnsList.propTypes = {
	id: PropTypes.string.isRequired,
};

export default BtnsList;
