import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    window.history.pushState({}, '', '/');
    document.body.innerHTML = `
      <section id="about"></section>
      <section id="projects"></section>
      <section id="skills"></section>
      <section id="experience"></section>
      <section id="contact"></section>
    `;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    window.history.pushState({}, '', '/');
    document.body.innerHTML = '';
  });

  it('opens the resume pdf in a new tab', () => {
    render(<Navbar />);

    const resumeLink = document.querySelector('a[href="/Resume.pdf"]') as HTMLAnchorElement | null;

    expect(resumeLink).not.toBeNull();
    fireEvent.click(resumeLink as HTMLAnchorElement);

    expect(window.open).toHaveBeenCalledWith('/Resume.pdf', '_blank', 'noopener,noreferrer');
  });

  it('toggles the mobile menu to show the resume action', () => {
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(menuButton);

    expect(screen.getByText(/View Resume \/ Inquiries/i)).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(screen.queryByText(/View Resume \/ Inquiries/i)).not.toBeInTheDocument();
  });

  it('sets the active section when a nav link is clicked and scrolls to the anchor', () => {
    render(<Navbar />);

    const projectsLink = screen.getAllByRole('link', { name: 'Projects', hidden: true })[0];
    const projectsSection = document.getElementById('projects');
    const scrollIntoView = vi.fn();
    Object.defineProperty(projectsSection, 'scrollIntoView', {
      value: scrollIntoView,
      writable: true,
    });

    fireEvent.click(projectsLink);

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(window.location.hash).toBe('#projects');
    expect(projectsLink.className).toContain('active');
  });

  it('updates the active section when the page is scrolled near the bottom', () => {
    render(<Navbar />);

    Object.defineProperty(window, 'innerHeight', { value: 800, configurable: true });
    Object.defineProperty(window, 'scrollY', { value: 1000, configurable: true });
    Object.defineProperty(document.body, 'offsetHeight', { value: 1600, configurable: true });

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    const contactLink = screen.getAllByRole('link', { name: 'Contact', hidden: true })[0];
    expect(contactLink.className).toContain('active');
  });
});
