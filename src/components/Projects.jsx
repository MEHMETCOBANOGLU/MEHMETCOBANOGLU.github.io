import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa'
import { FiArrowUpRight, FiFolder } from 'react-icons/fi'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

const linkIcons = { apple: <FaApple />, play: <FaGooglePlay />, github: <FaGithub /> }

export default function Projects() {
  return (
    <section id="projeler" className="section">
      <div className="container">
        <SectionTitle index="03" eyebrow="projeler" title="Geliştirdiğim bazı projeler" />
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.name} className={`card project reveal ${p.featured ? 'featured' : ''}`}>
              <div className="project-top">
                <FiFolder className="project-icon" />
                {p.featured && <span className="chip mono">Yayında</span>}
              </div>
              <h3>{p.name}</h3>
              <p className="project-sub mono">{p.subtitle}</p>
              <p className="muted">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link">
                      {linkIcons[l.type]} {l.label} <FiArrowUpRight />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
