import React, { act } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render Input', () => {
    render(<Input />);
    const InputElement = screen.getByTestId('Input');
    expect(InputElement).toBeInTheDocument();
  });
  test('Should render Input with label', () => {
    render(<Input label="Label" />);
    const InputElement = screen.getByTestId('Input');
    const LabelElement = screen.getByText('Label');
    expect(InputElement).toBeInTheDocument();
    expect(LabelElement).toBeInTheDocument();
  });
  test('Should type in Input', () => {
    render(<Input onChange={jest.fn()} />);
    const InputElement = screen.getByTestId('Input');
    act(() => {
      fireEvent.change(InputElement, { target: { value: 'a' } });
    });
    expect(InputElement).toHaveValue('a');
  });
});
