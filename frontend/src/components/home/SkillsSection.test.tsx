import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SkillsSection } from './SkillsSection';

describe('SkillsSection', () => {
  it('renders the technical matrix section and skill categories', () => {
    render(<SkillsSection />);

    expect(screen.getByRole('heading', { name: /Skills & Domain Expertise/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Frontend Development/i })).toBeInTheDocument();
    expect(screen.getAllByText(/ReactJS/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/TypeScript/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Database management, containerization, Azure cloud services/i),
    ).toBeInTheDocument();
  });
});
