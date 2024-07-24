import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PropertyMap } from './PropertyMap';
import { AppContext } from '../../../../Context/App.context';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-leaflet', () => jest.fn());

describe('PropertyMap', () => {
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
        <PropertyMap
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
  test('Should render PropertyMap', () => {
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
        <PropertyMap
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

    const PropertyMapElement = screen.getByTestId('PropertyMap');
    expect(PropertyMapElement).toBeInTheDocument();
  });
});
