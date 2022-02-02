import { render, screen } from '@testing-library/react';
import Disclaimer from '../Disclaimer';

test('renders Disclaimer of variant link', () => {
    render(<Disclaimer variant='Link' />);
    const linkText = screen.getByText(/by clicking continue/i);
    expect(linkText).toBeInTheDocument();
});

test('renders Disclaimer of variant Account', () => {
    render(<Disclaimer variant='Account' />);
    const accountDisclaimerText = screen.getByText(/By creating a NEAR account/i);
    expect(accountDisclaimerText).toBeInTheDocument();
});