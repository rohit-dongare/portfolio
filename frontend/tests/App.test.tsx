import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('App', () => {
  it('renders the portfolio shell content', () => {
    render(<App />);

    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  });
});
