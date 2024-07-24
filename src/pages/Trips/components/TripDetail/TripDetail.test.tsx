import React, { act } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TripDetail } from './TripDetail';
import { AppContext } from '../../../../Context/App.context';
import { RentedProperties } from '../../../../interfaces/rentedProperties';
import moment from 'moment';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const rendedProperties: RentedProperties = {
  id: '1',
  propertyId: '1',
  propertyImages: ['image'],
  propertyName: 'Property 1',
  name: 'Name 1',
  email: 'Email 1',
  checkIn: new Date(),
  checkOut: new Date(),
};

describe('TripDetail', () => {
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
        <TripDetail
          rentedProperty={rendedProperties}
          handleEditTrip={jest.fn()}
          handleDeleteTrip={jest.fn()}
          handleCancel={jest.fn()}
        />
      </AppContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render TripDetail', () => {
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
        <TripDetail
          rentedProperty={rendedProperties}
          handleEditTrip={jest.fn()}
          handleDeleteTrip={jest.fn()}
          handleCancel={jest.fn()}
        />
      </AppContext.Provider>,
    );
    const TripDetailElement = screen.getByTestId('TripDetail');
    expect(TripDetailElement).toBeInTheDocument();
  });
  test('Should edit a trip', () => {
    const handleEditTrip = jest.fn();
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
        <TripDetail
          rentedProperty={rendedProperties}
          handleEditTrip={handleEditTrip}
          handleDeleteTrip={jest.fn()}
          handleCancel={jest.fn()}
        />
      </AppContext.Provider>,
    );
    const editButton = screen.getByText('Edit');
    editButton.click();
    expect(handleEditTrip).toHaveBeenCalled();
  });
  test('Should delete a trip', () => {
    const handleDeleteTrip = jest.fn();
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
        <TripDetail
          rentedProperty={rendedProperties}
          handleEditTrip={jest.fn()}
          handleDeleteTrip={handleDeleteTrip}
          handleCancel={jest.fn()}
        />
      </AppContext.Provider>,
    );
    const deleteButton = screen.getByText('Delete');
    deleteButton.click();
    expect(handleDeleteTrip).toHaveBeenCalled();
  });
  test('Should cancel a trip', () => {
    const handleCancel = jest.fn();
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
        <TripDetail
          rentedProperty={rendedProperties}
          handleEditTrip={jest.fn()}
          handleDeleteTrip={jest.fn()}
          handleCancel={handleCancel}
        />
      </AppContext.Provider>,
    );
    const cancelButton = screen.getByText('Cancel');
    cancelButton.click();
    expect(handleCancel).toHaveBeenCalled();
  });
  test('Should try to edit with a null date', () => {
    const handleEditTrip = jest.fn();
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
        <TripDetail
          rentedProperty={{ ...rendedProperties, checkIn: null, checkOut: null }}
          handleEditTrip={handleEditTrip}
          handleDeleteTrip={jest.fn()}
          handleCancel={jest.fn()}
        />
      </AppContext.Provider>,
    );
    const editButton = screen.getByText('Edit');
    editButton.click();
    expect(handleEditTrip).not.toHaveBeenCalled();
  });
});
