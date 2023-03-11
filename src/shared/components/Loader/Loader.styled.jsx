import styled from 'styled-components';

export const LoaderBackdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(158, 158, 158, 0.5);

	pointer-events: none;
`;
