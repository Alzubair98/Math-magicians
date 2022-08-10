import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';

test('when press on button the result will be updated', async () => {
  render(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>,
  );

  const button = screen.getByTestId('7');
  const result = screen.findByTestId('result');
  fireEvent.click(button);

  expect((await result).textContent).toBe('7');
});

test('when press on button 5 the result will be updated', async () => {
  render(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>,
  );

  const button = screen.etByRole('button', { name: /5/i });
  const result = screen.findByTestId('result');
  fireEvent.click(button);

  expect((await result).textContent).toBe('5');
});
