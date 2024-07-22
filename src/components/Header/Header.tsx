import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Container, Logo } from './Header.styles';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <a href="/">
        <Logo src="/icons/logo.svg" alt="logo" />
      </a>
      <HeaderNav />
    </Container>
  );
};
