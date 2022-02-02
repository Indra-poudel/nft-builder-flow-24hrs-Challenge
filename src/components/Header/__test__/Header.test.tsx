import { render, screen } from '@testing-library/react';
import { logo } from '../../../assets/images';
import Header from '../Header';

test('renders Header with title Create Account', () => {
    render(<Header centerContent='Create Account' />);
    const headerTitle = screen.getByText(/Create Account/i);
    expect(headerTitle).toBeInTheDocument();
});

test('renders Header with logo', () => {
    render(<Header centerContent={<img src={logo} alt="logo" />} />);
    const altLabel = screen.getByAltText(/logo/i);
    expect(altLabel).toBeInTheDocument();
});