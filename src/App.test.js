import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWIthSpaces } from './App';
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

    const button = screen.getByRole('button', { name: 'Change to red' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });

  test('disabled button has gray background and reverts to blue', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
    const button = screen.getByRole('button', { name: 'Change to red' });

    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: 'blue' });
  });

  test('disabled button has gray background and reverts to red', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
    const button = screen.getByRole('button', { name: 'Change to red' });

    fireEvent.click(button);

    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWIthSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWIthSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWIthSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
