import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppNav = styled.nav`
	${({ ongroupsPage }) => ongroupsPage && 'padding-left: 378px'}
`;

export const List = styled.ul`
	display: flex;
	gap: 20px;
`;

export const PageLink = styled(NavLink)`
	padding: 15px 10px;

	text-decoration: none;

	transition: color 300ms ease-in-out;

	:hover,
	:focus {
		color: rgba(241, 178, 17, 1);
	}

	&.active {
		color: rgba(42, 153, 159, 1);
	}
`;
