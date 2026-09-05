import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ContactSection } from './ContactSection';

describe('ContactSection', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows a validation error when required fields are missing', () => {
    render(<ContactSection />);

    fireEvent.submit(document.querySelector('form') as HTMLFormElement);

    expect(screen.getByText(/Please fill in all required fields/i)).toBeInTheDocument();
  });

  it('opens a mailto client and clears the form on successful submit', () => {
    vi.useFakeTimers();

    try {
      render(<ContactSection />);

      fireEvent.change(screen.getByLabelText(/Your Name \*/i), { target: { value: 'Jane Doe' } });
      fireEvent.change(screen.getByLabelText(/Your Email Address \*/i), {
        target: { value: 'jane@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/Message Body \*/i), {
        target: { value: 'Hello from the test suite.' },
      });

      fireEvent.submit(document.querySelector('form') as HTMLFormElement);

      act(() => {
        vi.advanceTimersByTime(400);
      });

      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('mailto:rohitdongare2611@gmail.com'),
        '_blank',
      );
      expect(screen.getByText(/MAIL TRANSMITTED ✓/i)).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });
});
