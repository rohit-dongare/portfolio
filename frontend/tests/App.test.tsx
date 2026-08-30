import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App';

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the portfolio home page sections with the current layout content', () => {
    render(<App />);

    expect(screen.getAllByText(/Rohit Dongare/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/SOFTWARE ENGINEER/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Architecting resilient backends/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact Me/i })).toBeInTheDocument();

    expect(screen.getByText(/Engineering Profile & Overview/i)).toBeInTheDocument();

    expect(screen.getByText(/Featured Engineering Projects/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Real-Time Chat Application/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Eventora Platform/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Editorial Brutalist Portfolio/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Skills & Domain Expertise/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend & Real-Time APIs/i)).toBeInTheDocument();
    expect(screen.getByText(/Databases, DevOps & Cloud/i)).toBeInTheDocument();

    expect(screen.getByText(/Work History & Experience/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Bridgenext/i).length).toBeGreaterThan(0);

    expect(screen.getByText(/Let’s Build Something Reliable\./i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email Address \*/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /TRANSMIT MESSAGE/i })).toBeInTheDocument();

    expect(screen.getByText(/ALL RIGHTS RESERVED/i)).toBeInTheDocument();
  });

  it('opens the resume pdf in a new tab when the resume link is clicked', () => {
    render(<App />);

    const resumeLink = document.querySelector('a[href="/Resume.pdf"]') as HTMLAnchorElement | null;

    expect(resumeLink).not.toBeNull();
    expect(resumeLink).toHaveAttribute('href', '/Resume.pdf');

    fireEvent.click(resumeLink as HTMLAnchorElement);

    expect(window.open).toHaveBeenCalledWith('/Resume.pdf', '_blank', 'noopener,noreferrer');
  });
});
