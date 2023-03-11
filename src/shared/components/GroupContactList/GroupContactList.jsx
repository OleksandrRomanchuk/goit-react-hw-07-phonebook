import BtnsList from 'shared/components/BtnsList/BtnsList';
import Loader from 'shared/components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectGroupFilter } from 'redux/groupFilter/groupFilterSelectors';

import {
	List,
	Item,
	IntroWrapper,
	NameWrapper,
	Avatar,
	Name,
	PhoneNumber,
} from './GroupContactList.styled';

const GroupContactList = () => {
	const groupFilter = useSelector(selectGroupFilter);
	const { items, isLoading } = useSelector(selectContacts);
	const filteredContactsByGroup =
		groupFilter === 'All'
			? items
			: items.filter(contact => {
					if (contact.group !== groupFilter) {
						return false;
					}

					return contact;
			  });

	const elements = filteredContactsByGroup.map(
		({ id, name, phoneNumber, avatar }) => (
			<Item key={id}>
				<IntroWrapper>
					<Avatar src={avatar} alt={name} />
					<NameWrapper>
						<div>
							<Name>{name}</Name>
							<PhoneNumber>{phoneNumber}</PhoneNumber>
						</div>

						<div>
							<BtnsList id={id} />
						</div>
					</NameWrapper>
				</IntroWrapper>
			</Item>
		)
	);

	return (
		<>
			{isLoading && <Loader />}
			<List>{elements}</List>
		</>
	);
};

export default GroupContactList;
