import styled from 'styled-components';

export const Input = styled.input`
	position: relative;

	min-width: 250px;
	padding: 2px 3px;

	font-size: 14px;
	color: inherit;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #c0c0c0;
	border-radius: 2px;
	outline: none;
	text-align: center;

	::placeholder {
		font-size: 12px;
		color: #c0c0c0;
	}
`;
