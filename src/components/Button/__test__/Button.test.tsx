import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders Button with label Click Me', () => {
    render(<Button label='Click Me' />);
    const label = screen.getByText(/Click Me/i);
    expect(label).toBeInTheDocument();
});

test('renders Button with className primary-button', () => {
    render(<Button label='Click Me' buttonType='primary' />);
    const className = screen.getByRole('button');
    expect(className).toHaveClass('primary-button');
});

test('renders Button with className secondary-button', () => {
    render(<Button label='Click Me' buttonType='secondary' />);
    const className = screen.getByRole('button');
    expect(className).toHaveClass('secondary-button');
});

test('renders Button with className disable-button', () => {
    render(<Button label='Click Me' buttonType='disable' />);
    const className = screen.getByRole('button');
    expect(className).toHaveClass('disable-button');
});