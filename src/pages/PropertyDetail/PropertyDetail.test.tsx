import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PropertyDetail } from './PropertyDetail';
import { AppContext } from '../../Context/App.context';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-leaflet', () => jest.fn());

describe('PropertyDetail', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: () => {
            return [];
          },
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <PropertyDetail />
      </AppContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render PropertyDetail', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: () => {
            return [];
          },
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <PropertyDetail />
      </AppContext.Provider>,
    );
    const PropertyDetailElement = screen.getByTestId('PropertyDetail');
    expect(PropertyDetailElement).toBeInTheDocument();
  });
  test('Should show all images', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: () => {
            return [];
          },
          getPropertyById: () => {
            return {
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
            };
          },
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <PropertyDetail />
      </AppContext.Provider>,
    );
    const showAllImages = screen.getByText('See all photos');
    act(() => {
      showAllImages.click();
    });
    const PropertyImagemContainer = screen.getByTestId('Modal');
    expect(PropertyImagemContainer).toBeInTheDocument();
  });
});
