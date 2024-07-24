import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Layout } from './Layout';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
  ScrollRestoration: () => jest.fn(),
}));

describe('Layout', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Render', () => {
    const { getByAltText } = render(<Layout />);
    expect(getByAltText('logo')).toBeInTheDocument();
  });
  test('Logo click', () => {
    const { getByAltText } = render(<Layout />);
    const logo = getByAltText('logo');
    logo.click();
  });
});
