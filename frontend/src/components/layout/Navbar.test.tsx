import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    window.history.pushState({}, '', '/');
    document.body.innerHTML = `
      <section id="about"></section>
      <section id="experience"></section>
      <section id="projects"></section>
      <section id="skills"></section>
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

    expect(screen.getAllByRole('link', { name: /Resume/, hidden: true })).toHaveLength(2);

    fireEvent.click(menuButton);

    expect(screen.getAllByRole('link', { name: /Resume/, hidden: true })).toHaveLength(1);
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

  it('activates the section nearest the current scroll position', () => {
    render(<Navbar />);

    const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
    sections.forEach((id, index) => {
      Object.defineProperty(document.getElementById(id), 'offsetTop', {
        configurable: true,
        value: index * 500,
      });
    });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 600 });
    Object.defineProperty(document.body, 'offsetHeight', { configurable: true, value: 4000 });

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 650 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.getByRole('link', { name: 'Experience', hidden: true }).className).toContain(
      'active',
    );

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.getByRole('link', { name: 'About', hidden: true }).className).toContain('active');
  });

  it('closes the mobile menu and keeps navigation stable when an anchor is missing', () => {
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(menuButton);

    const aboutLink = screen.getAllByRole('link', { name: /About/, hidden: true })[1];
    const scrollIntoView = vi.fn();
    Object.defineProperty(document.getElementById('about'), 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    });
    fireEvent.click(aboutLink);

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(screen.getAllByRole('link', { name: /Resume/, hidden: true })).toHaveLength(1);

    fireEvent.click(menuButton);
    const mobileResumeLink = screen.getAllByRole('link', {
      name: /Resume/,
      hidden: true,
    })[1] as HTMLAnchorElement;
    fireEvent.click(mobileResumeLink);
    expect(window.open).toHaveBeenCalledWith('/Resume.pdf', '_blank', 'noopener,noreferrer');

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 900 });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(screen.getAllByRole('link', { name: /Resume/, hidden: true })).toHaveLength(1);

    const brand = screen.getByRole('link', { name: /\[.*\]/ });
    fireEvent.click(brand);

    expect(window.location.hash).toBe('#about');
  });

  it('registers and removes the modern media-query listener', () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();
    vi.stubGlobal('matchMedia', () => ({
      addEventListener,
      removeEventListener,
    }));

    const { unmount } = render(<Navbar />);

    expect(addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
    unmount();
    expect(removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });

  it('supports legacy media-query listener APIs', () => {
    const addListener = vi.fn();
    const removeListener = vi.fn();
    vi.stubGlobal('matchMedia', () => ({
      addListener,
      removeListener,
    }));

    const { unmount } = render(<Navbar />);

    expect(addListener).toHaveBeenCalledWith(expect.any(Function));
    unmount();
    expect(removeListener).toHaveBeenCalledWith(expect.any(Function));
  });

  it('handles an initial hash when no sections are available', () => {
    document.body.innerHTML = '';
    window.history.pushState({}, '', '/#skills');
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    Object.defineProperty(document.body, 'offsetHeight', { configurable: true, value: 5000 });

    render(<Navbar />);

    expect(window.location.hash).toBe('#skills');
    expect(screen.getByRole('link', { name: 'Skills', hidden: true }).className).not.toContain(
      'active',
    );
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
