import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalWindow, Title, Border } from './Modal.styled';

const modalContainer = document.getElementById('modalRoot');

const Modal = ({ toggleModal, title, children }) => {
	useEffect(() => {
		const onKeyDown = event => {
			if (event.code === 'Escape') {
				toggleModal();
			}
		};

		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [toggleModal]);

	const onModalOpen = event => {
		if (event.target === event.currentTarget) {
			toggleModal();
		}
	};
	return createPortal(
		<Backdrop onClick={onModalOpen}>
			<ModalWindow>
				<Title>{title}</Title>
				<Border>{children}</Border>
			</ModalWindow>
		</Backdrop>,
		modalContainer
	);
};

Modal.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Modal;
