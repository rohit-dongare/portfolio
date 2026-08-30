import { Link } from 'react-router-dom';
import { featuredProjects } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { BrutalistBadge } from '../ui/BrutalistBadge';
import { BrutalistButton } from '../ui/BrutalistButton';

export function FeaturedProjects() {
  return (
    <section id="projects" className="page-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="SECTION 02 // WORK ARCHIVE"
          title="Featured Engineering Projects"
          description="Selected distributed systems, search engines, and real-time collaboration platforms built with strict performance and reliability benchmarks."
          badge={
            <BrutalistBadge variant="gold">
              {featuredProjects.length} PRODUCTION-GRADE SYSTEMS
            </BrutalistBadge>
          }
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="brutalist-box"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                overflow: 'hidden',
              }}
            >
              {/* Responsive Project Card Layout: Index Tab + Content Body */}
              <div className="project-card-inner">
                {/* Left/Top Index Block (styled after reference patron index tab) */}
                <div
                  className="project-index-tab"
                  style={{
                    backgroundColor: 'var(--accent-gold)',
                    borderRight: 'var(--border-width) solid var(--border-main)',
                    borderBottom: 'var(--border-width) solid var(--border-main)',
                    padding: '1.5rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    minWidth: '130px',
                  }}
                >
                  <div
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}
                  >
                    ★ SYSTEM
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '3rem',
                      fontWeight: 900,
                      lineHeight: 1,
                      margin: '0.5rem 0',
                    }}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Main Card Body */}
                <div
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                >
                  {/* Top Bar of Card */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <BrutalistBadge variant="neutral">{project.badge}</BrutalistBadge>
                    </div>

                    {/* Title & Subtitle */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                        fontWeight: 900,
                        lineHeight: 1.15,
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--accent-dark)',
                        marginBottom: '1rem',
                      }}
                    >
                      [ {project.subtitle} ]
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {project.description}
                    </p>

                    {/* Impact / Metric Box */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-canvas)',
                        borderLeft: '4px solid var(--accent-gold)',
                        border: '1.5px solid var(--border-main)',
                        padding: '0.75rem 1rem',
                        marginBottom: '1.25rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--text-main)',
                      }}
                    >
                      <strong>IMPACT METRIC:</strong> {project.impact}
                    </div>

                    {/* Tech Stack Pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            backgroundColor: 'var(--bg-canvas-subtle)',
                            border: '1.5px solid var(--border-main)',
                            padding: '0.2rem 0.55rem',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexWrap: 'wrap',
                      paddingTop: '1.25rem',
                      borderTop: 'var(--border-width) solid var(--border-main)',
                    }}
                  >
                    <BrutalistButton
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      Source Code ↗
                    </BrutalistButton>

                    {project.liveUrl && (
                      <BrutalistButton
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                      >
                        Live Demo ↗
                      </BrutalistButton>
                    )}

                    <Link
                      to={`/projects/${project.slug}`}
                      className="brutalist-btn brutalist-btn-sm"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        marginLeft: 'auto',
                        backgroundColor: 'var(--bg-canvas-subtle)',
                      }}
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .project-card-inner {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .project-card-inner {
            flex-direction: row;
          }
          .project-index-tab {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
