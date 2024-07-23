import { createRef, useEffect, useRef, useState } from 'react';
import { Container, HeaderNavAvatar, HeaderNavIcon } from './HeaderNav.styles';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

export const HeaderNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container onClick={() => handleOpen()} ref={menuRef}>
      <HeaderNavIcon src="/icons/header-nav.svg" />
      <HeaderNavAvatar
        src={
          'https://www.rafaeleteixeira.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.a4caa42b.jpg&w=3840&q=75'
        }
      />
      {isOpen && <DropDownMenu />}
    </Container>
  );
};
