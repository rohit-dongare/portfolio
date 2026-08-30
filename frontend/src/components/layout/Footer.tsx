import { portfolioProfile } from '../../data/portfolioData';
import { BrutalistButton } from '../ui/BrutalistButton';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-canvas-subtle)',
        borderTop: 'var(--border-width-thick) solid var(--border-main)',
        padding: '3.5rem 0 2rem',
      }}
    >
      <div className="site-container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: 'var(--border-width) solid var(--border-main)',
          }}
        >
          {/* Brand Col */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              {portfolioProfile.name}
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                }}
              >
                [ {portfolioProfile.role} ]
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.85rem',
                color: 'var(--text-main)',
              }}
            >
              NAVIGATION // SECTIONS
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
              }}
            >
              <li>
                <a href="#about" style={{ textDecoration: 'underline' }}>
                  → 01 // About Section
                </a>
              </li>
              <li>
                <a href="#projects" style={{ textDecoration: 'underline' }}>
                  → 02 // Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" style={{ textDecoration: 'underline' }}>
                  → 03 // Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" style={{ textDecoration: 'underline' }}>
                  → 04 // Work Experience
                </a>
              </li>
              <li>
                <a href="#contact" style={{ textDecoration: 'underline' }}>
                  → 05 // Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Back to Top */}
          <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.85rem',
                  color: 'var(--text-main)',
                }}
              >
                CONNECT // SOCIALS
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <BrutalistButton
                  as="a"
                  href={portfolioProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  GitHub ↗
                </BrutalistButton>
                <BrutalistButton
                  as="a"
                  href={portfolioProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  LinkedIn ↗
                </BrutalistButton>
                <BrutalistButton as="a" href={`mailto:${portfolioProfile.email}`} size="sm">
                  Email ↗
                </BrutalistButton>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <BrutalistButton as="a" href="#hero" onClick={scrollToTop} variant="dark" size="sm">
                ↑ BACK TO TOP
              </BrutalistButton>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {portfolioProfile.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
