import styled from 'styled-components';

export const List = styled.ul`
	position: relative;

	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;
	max-height: calc(100vh - 140px);
	min-height: calc(100vh - 140px);
	padding-right: 5px;
	padding-left: 5px;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(158, 158, 158, 1);
		border-radius: 2px;
	}
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px 20px;

	box-shadow: inset 0px 0px 3px 0px rgba(158, 158, 158, 1);
	border-radius: 3px;
`;
