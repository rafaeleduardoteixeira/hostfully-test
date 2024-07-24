import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PropertyCard } from './PropertyCard';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('PropertyCard', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(
      <PropertyCard
        onClick={jest.fn()}
        card={{
          id: '1',
          title: 'Title',
          images: ['image'],
          subTitle: 'SubTitle',
          description: 'Description',
        }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Render', () => {
    render(
      <PropertyCard
        onClick={jest.fn()}
        card={{
          id: '1',
          title: 'Title',
          images: ['image'],
          subTitle: 'SubTitle',
          description: 'Description',
        }}
      />,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('SubTitle')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
  test('Click', () => {
    const onClick = jest.fn();
    render(
      <PropertyCard
        onClick={onClick}
        card={{
          id: '1',
          title: 'Title',
          images: ['image'],
          subTitle: 'SubTitle',
          description: 'Description',
        }}
      />,
    );
    screen.getByTestId('PropertyCard').click();
    expect(onClick).toHaveBeenCalled();
  });
});
