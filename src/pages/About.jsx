import React from 'react'
import me from '../images/me.jpg'


export default function About() {
  return (
    <section className="page-section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Researcher · Data Scientist · Educator</p>
      <div className="divider"></div>

      <div className="about-grid">
        <div>
          <p>
          I'm Mehedi Hasan, an aspiring research scientist, and former data scientist based in Dhaka, Bangladesh.
          My work sits at the crossroads of computational science, artificial intelligence, data science, and data-driven science and engineering.
          I am very passionate about using artificial intelligence tools and methods to solve problems in physics and engineering. 
          </p>
          My current work consists of using physics-informed machine learning to solve various problems involving nuclear energy. Specifically, solving the 
          neutron transport equation using physics-based neural operator methods, and predicting the critical heat flux in nuclear reactors using physics-informed machine learning.
          I am also trying to solve the related Boltzmann Transport Equation in Rarefied Gas Dynamics using the same methodology.
          <p>
          
          </p>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            A bit about me
          </h3>
          <ul className="about-bullets">
            <li>Passionate about how the world works, from subatomic particles to supermassive black holes</li>
            <li>Studied mathematics and theoretical physics at undergraduate and master's level</li>
            <li>Self-learned python and machine learning</li>
            <li>Worked as a Data Scientist</li>
            <li>Currently working on applying AI in nuclear energy and aerodynamics</li> 
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            Education
          </h3>
          <ul className="about-bullets">
            <li>Master of Science in Theoretical Physics — University of Dhaka</li>
            <li>Bachelor of Science in Mathematics — University of Dhaka</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            Training
          </h3>
          <ul className="about-bullets">
            <li>DeepLearning.AI TensorFlow Developer Professional Certificate — Coursera</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            Experience
          </h3>
          <ul className="about-bullets">
            <li>Business Analyst - Turing - Feb 2026 to May 2026</li>
            <li>VLA Trainer - Turing - Sep 2025 to Oct 2025</li>
            <li>Business Analyst - Turing - Oct 2024 to Dec 2024</li>
            <li>Trainee Data Scientist - Intelligent Image Management Ltd - Jan 2024 to May 2024</li>
          </ul>                    

          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.25rem', margin: '1.5rem 0 0.75rem' }}>
            Skills & Tools
          </h3>
          <div className="research-tags" style={{ marginBottom: '1.5rem' }}>
            {['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'Scikit-Learn',
              'Matplotlib', 'MATLAB', 'FORTRAN', 'LaTeX', 'OpenCV', 'Deep Learning', 'Physics-Informed Machine Learning', 'Neural Operator Learning',
              'Large Language Models', 'Natural Language Processing', 'Computer Vision', 'Prompt Engineering'].map(s => (
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
