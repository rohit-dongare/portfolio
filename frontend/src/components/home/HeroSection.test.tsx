import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="projects"></section>
      <section id="contact"></section>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders the main hero content and CTA buttons', () => {
    render(<HeroSection />);

    expect(screen.getByText(/SOFTWARE ENGINEER/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Projects/i })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByRole('link', { name: /Contact Me/i })).toHaveAttribute('href', '#contact');
  });

  it('scrolls to the clicked section when a CTA is activated', () => {
    const scrollIntoViewMock = vi.fn();
    render(<HeroSection />);

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      Object.defineProperty(projectsSection, 'scrollIntoView', {
        value: scrollIntoViewMock,
        configurable: true,
      });
    }

    fireEvent.click(screen.getByRole('link', { name: /View Projects/i }));

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
