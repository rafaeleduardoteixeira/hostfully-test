import React, { act } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { PropertyBookNow } from './PropertyBookNow';
import { AppContext } from '../../../../Context/App.context';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-leaflet', () => jest.fn());

describe('PropertyBookNow', () => {
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
        <PropertyBookNow
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
  test('Should render PropertyBookNow', () => {
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
        <PropertyBookNow
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

    const PropertyBookNowElement = screen.getByTestId('PropertyBookNow');
    expect(PropertyBookNowElement).toBeInTheDocument();
  });
  test('Should  check is loading', () => {
    render(
      <AppContext.Provider
        value={{
          isLoading: true,
          getProperties: jest.fn(),
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <PropertyBookNow
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

    const PropertyBookNowElement = screen.getByTestId('PropertyBookNow');
    expect(PropertyBookNowElement).toBeInTheDocument();
  });

  test('Should fill all form', () => {
    const { container } = render(
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
        <PropertyBookNow
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
    const InputNameElement = screen.getByPlaceholderText('Name');
    act(() => {
      fireEvent.change(InputNameElement, { target: { value: 'Name' } });
    });
    const InputEmailElement = screen.getByPlaceholderText('Email');
    act(() => {
      fireEvent.change(InputEmailElement, { target: { value: 'email' } });
    });

    const InputDateRangeElement = screen.getByPlaceholderText('Select a date to book');
    act(() => {
      InputDateRangeElement.focus();
    });
    act(() => {
      fireEvent.click(container.getElementsByClassName('react-datepicker__day--today')[0]);
    });
    act(() => {});

    const Button = screen.getByText('Book now');
    act(() => {
      Button.click();
    });
  });
});
