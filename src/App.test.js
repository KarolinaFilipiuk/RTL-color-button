import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/dom';

describe(App, () => {
  test('button has correct initial color and text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Change to red' });
    expect(button).toHaveStyle('background-color: blue');
  });

  test('button turns blue when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Change to red' });
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });

  test('button has correct initial when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Change to red' });
    fireEvent.click(button);
    expect(button.textContent).toBe('Change to blue');
  });

  test('at the beginning button is available and checkbox is not checked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Change to red' });
    expect(button).toBeEnabled();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('checkbox disables button on first click and enabled on second click', () => {
    render(<App />);

    const button = screen.getByRole('button');
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(button).toBeDisabled();

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });
});
