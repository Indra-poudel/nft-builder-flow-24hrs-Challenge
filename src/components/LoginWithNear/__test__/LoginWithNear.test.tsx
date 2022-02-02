import { render, screen } from '@testing-library/react';
import LoginWithNear from '../LoginWithNear';

test('renders LoginWithNear with label Log in with Near', () => {
    render(<LoginWithNear onClick={() => { }} />);
    const label = screen.getByText(/Log in with Near/i);
    expect(label).toBeInTheDocument();
});

test('should contain label Already have Near account', () => {
    render(<LoginWithNear onClick={() => { }} />);
    const label = screen.getByText(/Already have Near account/i);
    expect(label).toBeInTheDocument();
});

test('renders Button with className secondary-button', () => {
    render(<LoginWithNear onClick={() => { }} />);
    const className = screen.getByRole('button');
    expect(className).toHaveClass('secondary-button');
});