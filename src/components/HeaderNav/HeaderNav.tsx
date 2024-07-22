import { Container, HeaderNavAvatar, HeaderNavIcon } from './HeaderNav.styles';

export const HeaderNav = (): JSX.Element => {
  return (
    <Container>
      <HeaderNavIcon src="/icons/header-nav.svg" />
      <HeaderNavAvatar
        src={
          'https://www.rafaeleteixeira.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.a4caa42b.jpg&w=3840&q=75'
        }
      />
    </Container>
  );
};
