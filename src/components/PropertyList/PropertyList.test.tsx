import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PropertyList } from './PropertyList';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const properties = [
  {
    id: '1',
    name: 'Property 1',
    description: 'Description 1',
    city: 'City 1',
    country: 'Country 1',
    price: 100,
    images: ['image1'],
    position: { latitude: 0, longitude: 0 },
    purpose: 'rent',
  },
];

describe('PropertyList ', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<PropertyList properties={properties} isLoading={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render PropertyList', () => {
    render(<PropertyList properties={properties} isLoading={false} />);
    const PropertyListElement = screen.getByTestId('PropertyList');
    expect(PropertyListElement).toBeInTheDocument();
  });
  test('Should render PropertyList with skeleton', () => {
    render(<PropertyList properties={null} isLoading />);
    const PropertyListElement = screen.getByTestId('PropertyList');
    expect(PropertyListElement).toBeInTheDocument();
  });
  test('Should navigate to PropertyCard', () => {
    render(<PropertyList properties={properties} isLoading={false} />);
    const propertyCard = screen.getAllByTestId('PropertyCard')[0];
    propertyCard.click();
    expect(mockedUsedNavigate).toBeCalled();
  });
});
