import styled from 'styled-components';

export const FooterSection = styled.footer`
	flex: 0 0 auto;

	padding: 11px 0;

	background-color: rgb(7, 7, 34);
	border-top: 1px solid #ffffffa4;

	font-size: 12px;
`;

export const Wrapper = styled.div`
	display: flex;
	gap: 10px;
`;

export const Text = styled.p`
	margin: 0 auto;

	font-size: 14px;
	font-weight: 400;
	color: rgba(42, 153, 159, 1);
`;

export const Link = styled.a`
	line-height: 16.1px;

	transition: color 300ms ease-in-out;

	:hover,
	:focus {
		color: rgba(241, 178, 17, 1);
	}
`;

export const SubLink = styled(Link)`
	font-size: 10px;
	font-weight: 400;
	color: #ffffffa4;
`;

export const HelpersList = styled.ul``;

export const ListItem = styled.li`
	position: relative;

	padding-left: 18px;

	::before {
		content: '';
		position: absolute;
		left: 5px;
		top: calc(50% - 3px);

		width: 4px;
		height: 4px;

		border-radius: 50%;
		background-color: rgba(232, 121, 17, 1);
	}

	:not(:first-child) {
		margin-top: 3px;
	}
`;
