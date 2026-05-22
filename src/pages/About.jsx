import React from 'react'
import me from '../images/me.jpg'


export default function About() {
  return (
    <section className="page-section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Researcher · Developer · Educator</p>
      <div className="divider"></div>

      <div className="about-grid">
        <div>
          <p>
            I'm Mehedi Hasan, a researcher and software developer based in Dhaka, Bangladesh.
            My work sits at the crossroads of computational science, data analysis, and open-source
            software development. I'm passionate about making scientific tools and knowledge
            accessible to everyone, regardless of their background or location.
          </p>
          <p>
            I believe that open science is not just a methodology — it's a philosophy. By sharing
            data, code, and results openly, we accelerate discovery and empower communities that
            have historically been left out of the global research conversation.
          </p>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            A bit about me
          </h3>
          <ul className="about-bullets">
            <li>Researcher based in Dhaka, Bangladesh, working on computational methods and data science</li>
            <li>Passionate about open-source software and reproducible research practices</li>
            <li>Developing tools that bridge the gap between complex algorithms and practical applications</li>
            <li>Mentor and educator, running workshops on programming and scientific computing</li>
            <li>Contributor to several open-source scientific Python libraries</li>
            <li>Hiker, reader, coffee enthusiast, and amateur photographer</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            Education
          </h3>
          <ul className="about-bullets">
            <li>M.Sc. in Computer Science — University of Dhaka</li>
            <li>B.Sc. in Computer Science and Engineering — Bangladesh University of Engineering and Technology (BUET)</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            Skills & Tools
          </h3>
          <div className="research-tags" style={{ marginBottom: '1.5rem' }}>
            {['Python', 'JavaScript', 'React', 'NumPy', 'Pandas', 'Scikit-learn',
              'Git', 'Docker', 'Linux', 'LaTeX', 'MATLAB', 'SQL'].map(s => (
              <span className="tag" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div>
          {/* <div className="about-photo-placeholder">SH</div> */}
                    <img src={me} alt="Mehedi Hasan" />     
          
        </div>
      </div>
    </section>
  )
}
