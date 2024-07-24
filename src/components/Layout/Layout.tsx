import React from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Container, Logo } from './Layout.styles';

export const Layout = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <Logo src="/icons/logo.svg" alt="logo" onClick={handleLogoClick} />
        <HeaderNav />
      </Container>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};
