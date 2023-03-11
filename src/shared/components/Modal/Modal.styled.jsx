import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(158, 158, 158, 0.5);

	z-index: 2;
`;

export const ModalWindow = styled.div`
	position: absolute;
	top: 10%;
	left: 50%;

	transform: translateX(-50%);

	padding: 25px;

	border-radius: 10px;
	background-color: rgb(7, 7, 34);
`;

export const Title = styled.h3`
	font-size: 18px;
	text-align: center;
`;

export const Border = styled.div`
	margin-top: 20px;
	padding: 1px;

	border-radius: 10px;
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
`;
