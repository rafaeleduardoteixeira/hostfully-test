import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Trips } from './Trips';
import { AppContext } from '../../Context/App.context';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Trips', () => {
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
          getRentedProperties: () => {
            return [
              {
                id: '1',
                propertyId: '1',
                propertyImages: ['image'],
                propertyName: 'Property 1',
                name: 'Name 1',
                email: 'Email 1',
                checkIn: new Date(),
                checkOut: new Date(),
              },
            ];
          },
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <Trips />
      </AppContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render Trips', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: () => {
            return [];
          },
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: () => {
            return [
              {
                id: '1',
                propertyId: '1',
                propertyImages: ['image'],
                propertyName: 'Property 1',
                name: 'Name 1',
                email: 'Email 1',
                checkIn: new Date(),
                checkOut: new Date(),
              },
            ];
          },
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <Trips />
      </AppContext.Provider>,
    );
    const TripsElement = screen.getByTestId('Trips');
    expect(TripsElement).toBeInTheDocument();
  });
  test('Should return to home page', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: () => {
            return [];
          },
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: () => {
            return [
              {
                id: '1',
                propertyId: '1',
                propertyImages: ['image'],
                propertyName: 'Property 1',
                name: 'Name 1',
                email: 'Email 1',
                checkIn: new Date(),
                checkOut: new Date(),
              },
            ];
          },
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <Trips />
      </AppContext.Provider>,
    );
    const TripReturnHome = screen.getByTestId('TripReturnHome');
    TripReturnHome.click();
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
  test('Should show modal when click on property', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties: () => {
            return [];
          },
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: () => {
            return [
              {
                id: '1',
                propertyId: '1',
                propertyImages: ['image'],
                propertyName: 'Property 1',
                name: 'Name 1',
                email: 'Email 1',
                checkIn: new Date(),
                checkOut: new Date(),
              },
            ];
          },
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <Trips />
      </AppContext.Provider>,
    );
    const PropertyCard = screen.getByTestId('PropertyCard');
    act(() => {
      PropertyCard.click();
    });
    const TripDetail = screen.getByTestId('TripDetail');
    expect(TripDetail).toBeInTheDocument();
  });
});
