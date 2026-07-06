import React, { useState } from 'react'

const PAPERS = []

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
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
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

      {shown.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Publications Coming Soon</h3>
          <p style={{ maxWidth: '650px', margin: '0 auto', lineHeight: '1.8' }}>
            I am currently working on several research projects in the areas of Physics-informed machine learning in nuclear energy,
            rarefied gas dynamics, and computational reactor physics.
            Peer-reviewed publications and preprints will be added here as they become available.
          </p>
        </div>
      ) : (
        shown.map((p, i) => (
          <div className="paper-card" key={i}>
            <div className="paper-year">{p.year}</div>
            <div className="paper-content">
              <h3>{p.title}</h3>
              <p className="paper-meta">
                {p.authors} · {p.venue}
              </p>
              <p className="paper-abstract">{p.abstract}</p>
              <div className="paper-links">
                {p.links.map(l => (
                  <a
                    className="paper-link"
                    href={l.href}
                    key={l.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  )
}