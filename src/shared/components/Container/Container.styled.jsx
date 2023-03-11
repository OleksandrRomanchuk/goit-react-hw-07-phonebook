import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;

	height: 100%;
	padding: 0 20px;
	margin: 0 auto;

	@media screen and (min-width: 480px) {
		width: 480px;
	}

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;
		padding: 0 40px;
	}
`;

export const FlexWrapper = styled(Wrapper)`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
`;

export const FlexColumnWrapper = styled(FlexWrapper)`
	flex-direction: column;
	justify-content: center;
`;
