import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	gap: 10px;

	margin-top: ${props => (props.groupPage ? '15px' : '8px')};
`;

export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 30px;
	height: 30px;

	border-radius: 50%;
	background-color: rgba(158, 158, 158, 1);

	font-size: ${props => (props.groupPage ? '14px' : '18px')};
`;

export const ListGroupPage = styled(List)`
	margin-top: 15px;
`;

export const ItemGroupPage = styled(List)`
	margin-top: 15px;

	font-size: 14px;
`;
