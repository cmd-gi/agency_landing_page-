import { render, screen } from '@testing-library/react';
import Footer from '../path/to/Footer'; // Adjust the path as necessary

test('hello world!', () => {
	render(<Footer />);
	const linkElement = screen.getByText(/footer content/i);
	expect(linkElement).toBeInTheDocument();
});