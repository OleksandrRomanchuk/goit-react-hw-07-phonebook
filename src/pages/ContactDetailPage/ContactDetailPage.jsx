import SocialLinks from 'shared/components/SocialLinks/SocialLinks';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentContact } from 'redux/contacts/contactsSelectors';
import { useParams } from 'react-router-dom';
import { fetchContactById } from 'redux/contacts/contactsOperations';
import { dateTransform } from 'shared/helpers/dateTransform';

import {
	DetailsWrapper,
	IntroWrapper,
	Avatar,
	DetailsPositioning,
	NamePositioning,
	PhonePositioning,
	Name,
	Details,
	Date,
	DetailsSpan,
	LinksWrapper,
	GroupsSpan,
} from './ContactDetailPage.styled';

const ContactsSubPage = () => {
	const currentContact = useSelector(selectCurrentContact);
	const dispatch = useDispatch();
	const { id: itemId } = useParams();

	useEffect(() => {
		dispatch(fetchContactById(itemId));
	}, [dispatch, itemId]);

	if (!currentContact) return;

	const links = Object.values(currentContact.socialLinks);
	const areLinks = Boolean(links.some(link => link));

	return (
		<>
			{currentContact && (
				<DetailsWrapper>
					<IntroWrapper>
						<Avatar src={currentContact.avatar} alt={currentContact.name} />
						<NamePositioning>
							<Name>{currentContact.name}</Name>
							<Date>
								<DetailsSpan>In my contacts since: </DetailsSpan>
								{dateTransform(currentContact.createdAt)}
							</Date>
						</NamePositioning>
					</IntroWrapper>
					<DetailsPositioning>
						<PhonePositioning>
							<p>
								<DetailsSpan>Phone number: </DetailsSpan>
								{currentContact.phoneNumber}
							</p>
							{currentContact.email && (
								<Details>
									<DetailsSpan>Email: </DetailsSpan>
									{currentContact.email}
								</Details>
							)}

							<Details>
								<GroupsSpan>
									{currentContact.group === '---'
										? 'This contact is not tied to any of the groups.'
										: `In "${currentContact.group}" group.`}
								</GroupsSpan>
							</Details>
						</PhonePositioning>
						{areLinks && (
							<LinksWrapper>
								<DetailsSpan>Connect with:</DetailsSpan>
								<SocialLinks itemId={itemId} />
							</LinksWrapper>
						)}
					</DetailsPositioning>
				</DetailsWrapper>
			)}
		</>
	);
};

export default ContactsSubPage;
