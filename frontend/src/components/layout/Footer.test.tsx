import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('scrolls to the top when the back-to-top link is clicked', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    const pushStateSpy = vi.spyOn(window.history, 'pushState');
    window.history.pushState({}, '', '/portfolio?view=work#contact');

    render(<Footer />);

    fireEvent.click(screen.getByRole('link', { name: /BACK TO TOP/i }));

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(pushStateSpy).toHaveBeenLastCalledWith(null, '', '/portfolio?view=work');
  });

  it('smoothly scrolls to each section and updates the URL hash', () => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact'];
    const sections = sectionIds.map((id) => {
      const section = document.createElement('section');
      section.id = id;
      section.scrollIntoView = vi.fn();
      document.body.append(section);
      return section;
    });
    const pushStateSpy = vi.spyOn(window.history, 'pushState');

    render(<Footer />);

    const linkNames = [
      /01 \/\/ About Section/i,
      /02 \/\/ Work Experience/i,
      /03 \/\/ Featured Projects/i,
      /04 \/\/ Technical Skills/i,
      /05 \/\/ Direct Contact/i,
    ];

    linkNames.forEach((name, index) => {
      fireEvent.click(screen.getByRole('link', { name }));

      expect(sections[index].scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(pushStateSpy).toHaveBeenLastCalledWith(null, '', `#${sectionIds[index]}`);
    });
  });

  it('does not scroll or update history when a section is missing', () => {
    document
      .querySelectorAll('#about, #experience, #projects, #skills, #contact')
      .forEach((section) => {
        section.remove();
      });
    const pushStateSpy = vi.spyOn(window.history, 'pushState');

    render(<Footer />);

    fireEvent.click(screen.getByRole('link', { name: /01 \/\/ About Section/i }));

    expect(pushStateSpy).not.toHaveBeenCalled();
  });
});
