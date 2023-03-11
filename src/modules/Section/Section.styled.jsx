import styled from 'styled-components';

export const AppSection = styled.section`
	display: flex;
	gap: 20px;

	width: 100%;
	height: 100%;
`;

export const AddButton = styled.button`
	position: absolute;
	bottom: 25px;
	right: 25px;
	width: 50px;
	height: 50px;

	font-size: 24px;

	border: none;
	border-radius: 50%;
	cursor: pointer;

	opacity: 0.6;

	transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease,
		box-shadow 300ms ease;

	z-index: 10;

	:hover,
	:focus {
		color: #ffffff;

		opacity: 1;
		background-color: rgba(42, 153, 159, 1);
		box-shadow: 0px 0px 5px 2px rgba(42, 153, 159, 1);
	}
`;
