import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const PROJECTS = [
  {
    id: 'dataforge',
    name: 'DataForge',
    icon: 'fa-solid fa-database',
    image: '/images/oss-dataforge.svg',
    short: 'Reproducible data pipeline library for Python.',
    desc: 'A Python library for building and managing reproducible data processing pipelines. Supports lazy evaluation, caching, and automatic provenance tracking.',
    tags: ['Python', 'Data Pipelines', 'Reproducibility'],
    url: 'https://github.com/',
    overview: `DataForge was born out of frustration with the fragility of scientific data workflows. Files get renamed, parameters change, and suddenly results cannot be reproduced. DataForge addresses this by baking provenance and reproducibility into the pipeline itself.`,
    features: [
      'Lazy evaluation — only recompute what has changed',
      'Automatic provenance tracking with full audit trail',
      'Built-in caching with content-addressable storage',
      'First-class support for parallel and distributed execution',
      'Rich CLI for inspecting pipeline state and history',
    ],
    stack: ['Python', 'SQLite', 'Dask', 'Click', 'pytest'],
    stats: { stars: 312, forks: 48, contributors: 9 },
  },
  {
    id: 'geoviz',
    name: 'GeoViz',
    icon: 'fa-solid fa-earth-asia',
    image: '/images/oss-geoviz.svg',
    short: 'Publication-ready interactive maps for scientists.',
    desc: 'Interactive geospatial visualization library built on top of D3.js and Leaflet. Designed for scientists who need publication-ready maps without steep GIS learning curves.',
    tags: ['JavaScript', 'D3.js', 'Geospatial'],
    url: 'https://github.com/',
    overview: `GeoViz started as a collection of internal scripts for making figures, and grew into a fully-featured library used by researchers across multiple disciplines. The goal is always to go from data to beautiful, informative map with minimal friction.`,
    features: [
      'One-line choropleth, bubble, and flow maps',
      'Automatic projection selection based on data extent',
      'Export to SVG, PNG, or interactive HTML',
      'Integration with standard GeoJSON / GeoTIFF formats',
      'Accessible colour palettes with WCAG contrast checking',
    ],
    stack: ['JavaScript', 'D3.js', 'Leaflet', 'Webpack', 'Vitest'],
    stats: { stars: 198, forks: 31, contributors: 5 },
  },
  {
    id: 'invkit',
    name: 'InvKit',
    icon: 'fa-solid fa-arrows-rotate',
    image: '/images/oss-invkit.svg',
    short: 'Modular toolkit for geophysical inverse problems.',
    desc: 'A modular toolkit for solving geophysical and engineering inverse problems. Includes regularization strategies, sensitivity analysis, and uncertainty quantification.',
    tags: ['Python', 'Inverse Theory', 'NumPy'],
    url: 'https://github.com/',
    overview: `InvKit provides a clean, modular API for building custom inversion workflows. Users compose solvers, regularizers, and objective functions from building blocks, making it easy to prototype and benchmark new methods.`,
    features: [
      'Plug-and-play regularization: Tikhonov, TV, sparse, and custom',
      'Sensitivity matrix computation via automatic differentiation',
      'Built-in uncertainty quantification using MCMC and Laplace approximation',
      'Benchmarking harness for comparing inversion methods',
      'Integration with SimPEG for geophysical forward modelling',
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'JAX', 'Matplotlib'],
    stats: { stars: 87, forks: 14, contributors: 3 },
  },
  {
    id: 'sciedu',
    name: 'SciEdu',
    icon: 'fa-solid fa-graduation-cap',
    image: '/images/oss-sciedu.svg',
    short: 'Browser-based simulations for teaching science.',
    desc: 'Web-based interactive notebooks for teaching scientific computing concepts. Embedded simulations allow students to experiment with parameters in real time.',
    tags: ['React', 'Education', 'WebAssembly'],
    url: 'https://github.com/',
    overview: `SciEdu brings interactive scientific computing to the browser with no installation required. Powered by WebAssembly, students can run Python-based simulations directly in their browser, lowering the barrier to entry dramatically.`,
    features: [
      'Python execution in the browser via Pyodide/WASM',
      'Pre-built modules: numerical methods, statistics, signal processing',
      'Instructor dashboard for tracking student progress',
      'Embeddable widgets for course management systems (Moodle, Canvas)',
      'Offline-capable with service worker support',
    ],
    stack: ['React', 'Pyodide', 'WebAssembly', 'Vite', 'TailwindCSS'],
    stats: { stars: 156, forks: 22, contributors: 6 },
  },
  {
    id: 'opensurvey',
    name: 'OpenSurvey BD',
    icon: 'fa-solid fa-map',
    image: '/images/oss-opensurvey.svg',
    short: 'Open geospatial data portal for Bangladesh.',
    desc: 'An open database and visualization portal for publicly available survey and remote sensing data from Bangladesh. Aimed at researchers, planners, and policymakers.',
    tags: ['Open Data', 'Bangladesh', 'GeoJSON'],
    url: 'https://github.com/',
    overview: `OpenSurvey BD aggregates, cleans, and publishes geospatial datasets for Bangladesh that are technically public but practically inaccessible due to format barriers. The portal makes them easily discoverable and downloadable.`,
    features: [
      'Centralised catalogue of 40+ publicly available datasets',
      'Standardised GeoJSON and GeoTIFF exports for every dataset',
      'Interactive map explorer with filter and download tools',
      'Metadata and data quality flags on each dataset',
      'Regular automated ingestion from official sources',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL/PostGIS', 'React', 'Mapbox GL'],
    stats: { stars: 64, forks: 11, contributors: 4 },
  },
  {
    id: 'repcheck',
    name: 'RepCheck',
    icon: 'fa-solid fa-circle-check',
    image: '/images/oss-repcheck.svg',
    short: 'CI tool that automatically verifies research reproducibility.',
    desc: 'A CI/CD tool that automatically verifies reproducibility of computational research by re-running analyses and comparing outputs against archived results.',
    tags: ['DevOps', 'CI/CD', 'Python'],
    url: 'https://github.com/',
    overview: `RepCheck integrates into GitHub Actions (or any CI system) to automatically verify that a research codebase produces the same outputs as originally reported. It compares numerical results, figures, and statistics within configurable tolerances.`,
    features: [
      'GitHub Actions integration with one-line setup',
      'Numerical tolerance-aware comparison for floating-point results',
      'Figure similarity checking using perceptual hashing',
      'Automatic badge generation for reproducibility status',
      'Report generation with diff view for divergent outputs',
    ],
    stack: ['Python', 'GitHub Actions', 'Docker', 'ImageHash', 'NumPy'],
    stats: { stars: 43, forks: 8, contributors: 2 },
  },
]

/* ── Card ── */
function OssCard({ item, index }) {
  return (
    <Link
      to={`/open-science/${item.id}`}
      className={`oss-card card-enter stagger-${Math.min(index + 1, 6)}`}
    >
      <div className="oss-card-img-wrap">
        <img className="oss-card-img" src={item.image} alt={item.name} />
        <div className="oss-card-badge">
          <i className={item.icon}></i>
          {item.name}
        </div>
        <div className="oss-card-arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="oss-card-body">
        <h3>{item.name}</h3>
        <p>{item.short}</p>
        <div className="research-tags">
          {item.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.85rem' }}>
          {[
            { icon: 'fa-solid fa-star', val: item.stats.stars },
            { icon: 'fa-solid fa-code-branch', val: item.stats.forks },
            { icon: 'fa-solid fa-user', val: item.stats.contributors },
          ].map(s => (
            <span key={s.icon} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <i className={s.icon} style={{ fontSize: '0.7rem', color: 'var(--gold)' }}></i>
              {s.val}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

/* ── Detail ── */
function OssDetail({ item }) {
  const navigate = useNavigate()
  return (
    <section className="page-section">
      <button className="back-btn" onClick={() => navigate('/open-science')}>
        <i className="fa-solid fa-arrow-left"></i> Back to Open Science
      </button>

      <div className="detail-hero">
        <img src={item.image} alt={item.name} />
        <div className="detail-hero-overlay">
          <div className="research-tags" style={{ marginBottom: '0.75rem' }}>
            {item.tags.map(t => <span className="tag" key={t} style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.2)' }}>{t}</span>)}
          </div>
          <h1><i className={item.icon} style={{ marginRight: '0.6rem', color: 'var(--gold-light)' }}></i>{item.name}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.6rem' }}>
            {[
              { icon: 'fa-solid fa-star', val: `${item.stats.stars} stars` },
              { icon: 'fa-solid fa-code-branch', val: `${item.stats.forks} forks` },
              { icon: 'fa-solid fa-user', val: `${item.stats.contributors} contributors` },
            ].map(s => (
              <span key={s.icon} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>
                <i className={s.icon}></i>{s.val}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-content">
        <h2>About</h2>
        <p>{item.overview}</p>

        <h2>Key Features</h2>
        <ul>
          {item.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <h2>Tech Stack</h2>
        <div className="research-tags" style={{ marginBottom: '1.5rem' }}>
          {item.stack.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>

        <h2>Links</h2>
        <p>
          <a href={item.url} target="_blank" rel="noreferrer" className="paper-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.1rem', fontSize: '0.9rem' }}>
            <i className="fa-brands fa-github"></i> View on GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

/* ── Page router ── */
export default function OpenScience() {
  const { id } = useParams()
  if (id) {
    const item = PROJECTS.find(p => p.id === id)
    if (!item) return <section className="page-section"><p>Project not found.</p></section>
    return <OssDetail item={item} />
  }

  return (
    <section className="page-section">
      <h2 className="section-title">Open Science</h2>
      <p className="section-subtitle">Click any project to see full details</p>
      <div className="divider"></div>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '620px' }}>
        All software is released under permissive open-source licenses.
        I believe science progresses faster when knowledge, data, and tools are shared openly.
      </p>
      <div className="oss-grid">
        {PROJECTS.map((p, i) => <OssCard key={p.id} item={p} index={i} />)}
      </div>
    </section>
  )
}
