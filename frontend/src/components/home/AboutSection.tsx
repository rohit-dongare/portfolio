import { SectionHeader } from '../ui/SectionHeader';
import { BrutalistBadge } from '../ui/BrutalistBadge';
import { BrutalistButton } from '../ui/BrutalistButton';
import { certifications, portfolioProfile } from '../../data/portfolioData';

const philosophies = [
  {
    title: 'Real-Time Reliability & Performance',
    description:
      'Building responsive, low-latency client-server architectures with WebSockets, structured state management, and optimized backend query pipelines.',
  },
  {
    title: 'Clean API & Boundary Contracts',
    description:
      'Designing secure RESTful endpoints with JWT authentication, predictable error handling, and robust separation of concerns between layers.',
  },
  {
    title: 'Agile Craftsmanship & Collaboration',
    description:
      'Maintaining high code quality through rigorous peer reviews, industry standards, Azure DevOps CI/CD integration, and component reusability.',
  },
];

const mainTechList = [
  'ReactJS',
  'React Native',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MSSQL',
  'POSTGRESQL',
  'TypeScript',
  'JavaScript',
  'TailwindCSS',
  'Azure Cloud',
  'Docker & Kubernetes',
  'AWS',
];

export function AboutSection() {
  return (
    <section id="about" className="page-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="SECTION 01 // PROFILE"
          title="Engineering Profile &amp; Overview"
          description="Software Development Engineer building scalable web & mobile solutions across the MERN stack, with a strong focus on real-time systems, AI-powered applications, and clean, maintainable code."
          badge={<BrutalistBadge variant="neutral">BRIDGENEXT SDE</BrutalistBadge>}
        />

        {/* Editorial 2-Column Newspaper Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '3rem',
          }}
        >
          {/* Left Column: Narrative */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: 'var(--border-width) solid var(--border-main)',
              boxShadow: 'var(--shadow-md)',
              padding: '2rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
                color: 'var(--accent-gold)',
                backgroundColor: 'var(--accent-dark)',
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
              }}
            >
              PROFESSIONAL SUMMARY
            </div>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-main)',
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Hello, I&apos;m <strong>{portfolioProfile.name}</strong>. I am an{' '}
              {portfolioProfile.role} at <strong>Bridgenext</strong> with practical experience
              building scalable web and mobile applications using the modern stack and development
              tools.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7 }}>
              I work across frontend and backend development, RESTful APIs, performance
              optimization, cloud technologies, and AI-powered application development. I also
              leverage modern AI coding and development tools to improve productivity, explore
              solutions, and streamline engineering workflows.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Backed by a solid foundation in Data Structures &amp; Algorithms, DBMS, and System
              Design core, I focus on writing clean, maintainable, and reliable production code
              while continuously expanding my expertise in cloud and AI technologies.
            </p>

            {/* Main Technologies Pill Grid */}
            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: 'var(--border-width) solid var(--border-main)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.75rem',
                  color: 'var(--text-main)',
                }}
              >
                CORE TECHNICAL ARSENAL:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {mainTechList.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1.5px solid var(--border-main)',
                      padding: '0.3rem 0.65rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Certifications Block */}
            <div
              style={{
                backgroundColor: 'var(--accent-gold)',
                border: 'var(--border-width) solid var(--border-main)',
                boxShadow: 'var(--shadow-md)',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.65rem',
                }}
              >
                ★ VERIFIED CERTIFICATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="certification-card"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1.5px solid var(--border-main)',
                      padding: '0.6rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                    onClick={() => window.open(cert.link, '_blank')}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        window.open(cert.link, '_blank');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                      }}
                    >
                      {cert.title}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--bg-canvas)',
                        padding: '0.15rem 0.45rem',
                        border: '1px solid var(--border-main)',
                      }}
                    >
                      {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {philosophies.map((item, index) => (
                <div
                  key={item.title}
                  className="brutalist-box"
                  style={{
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 900,
                        fontSize: '0.85rem',
                        color: 'var(--accent-gold-hover)',
                      }}
                    >
                      0{index + 1} //
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        fontWeight: 800,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <BrutalistButton as="a" href="#skills" variant="secondary" style={{ width: '100%' }}>
                Explore Technical Matrix ↓
              </BrutalistButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
