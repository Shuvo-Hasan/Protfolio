import React from 'react'
import me from '../images/me.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="home-hero">
        <div className="hero-text">
          <p className="hero-greeting">Welcome</p>
          <h1 className="hero-name">Mehedi Hasan</h1>
          <div className="hero-roles">
            <span className="role-chip">Researcher</span>
            <span className="role-chip">Data Scientist</span>
            <span className="role-chip">Lifelong Learner</span>
          </div>
          <p className="hero-bio">
            Bangladeshi researcher, aspiring scientist, and former data scientist passionate about applying AI to solve problems in science and engineering,
            advancing scientific knowledge, and sharing it freely with the world.
            Currently working at the intersection of physics and artificial intelligence.
          </p>
        </div>
        <div className="hero-photo-wrap">
          <img src={me} alt="Mehedi Hasan" />     
             </div>
      </div>

      {/* Highlights */}
      <div className="home-highlights">
        {[
          { icon: 'fa-solid fa-flask', title: 'Research', desc: 'Computational methods, data science, and applied problem-solving in real-world domains.', link: '/research' },
          // { icon: 'fa-solid fa-code', title: 'Open Source', desc: 'Building and contributing to open-source libraries that make complex tools accessible.', link: '/open-science' },
          // { icon: 'fa-solid fa-chalkboard-user', title: 'Teaching', desc: 'Tutorials, workshops, and educational resources to help others grow in STEM fields.', link: '/about' },
        ].map((h, i) => (
          <Link to={h.link} key={h.title} className="highlight-card" style={{ textDecoration: 'none' }}>
            <div className="highlight-icon"><i className={h.icon}></i></div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
