import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.header`
	background-color: rgb(7, 7, 34);

	border-bottom: 1px solid #ffffffa4;

	z-index: 1;
`;

export const Logo = styled(Link)`
	padding: 10px 10px;

	font-size: 30px;
	font-weight: 900;
	width: -webkit-min-content;
	width: -moz-min-content;
	width: min-content;
	background: linear-gradient(
		220deg,
		rgba(250, 0, 46, 1) 0%,
		rgba(250, 0, 46, 1) 19%,
		transparent 19%,
		transparent 20%,
		rgba(232, 121, 17, 1) 20%,
		rgba(232, 121, 17, 1) 39%,
		transparent 39%,
		transparent 40%,
		rgba(241, 178, 17, 1) 40%,
		rgba(241, 178, 17, 1) 59%,
		transparent 59%,
		transparent 60%,
		rgba(42, 153, 159, 1) 60%,
		rgba(42, 153, 159, 1) 79%,
		transparent 79%,
		transparent 80%,
		rgba(24, 107, 184, 1) 80%,
		rgba(24, 107, 184, 1) 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
`;
