import PropTypes from 'prop-types';
import { NotifyMessage } from './Notification.styled';

const Notification = ({ message }) => {
	return <NotifyMessage>{message}</NotifyMessage>;
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
