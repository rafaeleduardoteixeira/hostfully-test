import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PropertyDescription } from './PropertyDescription';
import { AppContext } from '../../../../Context/App.context';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-leaflet', () => jest.fn());

describe('PropertyDescription', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: jest.fn(),
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <PropertyDescription
          property={{
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
            city: 'City 1',
            country: 'Country 1',
            purpose: 'Purpose 1',
            price: 1,
            images: ['image'],
            position: {
              latitude: 0,
              longitude: 0,
            },
          }}
        />
      </AppContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render PropertyDescription', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: jest.fn(),
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <PropertyDescription
          property={{
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
            city: 'City 1',
            country: 'Country 1',
            purpose: 'Purpose 1',
            price: 1,
            images: ['image'],
            position: {
              latitude: 0,
              longitude: 0,
            },
          }}
        />
      </AppContext.Provider>,
    );

    const PropertyDescriptionElement = screen.getByTestId('PropertyDescription');
    expect(PropertyDescriptionElement).toBeInTheDocument();
  });
});
