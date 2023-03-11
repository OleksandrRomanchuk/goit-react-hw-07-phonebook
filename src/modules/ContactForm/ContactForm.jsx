import PropTypes from 'prop-types';
import FormField from 'shared/components/FormField/FormField';
import Button from 'shared/components/Button/Button';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectContactsGroups } from 'redux/contacts/contactsSelectors';
import { TiUserAddOutline } from 'react-icons/ti';
import { initialAddContactFormValues } from 'modules/ContactForm/initialAddContactFormValues';
import { useAddContactForm } from 'shared/hooks/useAddContactForm';
import { fields } from './fields';
import { saveDataToLocalSt, newContactLSK } from 'shared/helpers/localStfunc';

import {
	Form,
	PositioningWrapperMain,
	PositioningGruopWrapper,
	GroupLabel,
	GroupInput,
	GroupSelect,
	GroupSpan,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
	const myGroups = useSelector(selectContactsGroups);
	const { state, handleChange, onFormSubmit } = useAddContactForm(
		initialAddContactFormValues,
		onSubmit,
		newContactLSK
	);

	useEffect(() => {
		saveDataToLocalSt(newContactLSK, state);
	}, [state]);

	const {
		name,
		phoneNumber,
		group,
		email,
		socialLinks: { linkedin = '', facebook = '', telegram = '' },
	} = state;

	return (
		<Form onSubmit={onFormSubmit}>
			<PositioningWrapperMain>
				<FormField
					handleChange={handleChange}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					value={name}
					{...fields.name}
				/>
				<FormField
					handleChange={handleChange}
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					value={phoneNumber}
					{...fields.phoneNumber}
				/>
				<FormField handleChange={handleChange} value={email} {...fields.email} />
			</PositioningWrapperMain>
			<PositioningWrapperMain>
				<FormField
					handleChange={handleChange}
					value={linkedin}
					{...fields.linkedin}
				/>
				<FormField
					handleChange={handleChange}
					value={facebook}
					{...fields.facebook}
				/>
				<FormField
					handleChange={handleChange}
					value={telegram}
					{...fields.telegram}
				/>
			</PositioningWrapperMain>
			<PositioningGruopWrapper>
				<GroupLabel>
					Enter new group name:
					<GroupInput
						onChange={handleChange}
						type="text"
						name="group"
						value={group}
						placeholder=""
					/>
				</GroupLabel>
				<GroupSpan>or</GroupSpan>
				<GroupLabel>
					choose from the list:
					<GroupSelect
						onChange={handleChange}
						name="contactsGroupList"
						disabled={state.group && state.group !== '---' ? true : false}
					>
						{myGroups.map(group => (
							<option key={group} value={group}>
								{group}
							</option>
						))}
					</GroupSelect>
				</GroupLabel>
			</PositioningGruopWrapper>
			<Button type="submit" text="Add contact" title="Add contact">
				<TiUserAddOutline style={{ fontSize: 18 }} />
			</Button>
		</Form>
	);
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
