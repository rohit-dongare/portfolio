import { Link, useParams } from 'react-router-dom';
import { featuredProjects } from '../data/portfolioData';
import { BrutalistBadge } from '../components/ui/BrutalistBadge';
import { BrutalistButton } from '../components/ui/BrutalistButton';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = featuredProjects.find((p) => p.slug === slug);

  return (
    <div className="portfolio-shell">
      <header
        style={{
          borderBottom: 'var(--border-width-thick) solid var(--border-main)',
          padding: '1rem 0',
          backgroundColor: 'var(--bg-canvas-subtle)',
        }}
      >
        <div
          className="site-container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            ← RETURN TO HOME PORTFOLIO
          </Link>
          <BrutalistBadge variant="gold">CASE STUDY DOSSIER</BrutalistBadge>
        </div>
      </header>

      <main className="site-container" style={{ padding: '4rem 1.25rem', maxWidth: '840px' }}>
        {project ? (
          <article
            className="brutalist-box"
            style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)' }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <BrutalistBadge variant="dark">CASE STUDY</BrutalistBadge>
              <BrutalistBadge variant="gold">{project.badge}</BrutalistBadge>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '0.5rem',
              }}
            >
              {project.title}
            </h1>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--accent-dark)',
                marginBottom: '1.5rem',
              }}
            >
              [ {project.subtitle} ]
            </div>

            <hr className="editorial-rule" />

            <div style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {project.description}
            </div>

            <div
              style={{
                backgroundColor: 'var(--accent-tag-bg)',
                border: '1.5px solid var(--border-main)',
                padding: '1.25rem',
                marginBottom: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
              }}
            >
              <strong>QUANTIFIED IMPACT:</strong> {project.impact}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                SYSTEM ARCHITECTURE &amp; TECHNOLOGIES:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1.5px solid var(--border-main)',
                      padding: '0.35rem 0.75rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <BrutalistButton
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inspect Source Code ↗
              </BrutalistButton>
              {project.liveUrl && (
                <BrutalistButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Launch Live Demo ↗
                </BrutalistButton>
              )}
            </div>
          </article>
        ) : (
          <div className="brutalist-box" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
              Project Not Found
            </h2>
            <p>The requested project dossier does not exist in the archive.</p>
            <BrutalistButton as="a" href="/" variant="primary">
              Back to Home
            </BrutalistButton>
          </div>
        )}
      </main>
    </div>
  );
}
