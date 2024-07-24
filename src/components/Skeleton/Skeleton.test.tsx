import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Skeleton', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<Skeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render Skeleton', () => {
    render(<Skeleton />);
    const SkeletonElement = screen.getByTestId('Skeleton');
    expect(SkeletonElement).toBeInTheDocument();
  });
});
