import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnList = styled.ul`
	display: flex;
	gap: 10px;

	margin-left: auto;
`;

export const DeleteBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 20px;
	height: 20px;

	font-size: 14px;

	border-radius: 50%;
	border: none;
	outline: none;
	cursor: pointer;

	opacity: 0.4;

	transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease,
		box-shadow 300ms ease;

	:hover,
	:focus {
		color: #ffffff;

		opacity: 1;
		background-color: rgba(250, 0, 46, 1);
		box-shadow: 0px 0px 5px 2px rgba(250, 0, 46, 1);
	}
`;

export const DetailBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 20px;
	height: 20px;

	font-size: 14px;
	color: #000000;

	background-color: #f0f0f0;
	border-radius: 50%;
	border: none;
	outline: none;

	opacity: 0.4;

	transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease,
		box-shadow 300ms ease;

	:hover,
	:focus {
		color: #ffffff;

		opacity: 1;
		background-color: rgba(24, 107, 184, 1);
		box-shadow: 0px 0px 5px 2px rgba(24, 107, 184, 1);
	}
`;

export const EditBtn = styled(DetailBtn)`
	:hover,
	:focus {
		background-color: rgba(241, 178, 17, 1);
		box-shadow: 0px 0px 5px 2px rgba(241, 178, 17, 1);
	}
`;
