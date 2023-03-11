import styled from 'styled-components';

export const Body = styled.div`
	display: flex;
	flex-direction: column;

	height: 100vh;
`;

export const Main = styled.main`
	flex: 1 0 auto;

	padding-top: 15px;
	padding-bottom: 15px;
`;

export const HomePageMain = styled(Main)`
	padding-top: 60px;
`;
