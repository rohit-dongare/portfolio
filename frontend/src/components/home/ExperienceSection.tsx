import { experiences } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { BrutalistBadge } from '../ui/BrutalistBadge';

export function ExperienceSection() {
  return (
    <section id="experience" className="page-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="SECTION 04 // CAREER EXPERIENCE"
          title="Work History &amp; Experience"
          description="A chronological record of work and contributions to engineering teams."
          badge={<BrutalistBadge variant="gold">TRACK RECORD</BrutalistBadge>}
        />

        {/* Timeline Dispatches */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className="brutalist-box"
              style={{
                padding: '2rem',
                position: 'relative',
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  borderBottom: 'var(--border-width) solid var(--border-main)',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.65rem',
                        fontWeight: 900,
                        lineHeight: 1.1,
                      }}
                    >
                      {exp.company}
                    </h3>
                    <BrutalistBadge variant={index === 0 ? 'gold' : 'neutral'}>
                      {exp.badge}
                    </BrutalistBadge>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                    }}
                  >
                    {exp.role} <span style={{ color: 'var(--text-muted)' }}>— {exp.location}</span>
                  </div>
                </div>

                {/* Period Badge */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--bg-canvas-subtle)',
                    border: 'var(--border-width) solid var(--border-main)',
                    padding: '0.35rem 0.75rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Bulleted Achievements */}
              <div style={{ marginBottom: '1.5rem' }}>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    color: 'var(--text-main)',
                    fontSize: '0.98rem',
                    lineHeight: 1.6,
                  }}
                >
                  {exp.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used in this role */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  paddingTop: '1rem',
                  borderTop: '1px dashed var(--border-main)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  STACK:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1.2px solid var(--border-main)',
                      padding: '0.15rem 0.45rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
