import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const RESEARCH = [
  {
    id: 'operator_learning_NTE',
    title: 'Neural Operator Learning for Neutron Transport Equation',
    short: 'Using neural operator learning (DeepONet) to solve the neutron transport equation in nuclear engineering.',
    tags: ['Neural Operator Learning', 'Physics-Informed Machine Learning', 'Python', 'PyTorch'],
    overview: `The neutron transport equation (NTE) is a fundamental equation in nuclear engineering that describes the behavior of neutrons in a nuclear reactor. Traditional numerical methods for solving the NTE can be computationally expensive and time-consuming, especially for complex geometries and high-dimensional problems. In this research, we explore the use of neural operator learning, specifically DeepONet, to efficiently solve the NTE. By leveraging the power of deep learning, we aim to develop a surrogate model that can accurately predict neutron flux distributions under various conditions, significantly reducing computation time while maintaining high accuracy.`,
    paper: null,
    highlights: [
      'Developing a DeepONet-based surrogate model for the neutron transport equation',
      'Trying to solve the full 3D Boltzmann transport equation in nuclear engineering using physics-informed neural operator learning',
      'Comparing the performance of neural operator learning with traditional numerical methods for solving the NTE',
    ],
    tools: ['Python', 'PyTorch', 'NumPy', 'SciPy', 'Matplotlib'],
    github: 'https://github.com/Shuvo-Hasan/DeepONet-for-Neutron-Transport',
  },
  {
    id: 'CORE_SIM+_Lite',
    title: 'CORE SIM+ Lite',
    short: 'A lightweight, open-source simulation tool for nuclear reactor core analysis.',
    tags: ['Nuclear Engineering', 'Python', 'SciPy', 'Numerical Simulation'],
    overview: `I needed to generate data for training my machine learning models. But data is not easily available in nuclear engineering. So, inspired by the CORE SIM+ paper I am developing a lightweight, open-source simulation tool called CORE SIM+ Lite that can simulate the behavior of nuclear reactor cores under various conditions. This tool allows me to generate synthetic data for training my machine learning models, enabling me to explore the application of AI in nuclear engineering more effectively.`,
    paper: {
    title: 'CORE SIM+',
    url: 'https://www.sciencedirect.com/science/article/pii/S0306454921000256'
  },
    highlights: [
      'Developing a lightweight, open-source simulation tool for nuclear reactor core analysis',
      'Generating synthetic data for training machine learning models in nuclear engineering',
      'Implementing numerical methods for solving the neutron diffusion equation'
    ],
    tools: ['Python', 'SciPy', 'Matplotlib'],
    github: 'https://github.com/Shuvo-Hasan/CORE-SIM-Plus-Lite',
  },
  {
    id: 'operator_learning_RGD',
    title: 'Neural Operator Learning for Boltzmann Transport Equation in Rarefied Gas Dynamics',
    short: 'Using neural operator learning (DeepONet) to solve the Boltzmann transport equation in rarefied gas dynamics.',
    tags: ['Rarefied Gas Dynamics', 'Transport Phenomena', 'Neural Operator Learning', 'Physics-Informed Machine Learning', 'Python', 'PyTorch'],
    overview: `The Boltzmann transport equation (BTE) is a fundamental equation in rarefied gas dynamics that describes the behavior of gas molecules in non-equilibrium conditions. Traditional numerical methods for solving the BTE can be computationally expensive and time-consuming, especially for complex geometries and high-dimensional problems. In this research, we explore the use of neural operator learning, specifically DeepONet, to efficiently solve the BTE. By leveraging the power of deep learning, we aim to develop a surrogate model that can accurately predict gas molecule distributions under various conditions, significantly reducing computation time while maintaining high accuracy.`,
    paper: null,
    highlights: [
      'Developing a DeepONet-based surrogate model for the Boltzmann transport equation in rarefied gas dynamics',
      'Trying to solve the full 3D Boltzmann transport equation in rarefied gas dynamics using physics-informed neural operator learning',
      'Comparing the performance of neural operator learning with traditional numerical methods for solving the BTE',
    ],
    tools: ['Python', 'PyTorch', 'NumPy', 'SciPy', 'Matplotlib'],
    github: null,
  },
  {
    id: 'CHF_Prediction',
    title: 'Critical Heat Flux (CHF) Prediction using Physics-Informed Machine Learning',
    short: 'Predicting critical heat flux (CHF) in nuclear reactors using physics-informed machine learning models.',
    tags: ['Critical Heat Flux', 'Nuclear Engineering', 'Physics-Informed Machine Learning'],
    overview: `Critical heat flux (CHF) is a crucial parameter in nuclear reactor safety, as it represents the point at which a boiling surface can no longer efficiently transfer heat, leading to potential overheating and damage. Accurate prediction of CHF is essential for the safe operation of nuclear reactors. In this research, we explore the use of physics-informed machine learning models to predict CHF using a custom dataset. By incorporating physical laws and constraints into the machine learning framework, we aim to improve the accuracy and reliability of CHF predictions, ultimately enhancing reactor safety and performance.`,
    paper: null,
    highlights: [
      'Developing physics-informed machine learning models for predicting critical heat flux in nuclear reactors',
      'Using a custom dataset to train and validate the machine learning models',
      'Incorporating physical laws and constraints into the machine learning framework to improve prediction accuracy',
    ],
    tools: ['Python', 'PyTorch', 'NumPy', 'SciPy', 'Matplotlib'],
    github: null,
  },
  {
    id: 'ParT_jet_tagging',
    title: 'Particle Transformer (ParT) as a Foundation Model for Jet Tagging',
    short: 'Exploring the feasibility of Particle Transformer (ParT) model as a foundation model for jet tagging in high-energy physics.',
    tags: ['High-Energy Physics', 'Jet Tagging', 'Foundation Model'],
    overview: `Jet tagging is a crucial task in high-energy physics, where the goal is to identify the type of particle that produced a jet of particles in a collider experiment. The Particle Transformer (ParT) model has shown promise as a powerful tool for jet tagging, but its feasibility as a foundation model for this task has not been fully explored. In this research, we investigate the potential of the ParT model to serve as a foundation model for jet tagging, evaluating its performance on datasets.`,
    paper: null,
    highlights: [
      'Investigating the feasibility of Particle Transformer (ParT) model as a foundation model for jet tagging in high-energy physics',
      'Fine-tuned and modified the ParT model for jet tagging tasks',
    ],
    tools: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Shuvo-Hasan/Foundation-Models-for-Jet-Tagging'
  },
  {
    id: 'xAI',
    title: 'Explainable Artificial Intelligence',
    short: 'Investigating the principles and applications of explainable artificial intelligence in scientific domains.',
    tags: ['Artificial Intelligence', 'Explainability', 'Scientific Computing'],
    overview: `Explainable artificial intelligence (XAI) is a field that aims to make machine learning models more transparent and interpretable. In this research, we explore the application of XAI techniques in scientific domains, focusing on improving the understanding and trustworthiness of AI-driven predictions.`,
    paper: null,
    highlights: [
      'Integrating explainable artificial intelligence (XAI) techniques into scientific machine learning workflows to ensure the AI models are giving correct predictions.',
    ],
    tools: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib'],
    github: null,
  },
]

/* ── Card component ── */
function ResearchCard({ item, index }) {
  return (
    <Link
      to={`/research/${item.id}`}
      className={`research-card card-enter stagger-${Math.min(index + 1, 6)}`}
    >
      <div className="research-card-body">
        <h3>{item.title}</h3>
        <p>{item.short}</p>

        <div className="research-tags">
          {item.tags.map(t => (
            <span className="tag" key={t}>{t}</span>
          ))}
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
      <button
        className="back-btn"
        onClick={() => navigate('/research')}
      >
        <i className="fa-solid fa-arrow-left"></i> Back to Research
      </button>

      <div className="detail-content">
        <h1 style={{ marginBottom: '1rem' }}>{item.title}</h1>

        <div
          className="research-tags"
          style={{ marginBottom: '2rem' }}
        >
          {item.tags.map(t => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <h2>Overview</h2>
        <p>{item.overview}</p>

        {item.paper && (
          <p style={{ marginTop: '1rem' }}>
            <strong>Inspired by:</strong>{' '}
            <a
              href={item.paper.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.paper.title}
            </a>
          </p>
        )}

        <h2>Key Contributions</h2>
        <ul>
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <h2>Tools & Technologies</h2>
        <div
          className="research-tags"
          style={{ marginBottom: '2rem' }}
        >
          {item.tools.map(t => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        {item.github && (
          <>
            <h2>Source Code</h2>

            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              <i className="fa-brands fa-github"></i>
              View GitHub Repository
            </a>
          </>
        )}
      </div>
    </section>
  )
}

/* ── Page router ── */
export default function Research() {
  const { id } = useParams()

  if (id) {
    const item = RESEARCH.find(r => r.id === id)

    if (!item) {
      return (
        <section className="page-section">
          <p>Research topic not found.</p>
        </section>
      )
    }

    return <ResearchDetail item={item} />
  }

  return (
    <section className="page-section">
      <h2 className="section-title">Research</h2>
      <p className="section-subtitle">
        Click any topic to explore in depth
      </p>

      <div className="divider"></div>

      <div className="research-grid">
        {RESEARCH.map((r, i) => (
          <ResearchCard
            key={r.id}
            item={r}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}