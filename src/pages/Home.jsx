import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="home-hero">
        <div className="hero-text">
          <p className="hero-greeting">Welcome</p>
          <h1 className="hero-name">Shuvo Hasan</h1>
          <div className="hero-roles">
            <span className="role-chip">Researcher</span>
            <span className="role-chip">Software Developer</span>
            <span className="role-chip">Open Science Advocate</span>
            <span className="role-chip">Educator</span>
          </div>
          <p className="hero-bio">
            Bangladeshi researcher and developer passionate about building open-source tools,
            advancing scientific knowledge, and sharing it freely with the world.
            Currently working at the intersection of technology, data, and education.
          </p>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-placeholder">SH</div>
        </div>
      </div>

      {/* Highlights */}
      <div className="home-highlights">
        {[
          { icon: 'fa-solid fa-flask', title: 'Research', desc: 'Computational methods, data science, and applied problem-solving in real-world domains.', link: '/research' },
          { icon: 'fa-solid fa-code', title: 'Open Source', desc: 'Building and contributing to open-source libraries that make complex tools accessible.', link: '/open-science' },
          { icon: 'fa-solid fa-chalkboard-user', title: 'Teaching', desc: 'Tutorials, workshops, and educational resources to help others grow in STEM fields.', link: '/about' },
        ].map((h, i) => (
          <Link to={h.link} key={h.title} className="highlight-card" style={{ textDecoration: 'none' }}>
            <div className="highlight-icon"><i className={h.icon}></i></div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </Link>
        ))}
      </div>

      {/* Featured papers */}
      <h2 className="section-title">Recent Papers</h2>
      <div className="divider"></div>

      {[
        { year: '2024', title: 'A Computational Framework for Scalable Data Analysis in Scientific Workflows', venue: 'Journal of Open Research Software' },
        { year: '2023', title: 'Efficient Inverse Methods for Parameter Estimation in Complex Systems', venue: 'Computational Science & Discovery' },
        { year: '2023', title: 'Open Data Platforms: Bridging the Gap Between Research and Practice', venue: 'IEEE Access' },
      ].map((p, i) => (
        <div className="paper-card" key={i}>
          <div className="paper-year">{p.year}</div>
          <div className="paper-content">
            <h3>{p.title}</h3>
            <p className="paper-meta">{p.venue}</p>
          </div>
        </div>
      ))}

      <p style={{ marginTop: '1.5rem' }}>
        <Link to="/papers" style={{ fontWeight: 500 }}>View all papers →</Link>
      </p>
    </section>
  )
}
