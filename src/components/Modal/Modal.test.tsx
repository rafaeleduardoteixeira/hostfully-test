import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Modal', () => {
  test('Snapshot test', () => {
    const { asFragment } = render(
      <Modal>
        <div>Modal</div>
      </Modal>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Render', () => {
    render(
      <Modal onClose={jest.fn()}>
        <div>Modal</div>
      </Modal>,
    );
    expect(screen.getByText('Modal')).toBeInTheDocument();
  });
});
