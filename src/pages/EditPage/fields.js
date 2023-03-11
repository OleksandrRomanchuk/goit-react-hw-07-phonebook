export const fields = {
	name: {
		name: 'name',
		type: 'text',
		label: 'Name:',
		title:
			"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
		placeholder: 'Gregor .....',
		required: true,
	},
	phoneNumber: {
		name: 'phoneNumber',
		type: 'tel',
		label: 'Phone number:',
		title:
			'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
		placeholder: '+380 .....',
		required: true,
	},
	email: {
		name: 'email',
		type: 'email',
		label: 'Email:',
		title:
			'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
		placeholder: 'some_body@.....',
	},
	linkedin: {
		name: 'linkedin',
		type: 'url',
		label: 'Linkedin:',
		placeholder: 'https://www.linkedin.com/in/.....',
	},
	facebook: {
		name: 'facebook',
		type: 'url',
		label: 'Facebook:',
		placeholder: 'https://www.facebook.com/.....',
	},
	telegram: {
		name: 'telegram',
		type: 'url',
		label: 'Telegram:',
		placeholder: 'https://t.me/.....',
	},
};
