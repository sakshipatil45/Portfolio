import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sakshi Patil hero and projects showcase', () => {
  render(<App />);
  const heroHeading = screen.getByRole('heading', { name: /sakshi patil/i });
  expect(heroHeading).toBeInTheDocument();
  
  const forensiqElements = screen.getAllByText(/forensiq/i);
  expect(forensiqElements.length).toBeGreaterThan(0);
});
