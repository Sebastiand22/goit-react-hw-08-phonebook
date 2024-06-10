import { Container, FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <p>GoIT 2023-2024</p>
      <Container>
        <a
          href="https://github.com/Sebastiand22"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to GitHub"
        >
          <Icon />
        </a>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
