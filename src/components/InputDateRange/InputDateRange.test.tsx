import React, { act } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputDateRange } from './InputDateRange';

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
    const { container } = render(
      <InputDateRange
        onChange={onChange}
        dateStart={undefined}
        dateEnd={undefined}
        bookedDates={[{ start: new Date(), end: new Date() }]}
      />,
    );
    const InputDateRangeElement = screen.getByPlaceholderText('Select a date to book');
    act(() => {
      InputDateRangeElement.focus();
    });
    act(() => {
      fireEvent.click(container.getElementsByClassName('react-datepicker__day--today')[0]);
    });
    expect(onChange).toHaveBeenCalled();
  });
});
