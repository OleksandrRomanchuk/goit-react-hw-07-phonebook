import PropTypes from 'prop-types';
import { Wrapper, FlexWrapper, FlexColumnWrapper } from './Container.styled';

const Container = ({ layout, children }) => {
	if (layout === 'flex') {
		return <FlexWrapper>{children}</FlexWrapper>;
	}

	if (layout === 'flexColumn') {
		return <FlexColumnWrapper>{children}</FlexColumnWrapper>;
	}

	return <Wrapper display={layout}>{children}</Wrapper>;
};

Container.propTypes = {
	layout: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Container;
