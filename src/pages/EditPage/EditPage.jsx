import FormField from 'shared/components/FormField/FormField';
import Button from 'shared/components/Button/Button';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectCurrentContact,
	selectContactsGroups,
} from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { useParams, useNavigate } from 'react-router-dom';
import { editContact } from 'redux/contacts/contactsOperations';
import { socialLinksCheck } from 'shared/helpers/socialLinksCheck';
import { fetchContactById } from 'redux/contacts/contactsOperations';
import { fields } from './fields';

import {
	EditForm,
	PositioningWrapperMain,
	PositioningGruopWrapper,
	GroupLabel,
	GroupInput,
	GroupSelect,
	GroupSpan,
} from 'modules/ContactForm/ContactForm.styled';

const EditPage = () => {
	const currentContact = useSelector(selectCurrentContact);
	const [formValues, setFormValues] = useState(null);
	const { id: itemId } = useParams();
	const filter = useSelector(selectFilter);
	const myGroups = useSelector(selectContactsGroups);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const checkedContact = socialLinksCheck(currentContact);

		setFormValues(checkedContact);
	}, [currentContact]);

	useEffect(() => {
		dispatch(fetchContactById(itemId));
	}, [dispatch, itemId]);

	if (!currentContact) return;

	const handleInputChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'contactsGroupList':
				return (
					formValues['group'] !== '---' &&
					setFormValues(prevState => ({ ...prevState, group: value }))
				);
			case 'linkedin':
				return setFormValues(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));
			case 'facebook':
				return setFormValues(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));
			case 'telegram':
				return setFormValues(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));

			default:
				return setFormValues(prevState => ({ ...prevState, [name]: value }));
		}
	};

	const onFormSubmit = async event => {
		try {
			event.preventDefault();

			const editedContact = { ...formValues };

			if (!editedContact.group) editedContact.group = '---';

			const { payload } = await dispatch(editContact(editedContact));

			if (payload) {
				navigate('/my-contacts');
			} else {
				alert('Contact with such names is already in your phone book.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{formValues && !filter && (
				<EditForm onSubmit={onFormSubmit}>
					<PositioningWrapperMain>
						<FormField
							handleChange={handleInputChange}
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							value={formValues.name}
							{...fields.name}
						/>
						<FormField
							handleChange={handleInputChange}
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							value={formValues.phoneNumber}
							{...fields.phoneNumber}
						/>
						<FormField
							handleChange={handleInputChange}
							value={formValues.email}
							{...fields.email}
						/>
					</PositioningWrapperMain>
					<PositioningWrapperMain>
						<FormField
							handleChange={handleInputChange}
							value={formValues.linkedin}
							{...fields.linkedin}
						/>
						<FormField
							handleChange={handleInputChange}
							value={formValues.facebook}
							{...fields.facebook}
						/>
						<FormField
							handleChange={handleInputChange}
							value={formValues.telegram}
							{...fields.telegram}
						/>
					</PositioningWrapperMain>
					<PositioningGruopWrapper>
						<GroupLabel>
							Enter new group name:
							<GroupInput
								onChange={handleInputChange}
								type="text"
								name="group"
								value={formValues.group}
								placeholder=""
							/>
						</GroupLabel>
						<GroupSpan>or</GroupSpan>
						<GroupLabel>
							choose from the list:
							<GroupSelect
								onChange={handleInputChange}
								name="contactsGroupList"
								disabled={formValues.group && formValues.group !== '---' ? true : false}
							>
								{myGroups.map(group => (
									<option key={group} value={group}>
										{group}
									</option>
								))}
							</GroupSelect>
						</GroupLabel>
					</PositioningGruopWrapper>
					<Button type="submit" text="Save changes" title="Save changes" />
				</EditForm>
			)}
		</>
	);
};

export default EditPage;
