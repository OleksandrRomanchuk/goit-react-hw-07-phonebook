import styled from 'styled-components';

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 3px;
	font-size: 13px;
`;

export const Input = styled.input`
	min-width: 250px;
	padding: 2px 3px;
	font-size: 12px;
	font-weight: 600;
	text-align: center;
	color: rgba(158, 158, 158, 1);
	border: none;
	border-bottom: 1px solid rgba(158, 158, 158, 1);
	border-radius: 0;
	background-color: transparent;
	outline: none;
`;
