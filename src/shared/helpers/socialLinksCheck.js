export const socialLinksCheck = contact => {
	if (!contact) return;

	const socialLinks = Object.keys(contact.socialLinks);
	const areSocialLinks = Boolean(socialLinks.length);

	if (!areSocialLinks) {
		return {
			...contact,
			socialLinks: { linkedin: '', facebook: '', telegram: '' },
		};
	}

	return contact;
};
