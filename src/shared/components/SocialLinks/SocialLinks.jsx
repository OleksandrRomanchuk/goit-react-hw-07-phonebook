import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { RiLinkedinFill } from 'react-icons/ri';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

import { List, Link } from './SocialLinks.styled';

const SocialLinks = ({ itemId }) => {
	const { items } = useSelector(selectContacts);
	const contact = items.find(contact => contact.id === itemId);

	if (!contact) return;

	const contactLinks = Object.keys(contact.socialLinks);

	const elements = contactLinks.map(link => {
		if (!contact.socialLinks[link]) return false;

		switch (link) {
			case 'linkedin':
				return (
					<li key={link}>
						<Link
							href={contact.socialLinks[link]}
							target="_blank"
							rel="noreferrer"
							title="Linkedin"
						>
							<RiLinkedinFill />
						</Link>
					</li>
				);
			case 'facebook':
				return (
					<li key={link}>
						<Link
							href={contact.socialLinks[link]}
							target="_blank"
							rel="noreferrer"
							title="Facebook"
						>
							<RiFacebookFill />
						</Link>
					</li>
				);
			case 'telegram':
				return (
					<li key={link}>
						<Link
							href={contact.socialLinks[link]}
							target="_blank"
							rel="noreferrer"
							title="Telegram"
						>
							<FaTelegramPlane />
						</Link>
					</li>
				);
			default:
				return false;
		}
	});

	return <>{elements && <List>{elements}</List>}</>;
};

export default SocialLinks;
