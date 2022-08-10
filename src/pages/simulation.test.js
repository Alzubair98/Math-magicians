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
  let result = screen.findByTestId('result');
  fireEvent.click(button);

  expect ((await result).textContent).toBe('7');
});


