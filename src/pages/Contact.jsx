import React from 'react'

export default function Contact() {
  return (
    <section className="page-section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Let's connect and collaborate</p>
      <div className="divider"></div>

      <div className="contact-grid">
        <div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I'm always happy to hear from researchers, fellow developers, students, and anyone
            curious about my work. Whether you have a question, want to collaborate, or
            just want to say hello — feel free to reach out.
          </p>

          <div className="contact-item">
            <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:shuvohasan9812@gmail.com">shuvohasan9812@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><i className="fa-brands fa-github"></i></div>
            <div>
              <h4>GitHub</h4>
              <a href="www.github.com/Shuvo-Hasan" target="_blank" rel="noreferrer">github.com/Shuvo-Hasan</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><i className="fa-brands fa-linkedin-in"></i></div>
            <div>
              <h4>LinkedIn</h4>
              <a href="www.linkedin.com/in/mehedi-hasan-060867320" target="_blank" rel="noreferrer">linkedin.com/in/mehedi-hasan-060867320</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
            <div>
              <h4>Location</h4>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-form-note">
            <h3>Working Together</h3>
            <p>
              I'm open to research collaborations, consulting on data science projects,
              invited talks, and open-source contributions. If you're a student looking
              for mentorship or guidance on research projects, I'd love to hear from you too.
            </p>
            <br />
            <p>
              For the fastest response, email is best. I aim to reply within 1-2 business days.
            </p>
          </div>

          {/*
          <div className="contact-form-note" style={{ marginTop: '1.25rem' }}>
            <h3>Academic Profiles</h3>
            <p>
              You can also find my work on:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
              {[
                { label: 'Google Scholar', href: 'https://scholar.google.com/', icon: 'fa-brands fa-google' },
                { label: 'ORCID', href: 'https://orcid.org/', icon: 'fa-brands fa-orcid' },
                { label: 'ResearchGate', href: 'https://www.researchgate.net/', icon: 'fa-solid fa-r' },
              ].map(p => (
                <a key={p.label} href={p.href} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
                  <i className={p.icon} style={{ width: '16px', color: 'var(--accent-muted)' }}></i>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
