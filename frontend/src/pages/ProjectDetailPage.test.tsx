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
    expect(screen.getByText(/ChatX is a responsive messaging platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Instant bidirectional messaging with Socket.io/i)).toBeInTheDocument();
    expect(screen.getByText(/MongoDB stores users and chat history/i)).toBeInTheDocument();
    expect(screen.getAllByText(/CASE STUDY/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders project-specific details and omits unavailable live demos', () => {
    render(
      <MemoryRouter initialEntries={['/projects/eventora']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /Eventora Platform/i })).toBeInTheDocument();
    expect(screen.getByText(/centralized college event management system/i)).toBeInTheDocument();
    expect(screen.getByText(/Registration for one or multiple sub-events/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Launch Live Demo/i })).not.toBeInTheDocument();
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
