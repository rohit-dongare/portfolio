import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ExperienceSection } from './ExperienceSection';

describe('ExperienceSection', () => {
  it('renders the work history timeline and role details', () => {
    render(<ExperienceSection />);

    expect(screen.getByRole('heading', { name: /Work History & Experience/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Associate Software Development Engineer/i).length).toBeGreaterThan(
      0,
    );
    expect(screen.getAllByText(/Bridgenext/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Optimized backend API logic/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Node.js/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Fastify')).toHaveLength(2);
  });
});
