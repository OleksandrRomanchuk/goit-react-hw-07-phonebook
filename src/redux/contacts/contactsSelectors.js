import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelectors';

const selectContacts = state => state.contacts;

const selectCurrentContact = state => state.contacts.currentContact;

const selectIsLoading = state => state.contacts.isLoading;

const selectContactsError = state => state.contacts.error;

const selectFilteredContacts = state => {
	const contacts = selectContacts(state);
	const filter = selectFilter(state);

	const filteredContacts = contacts.items.filter(({ name }) =>
		name.toLowerCase().includes(filter)
	);

	return { ...state, contacts: { ...contacts, items: filteredContacts } };
};

const selectContactsGroups = createSelector([selectContacts], ({ items }) => {
	const valuesOfProperties = items
		.map(({ group }) => group)
		.filter((item, ind, arr) => ind === arr.indexOf(item))
		.sort((a, b) => a.localeCompare(b));

	valuesOfProperties.unshift('All');

	return valuesOfProperties;
});

export {
	selectContacts,
	selectCurrentContact,
	selectFilter,
	selectIsLoading,
	selectContactsError,
	selectFilteredContacts,
	selectContactsGroups,
};
