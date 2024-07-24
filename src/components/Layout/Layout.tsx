import { Outlet, ScrollRestoration } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Container, Logo } from './Layout.styles';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Container>
        <a href="/">
          <Logo src="/icons/logo.svg" alt="logo" />
        </a>
        <HeaderNav />
      </Container>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};
