import React, { act } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputDateRange } from './InputDateRange';
import { Input } from '../Input/Input';

describe('InputDateRange', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<InputDateRange onChange={jest.fn()} dateStart={undefined} dateEnd={undefined} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render InputDateRange', () => {
    render(
      <InputDateRange
        onChange={jest.fn()}
        dateStart={undefined}
        dateEnd={undefined}
        bookedDates={[{ start: new Date(), end: new Date() }]}
      />,
    );
    const InputDateRangeElement = screen.getByPlaceholderText('Select a date to book');
    expect(InputDateRangeElement).toBeInTheDocument();
  });

  test('Should select a date', () => {
    const onChange = jest.fn();
    render(
      <InputDateRange
        onChange={onChange}
        dateStart={undefined}
        dateEnd={undefined}
        bookedDates={[{ start: new Date(), end: new Date() }]}
      />,
    );
    const InputDateRangeElement = screen.getByPlaceholderText('Select a date to book');
    act(() => {
      fireEvent.change(InputDateRangeElement, { target: { value: new Date() } });
    });
    expect(onChange).toHaveBeenCalled();
  });
});
