import styled from 'styled-components';

export const Btn = styled.button`
	display: flex;
	gap: 4px;
	justify-content: center;
	align-items: center;
	min-width: ${({ location }) => (location === 'logOut' ? '60px' : '100px')};
	min-height: ${({ location }) => (location === 'logOut' ? '20px' : '35px')};
	margin: 0 auto;
	padding: 2px 10px;
	font-size: ${({ location }) => (location === 'logOut' ? '12px' : '16px')};
	font-weight: ${({ location }) => location === 'logOut' && '600'};
	background-color: #ffffff;
	border: none;
	border-radius: 17px;
	transition: color 300ms ease, box-shadow 300ms ease,
		background-color 300ms ease;
	:hover,
	:focus {
		color: #ffffff;
		background-color: rgba(42, 153, 159, 1);
		box-shadow: 0px 0px 5px 2px rgba(42, 153, 159, 1);
	}
`;
