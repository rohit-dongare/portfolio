import { useState, type FormEvent } from 'react';
import { portfolioProfile } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { BrutalistBadge } from '../ui/BrutalistBadge';
import { BrutalistButton } from '../ui/BrutalistButton';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    // Generate mailto link as resilient client fallback and show success state
    setTimeout(() => {
      const mailtoUrl = `mailto:${portfolioProfile.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject || 'New Message'} - from ${formData.name}`,
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`,
      )}`;

      window.open(mailtoUrl, '_blank');
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioProfile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="page-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="SECTION 05 // DIRECT INQUIRIES"
          title="Let’s Build Something Reliable."
          description="Interested in collaborating, discussing architectures, Reach out directly below."
          badge={<BrutalistBadge variant="gold">COMMUNICATION CHANNEL</BrutalistBadge>}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Info & Social Channels */}
          <div
            className="brutalist-box"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  marginBottom: '0.5rem',
                }}
              >
                {portfolioProfile.name}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                {portfolioProfile.role} — Bridgenext
              </div>

              {/* Email Copy Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-canvas)',
                  border: 'var(--border-width) solid var(--border-main)',
                  padding: '0.85rem 1rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.25rem',
                  }}
                >
                  ELECTRONIC MAIL:
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      wordBreak: 'break-all',
                    }}
                  >
                    {portfolioProfile.email}
                  </span>
                  <BrutalistButton
                    type="button"
                    onClick={handleCopyEmail}
                    size="sm"
                    variant={copiedEmail ? 'primary' : 'secondary'}
                  >
                    {copiedEmail ? 'COPIED ✓' : 'COPY'}
                  </BrutalistButton>
                </div>
              </div>

              {/* Phone Copy Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-canvas)',
                  border: 'var(--border-width) solid var(--border-main)',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.25rem',
                  }}
                >
                  TELEPHONE:
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                    }}
                  >
                    {portfolioProfile.phone}
                  </span>
                  <BrutalistButton
                    type="button"
                    onClick={handleCopyPhone}
                    size="sm"
                    variant={copiedPhone ? 'primary' : 'secondary'}
                  >
                    {copiedPhone ? 'COPIED ✓' : 'COPY'}
                  </BrutalistButton>
                </div>
              </div>

              {/* Social Channels List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={portfolioProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-btn"
                  style={{ justifyContent: 'space-between', width: '100%' }}
                >
                  <span>GITHUB // REPOSITORIES</span>
                  <span>↗</span>
                </a>

                <a
                  href={portfolioProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-btn"
                  style={{ justifyContent: 'space-between', width: '100%' }}
                >
                  <span>LINKEDIN // PROFILE</span>
                  <span>↗</span>
                </a>

                <a
                  href={`mailto:${portfolioProfile.email}`}
                  className="brutalist-btn brutalist-btn-primary"
                  style={{ justifyContent: 'space-between', width: '100%' }}
                >
                  <span>DIRECT MAILTO // LAUNCH CLIENT</span>
                  <span>✉</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div
            className="brutalist-box"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {formStatus === 'success' ? (
              <div
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  border: 'var(--border-width) solid var(--border-main)',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    marginBottom: '0.5rem',
                  }}
                >
                  DISPATCH TRANSMITTED ✓
                </div>
                <p
                  style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}
                >
                  Your email client was opened with your message details. I will review and get in
                  touch promptly.
                </p>
                <BrutalistButton
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  variant="dark"
                  size="sm"
                >
                  Send Another Message
                </BrutalistButton>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div>
                  <label htmlFor="contact-name" className="brutalist-label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Rohit Dongare"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="brutalist-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="brutalist-label">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. contact@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="brutalist-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="brutalist-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. discussion about a project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="brutalist-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="brutalist-label">
                    Message Body *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Write your note..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="brutalist-textarea"
                  />
                </div>

                {formStatus === 'error' && (
                  <div
                    style={{
                      backgroundColor: '#fee2e2',
                      border: '1.5px solid #dc2626',
                      padding: '0.65rem 1rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: '#b91c1c',
                      fontWeight: 600,
                    }}
                  >
                    ⚠ Please fill in all required fields before transmitting.
                  </div>
                )}

                <div style={{ marginTop: '0.5rem' }}>
                  <BrutalistButton
                    type="submit"
                    variant="primary"
                    disabled={formStatus === 'submitting'}
                    style={{ width: '100%' }}
                  >
                    {formStatus === 'submitting'
                      ? 'PROCESSING TRANSMISSION...'
                      : 'TRANSMIT MESSAGE →'}
                  </BrutalistButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
