import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ProjectDetailPage } from './ProjectDetailPage';

describe('ProjectDetailPage', () => {
  it('renders a valid project case study page', () => {
    render(
      <MemoryRouter initialEntries={['/projects/chat-application']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /Real-Time Chat Application/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/CASE STUDY/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/REAL-TIME WEBSOCKETS/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders the not found state for an unknown project slug', () => {
    render(
      <MemoryRouter initialEntries={['/projects/unknown-project']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /Project Not Found/i })).toBeInTheDocument();
  });
});
