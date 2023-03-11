import styled from 'styled-components';

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: max-content;
	align-items: flex-start;
	gap: 10px;

	max-height: calc(100vh - 144px);
	min-height: calc(100vh - 144px);
	padding-top: 5px;
	padding-right: 5px;
	padding-left: 8px;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(158, 158, 158, 1);
		border-radius: 2px;
	}
`;

export const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px;

	border-radius: 10px;
	box-shadow: inset 0px 0px 3px 0px rgba(158, 158, 158, 1);
`;

export const IntroWrapper = styled.div`
	display: flex;
	gap: 30px;
`;

export const NameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding-top: 10px;
`;

export const Avatar = styled.img`
	display: block;

	border-radius: 5px;
`;

export const Name = styled.h4`
	font-size: 18px;
	text-transform: uppercase;
`;

export const PhoneNumber = styled.p`
	margin-top: 15px;
	font-size: 14px;
	color: rgba(158, 158, 158, 1);
`;
