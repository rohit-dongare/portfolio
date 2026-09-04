import { useEffect, useState } from 'react';
import { portfolioProfile } from '../../data/portfolioData';
import { BrutalistButton } from '../ui/BrutalistButton';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      // Check if user is scrolled near bottom of page (highlight Contact)
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 80) {
        setActiveSection('#contact');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`#${sectionIds[i]}`);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    // Initial sync with hash if present
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>
      {/* Main Navbar */}
      <nav
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: 'var(--border-width-thick) solid var(--border-main)',
          padding: '0.85rem 0',
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Brand / Name */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 900,
                fontSize: '1.45rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--text-main)',
              }}
            >
              {portfolioProfile.name}
            </span>
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
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="desktop-nav-links"
            style={{
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}

            <BrutalistButton
              as="a"
              href={portfolioProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open(portfolioProfile.resumeUrl, '_blank', 'noopener,noreferrer');
              }}
              variant="primary"
              size="sm"
            >
              Resume ↗
            </BrutalistButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn brutalist-btn brutalist-btn-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            style={{
              padding: '0.4rem 0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
            }}
          >
            {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderTop: 'var(--border-width) solid var(--border-main)',
              borderBottom: 'var(--border-width-thick) solid var(--border-main)',
              padding: '1.25rem',
              marginTop: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 800 : 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-main)',
                    padding: '0.5rem 0.75rem',
                    backgroundColor: isActive ? 'var(--accent-gold)' : 'transparent',
                    border: isActive ? '1.5px solid var(--border-main)' : 'none',
                    borderBottom: isActive
                      ? '1.5px solid var(--border-main)'
                      : '1px dashed var(--border-main)',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  {isActive ? '● ' : '→ '}
                  {link.label}
                </a>
              );
            })}
            <div style={{ marginTop: '0.5rem' }}>
              <BrutalistButton
                as="a"
                href={portfolioProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(portfolioProfile.resumeUrl, '_blank', 'noopener,noreferrer');
                }}
                variant="primary"
                style={{ width: '100%' }}
              >
                View Resume / Inquiries ↗
              </BrutalistButton>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .desktop-nav-links {
          display: none;
        }
        .mobile-menu-btn {
          display: inline-flex;
        }
        @media (min-width: 820px) {
          .desktop-nav-links {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
        .nav-item-link {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-main);
          padding: 0.35rem 0.65rem;
          border: 1.5px solid transparent;
          transition: all 0.15s ease;
          text-decoration: none;
        }
        .nav-item-link:hover {
          background-color: var(--accent-gold);
          border-color: var(--border-main);
          box-shadow: var(--shadow-sm);
        }
        .nav-item-link.active {
          background-color: var(--accent-gold);
          border-color: var(--border-main);
          box-shadow: var(--shadow-sm);
          font-weight: 800;
        }
      `}</style>
    </header>
  );
}
