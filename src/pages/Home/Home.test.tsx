import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Home } from './Home';
import { AppContext } from '../../Context/App.context';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Home', () => {
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
        <Home />
      </AppContext.Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render Home', () => {
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
        <Home />
      </AppContext.Provider>,
    );
    const HomeElement = screen.getByTestId('Home');
    expect(HomeElement).toBeInTheDocument();
  });
  test('Should type the search input', () => {
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
        <Home />
      </AppContext.Provider>,
    );
    const InputSearchElement = screen.getByPlaceholderText('Enter a property name or city');
    fireEvent.change(InputSearchElement, { target: { value: 'search' } });
    expect(InputSearchElement).toHaveValue('search');
  });
  test('Should click the search button', () => {
    const getProperties = jest.fn();
    render(
      <AppContext.Provider
        value={{
          isLoading: false,
          getProperties,
          getPropertyById: jest.fn(),
          getPropertyRentedDates: jest.fn(),
          getRentedProperties: jest.fn(),
          handleAddRentals: jest.fn(),
          handleRemoveRentals: jest.fn(),
          handleEditRentals: jest.fn(),
        }}
      >
        <Home />
      </AppContext.Provider>,
    );
    const InputSearchElement = screen.getByPlaceholderText('Enter a property name or city');
    fireEvent.change(InputSearchElement, { target: { value: 'search' } });
    const SearchButtonElement = screen.getByTestId('SearchButton');
    fireEvent.click(SearchButtonElement);
    expect(getProperties).toBeCalled();
  });
});
