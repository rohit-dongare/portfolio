import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { FeaturedProjects } from './FeaturedProjects';

describe('FeaturedProjects', () => {
  it('renders featured project cards with working navigation links', () => {
    render(
      <MemoryRouter>
        <FeaturedProjects />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /Featured Engineering Projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Real-Time Chat Application/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Source Code/i })[0]).toHaveAttribute(
      'href',
      'https://github.com/rohit-dongare/chat-app',
    );
    expect(screen.getAllByRole('link', { name: /Read Case Study/i })[0]).toHaveAttribute(
      'href',
      '/projects/chat-application',
    );
  });
});
