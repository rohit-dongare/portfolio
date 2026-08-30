import { skillCategories } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { BrutalistBadge } from '../ui/BrutalistBadge';

export function SkillsSection() {
  return (
    <section id="skills" className="page-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="SECTION 03 // TECHNICAL MATRIX"
          title="Skills &amp; Domain Expertise"
          description="A structured taxonomy of technical competencies spanning modern frontend systems, distributed backends, database architectures, and continuous delivery."
          badge={<BrutalistBadge variant="neutral">FULL-STACK CAPABILITY</BrutalistBadge>}
        />

        {/* 4-Panel Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="brutalist-box"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header Strip */}
                <div
                  style={{
                    backgroundColor:
                      idx % 2 === 0 ? 'var(--accent-gold)' : 'var(--bg-canvas-subtle)',
                    borderBottom: 'var(--border-width) solid var(--border-main)',
                    padding: '0.85rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat.code}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--bg-card)',
                      border: '1.5px solid var(--border-main)',
                      padding: '0.15rem 0.4rem',
                    }}
                  >
                    VERIFIED
                  </span>
                </div>

                {/* Body Content */}
                <div style={{ padding: '1.5rem 1.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {cat.category}
                  </h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {cat.description}
                  </p>

                  {/* Skills Tag Matrix */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--bg-card-pure, #fff)',
                          border: '1.5px solid var(--border-main)',
                          padding: '0.3rem 0.55rem',
                          boxShadow: '1px 1px 0px var(--border-main)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div
                style={{
                  borderTop: '1px dashed var(--border-main)',
                  padding: '0.65rem 1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-canvas)',
                }}
              >
                <span>PROFICIENCY: ADVANCED</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
