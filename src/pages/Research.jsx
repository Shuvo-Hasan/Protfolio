import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const RESEARCH = [
  {
    id: 'inverse-problems',
    image: '/images/research-inverse.svg',
    title: 'Computational Methods for Inverse Problems',
    short: 'Efficient numerical algorithms for solving inverse problems at scale.',
    desc: 'Developing efficient numerical algorithms for solving inverse problems in science and engineering. Focus on scalability, stability, and practical applicability to large-scale datasets.',
    tags: ['Inverse Theory', 'Numerical Methods', 'Optimization', 'Python'],
    overview: `Inverse problems are at the heart of scientific discovery — given observed data, we want to recover the underlying model or parameters that generated it. My work focuses on making these computations fast, stable, and scalable.`,
    highlights: [
      'Developed a regularization framework that reduces computation time by 10x on benchmark datasets',
      'Implemented gradient-free optimization strategies for non-smooth objective functions',
      'Contributed inversion modules to the open-source SimPEG ecosystem',
      'Applied methods to groundwater characterization and mineral exploration problems',
    ],
    tools: ['Python', 'NumPy', 'SciPy', 'SimPEG', 'MATLAB'],
    publications: 2,
  },
  {
    id: 'data-science',
    image: '/images/research-datascience.svg',
    title: 'Data Science for Scientific Discovery',
    short: 'ML and statistical pipelines that turn raw data into reproducible insight.',
    desc: 'Applying machine learning and statistical methods to accelerate scientific discovery. Building pipelines that connect raw data to interpretable, reproducible results.',
    tags: ['Machine Learning', 'Data Analysis', 'Reproducibility', 'Open Data'],
    overview: `Modern science generates data at unprecedented rates. My research focuses on building the infrastructure and methodologies needed to extract reliable, interpretable insights from large, noisy scientific datasets.`,
    highlights: [
      'Designed end-to-end ML pipelines with automatic provenance tracking',
      'Benchmarked reproducibility across 15+ published computational workflows',
      'Developed open datasets used by researchers in 10+ countries',
      'Authored tutorials on best practices for scientific data management',
    ],
    tools: ['Python', 'Pandas', 'Scikit-learn', 'DVC', 'Jupyter'],
    publications: 3,
  },
  {
    id: 'open-source',
    image: '/images/research-opensource.svg',
    title: 'Open Source Scientific Software',
    short: 'Building community tools that lower the barrier to complex computing.',
    desc: 'Designing and maintaining open-source libraries that lower the barrier to entry for complex scientific computing. Emphasis on documentation, testing, and community-driven development.',
    tags: ['Open Source', 'Software Design', 'Documentation', 'Python'],
    overview: `Open-source software is the backbone of modern scientific computing. My work in this area goes beyond writing code — I focus on community building, documentation, and sustainable maintenance practices.`,
    highlights: [
      'Maintained 3 open-source packages with a combined 500+ GitHub stars',
      'Established CI/CD pipelines and testing standards adopted by collaborators',
      'Ran workshops teaching open-source contribution practices to 100+ students',
      'Co-authored a guide on FAIR software principles for scientific Python projects',
    ],
    tools: ['Python', 'Git', 'GitHub Actions', 'pytest', 'Sphinx'],
    publications: 2,
  },
  {
    id: 'remote-sensing',
    image: '/images/research-remote.svg',
    title: 'Remote Sensing & Geospatial Analysis',
    short: 'Automated workflows for extracting knowledge from satellite data.',
    desc: 'Processing and interpreting large geospatial datasets from satellite and airborne sensors. Developing automated workflows for extracting meaningful information from complex spatial data.',
    tags: ['Remote Sensing', 'GIS', 'Geospatial', 'Image Processing'],
    overview: `Satellites and airborne sensors now generate terabytes of geospatial data daily. My research builds automated, scalable pipelines to process, analyse, and visualise this data for scientific and policy applications.`,
    highlights: [
      'Built a land-use classification system for Bangladesh achieving 92% accuracy',
      'Developed an open portal for publicly available airborne geophysics data',
      'Collaborated with government agencies for flood mapping applications',
      'Published a benchmark dataset for agricultural land monitoring in South Asia',
    ],
    tools: ['Python', 'GDAL', 'Rasterio', 'GeoPandas', 'Google Earth Engine'],
    publications: 2,
  },
  {
    id: 'science-education',
    image: '/images/research-education.svg',
    title: 'Science Education & Outreach',
    short: 'Interactive tools that make advanced science accessible to everyone.',
    desc: 'Creating interactive, web-based educational tools and resources that make advanced scientific concepts accessible. Targeting students and practitioners in developing regions.',
    tags: ['Education', 'Outreach', 'Web Apps', 'Interactive Tools'],
    overview: `Quality science education should not be a privilege of the wealthy. My outreach work creates freely available, interactive resources that bring modern scientific concepts to students everywhere.`,
    highlights: [
      'Built 5 browser-based simulations for teaching numerical methods, used in 3 universities',
      'Ran coding bootcamps for 200+ undergraduate students in Dhaka',
      'Produced a YouTube series on scientific Python with 10,000+ views',
      'Mentored 12 students who went on to pursue graduate research',
    ],
    tools: ['React', 'D3.js', 'WebAssembly', 'Python', 'Jupyter'],
    publications: 1,
  },
]

/* ── Card component ── */
function ResearchCard({ item, index }) {
  return (
    <Link
      to={`/research/${item.id}`}
      className={`research-card card-enter stagger-${Math.min(index + 1, 6)}`}
    >
      <div className="research-card-img-wrap">
        <img className="research-card-img" src={item.image} alt={item.title} />
        <div className="research-card-arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="research-card-body">
        <h3>{item.title}</h3>
        <p>{item.short}</p>
        <div className="research-tags">
          {item.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </Link>
  )
}

/* ── Detail component ── */
function ResearchDetail({ item }) {
  const navigate = useNavigate()
  return (
    <section className="page-section">
      <button className="back-btn" onClick={() => navigate('/research')}>
        <i className="fa-solid fa-arrow-left"></i> Back to Research
      </button>

      <div className="detail-hero">
        <img src={item.image} alt={item.title} />
        <div className="detail-hero-overlay">
          <div className="research-tags" style={{ marginBottom: '0.75rem' }}>
            {item.tags.map(t => <span className="tag" key={t} style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.2)' }}>{t}</span>)}
          </div>
          <h1>{item.title}</h1>
        </div>
      </div>

      <div className="detail-content">
        <h2>Overview</h2>
        <p>{item.overview}</p>

        <h2>Key Contributions</h2>
        <ul>
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <h2>Tools & Technologies</h2>
        <div className="research-tags" style={{ marginBottom: '1.5rem' }}>
          {item.tools.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>

        <h2>Publications</h2>
        <p>
          This area has resulted in <strong>{item.publications}</strong> peer-reviewed publication{item.publications !== 1 ? 's' : ''}.{' '}
          <Link to="/papers">View all papers →</Link>
        </p>
      </div>
    </section>
  )
}

/* ── Page router ── */
export default function Research() {
  const { id } = useParams()
  if (id) {
    const item = RESEARCH.find(r => r.id === id)
    if (!item) return <section className="page-section"><p>Research topic not found.</p></section>
    return <ResearchDetail item={item} />
  }

  return (
    <section className="page-section">
      <h2 className="section-title">Research</h2>
      <p className="section-subtitle">Click any topic to explore in depth</p>
      <div className="divider"></div>
      <div className="research-grid">
        {RESEARCH.map((r, i) => <ResearchCard key={r.id} item={r} index={i} />)}
      </div>
    </section>
  )
}
