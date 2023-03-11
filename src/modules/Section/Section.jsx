import PropTypes from 'prop-types';
import Container from 'shared/components/Container/Container';

import { AppSection, AddButton } from './Section.styled';

const Section = ({ toggleModal, children }) => {
	return (
		<AppSection>
			<Container layout="flex">
				<AddButton type="button" onClick={toggleModal} title="Add new contact">
					+
				</AddButton>
				{children}
			</Container>
		</AppSection>
	);
};

Section.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Section;
