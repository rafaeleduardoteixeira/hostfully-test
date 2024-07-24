import React, { act } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from './SearchInput';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SearchInput', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<SearchInput onChange={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render SearchInput', () => {
    render(<SearchInput onChange={jest.fn()} />);
    const SearchInputElement = screen.getByTestId('SearchInput');
    expect(SearchInputElement).toBeInTheDocument();
  });

  test('Should call onChange when input value changes', () => {
    const onChange = jest.fn();
    render(<SearchInput onChange={onChange} />);
    const InputSearchElement = screen.getByPlaceholderText('Enter a property name or city');
    act(() => {
      fireEvent.change(InputSearchElement, { target: { value: 'test' } });
    });
    expect(onChange).toBeCalled();
  });
});
