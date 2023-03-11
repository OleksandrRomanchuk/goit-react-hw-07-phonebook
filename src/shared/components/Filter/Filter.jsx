import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/filter/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

	const inputChangeHandler = event => {
		const newFilter = event.target.value.toLowerCase();
		dispatch(setFilter(newFilter));
	};

	return (
		<Input
			value={filter}
			type="text"
			onChange={inputChangeHandler}
			placeholder="...find contact by name"
		/>
	);
};

export default Filter;
