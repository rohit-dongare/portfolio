import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { certifications } from '../../data/portfolioData';
import { AboutSection } from './AboutSection';

describe('AboutSection', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the profile summary, technology list, and CTA', () => {
    render(<AboutSection />);

    expect(
      screen.getByRole('heading', { name: /Engineering Profile & Overview/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Rohit Dongare/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-Time Reliability & Performance/i)).toBeInTheDocument();
    expect(screen.getByText(/ReactJS/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Technical Matrix/i })).toHaveAttribute(
      'href',
      '#skills',
    );
  });

  it('opens certification links when clicked and via keyboard activation', () => {
    render(<AboutSection />);

    const certificationCards = screen.getAllByRole('button');
    const firstCard = certificationCards[0];

    fireEvent.click(firstCard);
    expect(window.open).toHaveBeenCalledWith(certifications[0].link, '_blank');

    fireEvent.keyDown(firstCard, { key: 'Enter' });
    fireEvent.keyDown(firstCard, { key: ' ' });

    expect(window.open).toHaveBeenCalledTimes(3);
  });
});
