import Container from 'shared/components/Container/Container';

import {
	FooterSection,
	Wrapper,
	Text,
	Link,
	SubLink,
	HelpersList,
	ListItem,
} from './Footer.styled';

const Footer = () => {
	return (
		<FooterSection>
			<Container layout="flex">
				<Wrapper>
					<Text>Developed by:</Text>
					<div>
						<Link
							href="https://github.com/OleksandrRomanchuk"
							target="_blank"
							rel="noreferrer"
						>
							Oleksandr Romanchuk
						</Link>
						<SubLink
							href="https://m.goit.global/ua/new/"
							target="_blank"
							rel="noreferrer"
						>
							GoIt Full Stack Online student
						</SubLink>
					</div>
				</Wrapper>
				<Wrapper>
					<Text>Thanks for the help best:</Text>
					<HelpersList>
						<ListItem>
							<p>blended-group-2, GoIt FSON 62;</p>
						</ListItem>
						<ListItem>
							<p>Mentor.</p>
						</ListItem>
					</HelpersList>
				</Wrapper>
			</Container>
		</FooterSection>
	);
};

export default Footer;
