const fields = {
	name: {
		type: 'text',
		name: 'name',
		required: true,
		label: 'Name:',
		placeholder: 'Gregor .....',
		pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
		title:
			"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
	},
	email: {
		type: 'email',
		name: 'email',
		required: true,
		label: 'Email:',
		placeholder: 'somebody@mail.com',
	},
	password: {
		type: 'password',
		name: 'password',
		required: true,
		label: 'Password:',
		placeholder: '*****',
	},
};

export { fields };
