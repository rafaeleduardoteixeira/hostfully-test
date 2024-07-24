import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DropDownMenu } from './DropDownMenu';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('DropDownMenu', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<DropDownMenu />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Click on Trips menu option', () => {
    render(<DropDownMenu />);
    const linkElement = screen.getByText(/Trips/i);
    linkElement.click();
    expect(mockedUsedNavigate).toBeCalled();
  });
});
