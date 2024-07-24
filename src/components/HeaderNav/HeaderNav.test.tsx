import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderNav } from './HeaderNav';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('HeaderNav', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<HeaderNav />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render HeaderNav', () => {
    render(<HeaderNav />);
    const HeaderNavElement = screen.getByTestId('HeaderNavMenuClick');
    expect(HeaderNavElement).toBeInTheDocument();
  });
  test('Should click on HeaderNav and open DropDownMenu', () => {
    render(<HeaderNav />);
    const HeaderNavMenuClick = screen.getByTestId('HeaderNavMenuClick');
    expect(HeaderNavMenuClick).toBeInTheDocument();
    act(() => {
      HeaderNavMenuClick.click();
    });
    const DropDownMenuElement = screen.getByTestId('DropDownMenu');
    expect(DropDownMenuElement).toBeInTheDocument();
  });

  test('Should click outside HeaderNav and close DropDownMenu', () => {
    render(<HeaderNav />);
    const HeaderNavMenuClick = screen.getByTestId('HeaderNavMenuClick');
    expect(HeaderNavMenuClick).toBeInTheDocument();
    act(() => {
      HeaderNavMenuClick.click();
    });
    const DropDownMenu = screen.getByTestId('DropDownMenu');
    expect(DropDownMenu).toBeInTheDocument();
    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });
    expect(DropDownMenu).not.toBeInTheDocument();
  });
});
