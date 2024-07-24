import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PropertyCardSkeleton } from './PropertyCardSkeleton';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('PropertyCardSkeleton', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<PropertyCardSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render PropertyCardSkeleton', () => {
    render(<PropertyCardSkeleton />);
    const PropertyCardSkeletonElement = screen.getByTestId('PropertyCardSkeleton');
    expect(PropertyCardSkeletonElement).toBeInTheDocument();
  });
});
