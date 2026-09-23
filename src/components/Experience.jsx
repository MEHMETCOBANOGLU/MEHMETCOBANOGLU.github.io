import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import { experience } from '../data'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="deneyim" className="section">
      <div className="container">
        <SectionTitle index="02" eyebrow="deneyim" title="Nerelerde çalıştım?" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className={`timeline-item reveal ${job.current ? 'current' : ''}`}>
              <span className="timeline-dot">
                <FiBriefcase />
              </span>
              <div className="card job">
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="accent job-company">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <span className="chip mono">
                      {job.current && <span className="pulse" />}
                      {job.date}
                    </span>
                    <span className="muted small">
                      <FiMapPin /> {job.location}
                    </span>
                  </div>
                </div>
                <ul className="job-points">
                  {job.points.map((p) => (
                    <li key={p.slice(0, 24)}>{p}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
