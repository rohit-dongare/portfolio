import { portfolioProfile } from '../../data/portfolioData';
import { BrutalistButton } from '../ui/BrutalistButton';
import { BrutalistBadge } from '../ui/BrutalistBadge';

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="page-section" style={{ paddingTop: '3.5rem' }}>
      <div className="site-container">
        {/* Hero Main Grid: Left Column Content & Right Column Telemetry Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Headlines & Call to Actions */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <BrutalistBadge variant="dark">SOFTWARE ENGINEER</BrutalistBadge>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 6vw, 2.5rem)',
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                marginBottom: '1.5rem',
                color: 'var(--text-main)',
              }}
            >
              Architecting resilient backends &amp; high-impact systems.
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                marginBottom: '2.25rem',
                maxWidth: '580px',
              }}
            >
              {portfolioProfile.shortBio}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <BrutalistButton
                as="a"
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                variant="primary"
                size="lg"
              >
                View Projects →
              </BrutalistButton>

              <BrutalistButton
                as="a"
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                variant="secondary"
                size="lg"
              >
                Contact Me ✉
              </BrutalistButton>
            </div>
          </div>

          {/* Right Column: Retro Brutalist Telemetry / Patron-Style Metadata Card */}
          <div
            className="brutalist-box-static"
            style={{
              backgroundColor: 'var(--bg-card)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Card Title Ribbon */}
            <div
              style={{
                backgroundColor: 'var(--accent-gold)',
                borderBottom: 'var(--border-width) solid var(--border-main)',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{ fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
                ></span>
              </div>
            </div>

            {/* Profile Avatar & Identity Block */}
            <div
              style={{
                padding: '1.5rem',
                borderBottom: 'var(--border-width) solid var(--border-main)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-gold)',
                    border: 'var(--border-width-thick) solid var(--border-main)',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 900,
                    fontSize: '1.85rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  RD
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      lineHeight: 1.1,
                    }}
                  >
                    {portfolioProfile.name}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.4rem',
                      marginTop: '0.35rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <BrutalistBadge variant="neutral">CORE DEVELOPER</BrutalistBadge>
                  </div>
                </div>
              </div>

              {/* Status Info List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.4rem',
                    borderBottom: '1px dashed var(--border-main)',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>PRIMARY STACK:</span>
                  <span style={{ fontWeight: 700 }}>TS / NODE / REACT / PG / CLOUD</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.4rem',
                    borderBottom: '1px dashed var(--border-main)',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>FOCUS:</span>
                  <span style={{ fontWeight: 700 }}> FULL-STACK / BACKEND</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.4rem',
                    borderBottom: '1px dashed var(--border-main)',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>BASED IN:</span>
                  <span style={{ fontWeight: 700 }}>INDIA</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.4rem',
                    borderBottom: '1px dashed var(--border-main)',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>EXPERIENCE:</span>
                  <span style={{ fontWeight: 700 }}>1.5+YEARS</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Quick Dispatch */}
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--bg-canvas-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
