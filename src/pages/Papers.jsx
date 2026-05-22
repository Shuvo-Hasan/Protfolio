import React, { useState } from 'react'

const PAPERS = [
  {
    year: '2024',
    title: 'A Computational Framework for Scalable Data Analysis in Scientific Workflows',
    authors: 'S. Hasan, M. Rahman, A. Islam',
    venue: 'Journal of Open Research Software',
    abstract: 'We present a flexible, open-source framework for constructing scalable data analysis pipelines in scientific computing. The framework supports modular composition, parallel execution, and reproducible outputs.',
    links: [{ label: 'DOI', href: '#' }, { label: 'PDF', href: '#' }, { label: 'Code', href: '#' }],
  },
  {
    year: '2023',
    title: 'Efficient Inverse Methods for Parameter Estimation in Complex Systems',
    authors: 'S. Hasan, T. Chowdhury',
    venue: 'Computational Science & Discovery, vol. 16, pp. 1–18',
    abstract: 'This paper introduces an accelerated inversion strategy for multi-parameter estimation problems, demonstrating order-of-magnitude improvements in convergence speed on benchmark datasets.',
    links: [{ label: 'DOI', href: '#' }, { label: 'PDF', href: '#' }],
  },
  {
    year: '2023',
    title: 'Open Data Platforms: Bridging the Gap Between Research and Practice',
    authors: 'S. Hasan, R. Ahmed, F. Begum',
    venue: 'IEEE Access, vol. 11',
    abstract: 'A survey and analysis of open data platforms in scientific research, examining adoption barriers and proposing design principles for platforms that serve diverse, global user communities.',
    links: [{ label: 'DOI', href: '#' }, { label: 'PDF', href: '#' }, { label: 'Data', href: '#' }],
  },
  {
    year: '2022',
    title: 'Machine Learning Approaches for Geospatial Feature Extraction from Satellite Imagery',
    authors: 'S. Hasan, K. Sultana',
    venue: 'International Journal of Remote Sensing, vol. 43, no. 8',
    abstract: 'We compare deep learning architectures for automated extraction of land-use features from multispectral satellite imagery, with a focus on low-resource deployment in emerging economies.',
    links: [{ label: 'DOI', href: '#' }, { label: 'PDF', href: '#' }, { label: 'Code', href: '#' }],
  },
  {
    year: '2022',
    title: 'Reproducible Research Workflows in Python: Best Practices and Tooling',
    authors: 'S. Hasan',
    venue: 'SoftwareX, vol. 18',
    abstract: 'A practitioner-focused guide to building reproducible scientific workflows in Python, covering dependency management, automated testing, and continuous integration for research codebases.',
    links: [{ label: 'DOI', href: '#' }, { label: 'PDF', href: '#' }],
  },
  {
    year: '2021',
    title: 'Interactive Web-Based Tools for Teaching Numerical Methods',
    authors: 'S. Hasan, N. Karim',
    venue: 'Journal of Science Education and Technology, vol. 30',
    abstract: 'We describe the development and classroom evaluation of interactive browser-based simulations for teaching numerical methods. Student performance and engagement metrics showed significant improvement.',
    links: [{ label: 'DOI', href: '#' }, { label: 'Demo', href: '#' }],
  },
]

export default function Papers() {
  const years = [...new Set(PAPERS.map(p => p.year))].sort((a, b) => b - a)
  const [filter, setFilter] = useState('All')

  const shown = filter === 'All' ? PAPERS : PAPERS.filter(p => p.year === filter)

  return (
    <section className="page-section">
      <h2 className="section-title">Papers</h2>
      <p className="section-subtitle">Peer-reviewed publications and preprints</p>
      <div className="divider"></div>

      {/* Year filter */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {['All', ...years].map(y => (
          <button
            key={y}
            onClick={() => setFilter(y)}
            style={{
              padding: '0.3rem 1rem',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              background: filter === y ? 'var(--accent)' : 'var(--bg-card)',
              color: filter === y ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {y}
          </button>
        ))}
      </div>

      {shown.map((p, i) => (
        <div className="paper-card" key={i}>
          <div className="paper-year">{p.year}</div>
          <div className="paper-content">
            <h3>{p.title}</h3>
            <p className="paper-meta">{p.authors} · {p.venue}</p>
            <p className="paper-abstract">{p.abstract}</p>
            <div className="paper-links">
              {p.links.map(l => (
                <a className="paper-link" href={l.href} key={l.label}
                  target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
