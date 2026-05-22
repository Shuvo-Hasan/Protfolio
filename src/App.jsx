import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Papers from './pages/Papers.jsx'
import OpenScience from './pages/OpenScience.jsx'
import Contact from './pages/Contact.jsx'

function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { to: '/',             label: 'Home',         icon: 'fa-solid fa-house' },
    { to: '/about',        label: 'About',        icon: 'fa-solid fa-user' },
    { to: '/research',     label: 'Research',     icon: 'fa-solid fa-flask' },
    { to: '/papers',       label: 'Papers',       icon: 'fa-solid fa-file-lines' },
    { to: '/open-science', label: 'Open Science', icon: 'fa-solid fa-code-branch' },
    { to: '/contact',      label: 'Contact',      icon: 'fa-solid fa-envelope' },
  ]

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="sidebar-avatar">SH</div>
          <h1>Mehedi Hasan</h1>
          <p className="tagline">Researcher · Developer</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={onClose}
            >
              <i className={item.icon}></i>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" title="X / Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://scholar.google.com/" target="_blank" rel="noreferrer" title="Google Scholar">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </aside>
    </>
  )
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-wrapper">
      <header className="mobile-header">
        <h2>Shuvo Hasan</h2>
        <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
      </header>

      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="main-content">
        <Routes>
          <Route path="/"                       element={<Home />} />
          <Route path="/about"                  element={<About />} />
          <Route path="/research"               element={<Research />} />
          <Route path="/research/:id"           element={<Research />} />
          <Route path="/papers"                 element={<Papers />} />
          <Route path="/open-science"           element={<OpenScience />} />
          <Route path="/open-science/:id"       element={<OpenScience />} />
          <Route path="/contact"                element={<Contact />} />
        </Routes>

        <footer className="site-footer">
          <p>© 2025 Shuvo Hasan · All rights reserved.</p>
          <div className="footer-links">
            <a href="#/contact">Contact</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}
