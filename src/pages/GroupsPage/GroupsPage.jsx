import Loader from 'shared/components/Loader/Loader';
import GroupContactList from 'shared/components/GroupContactList/GroupContactList';
import Notification from 'shared/components/Notification/Notification';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectContacts,
	selectContactsGroups,
} from 'redux/contacts/contactsSelectors';
import { selectGroupFilter } from 'redux/groupFilter/groupFilterSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { setGroupFilter } from 'redux/groupFilter/groupFilterSlice';

import {
	LeftContainer,
	RigthContainer,
} from 'pages/ContactsPage/ContactsPage.styled';
import { List, Item, ItemName } from './GroupsPage.styled';

const GroupPage = () => {
	const { items, isLoading, error } = useSelector(selectContacts);
	const areContacts = Boolean(items.length);
	const groupFilter = useSelector(selectGroupFilter);
	const dispatch = useDispatch();
	const myGroups = useSelector(selectContactsGroups);

	useEffect(() => {
		dispatch(fetchContacts());

		return () => {
			dispatch(setGroupFilter('All'));
		};
	}, [dispatch]);

	const onRadioBtnCheck = group => {
		dispatch(setGroupFilter(group));
	};

	const elements = myGroups.map(groupName => {
		return (
			<Item key={groupName}>
				<ItemName
					onClick={() => onRadioBtnCheck(groupName)}
					type="button"
					selected={groupFilter === groupName}
				>
					{groupName === '---' ? 'Contacts without group' : groupName}
				</ItemName>
			</Item>
		);
	});

	return (
		<>
			{!areContacts && !isLoading && (
				<Notification message="There are no contacts yet." />
			)}
			{areContacts && !error && (
				<>
					<LeftContainer>
						<List>{elements}</List>
					</LeftContainer>
					<RigthContainer>
						{isLoading && <Loader />}
						<GroupContactList />
					</RigthContainer>
				</>
			)}
		</>
	);
};

export default GroupPage;
