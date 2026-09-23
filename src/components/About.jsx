import { profile, stats, education, languages } from '../data'
import SectionTitle from './SectionTitle'
import { FiBookOpen, FiGlobe } from 'react-icons/fi'

export default function About() {
  return (
    <section id="hakkimda" className="section">
      <div className="container">
        <SectionTitle index="01" eyebrow="hakkımda" title="Kod yazarken kullanıcıyı düşünürüm." />
        <div className="about-grid">
          <div className="about-text reveal">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong className="gradient-text">{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-side">
            <div className="card reveal">
              <div className="card-head">
                <FiBookOpen className="accent" /> Eğitim
              </div>
              <h3>{education.school}</h3>
              <p className="muted">{education.degree}</p>
              <span className="chip mono">{education.date}</span>
            </div>
            <div className="card reveal">
              <div className="card-head">
                <FiGlobe className="accent" /> Diller
              </div>
              {languages.map((l) => (
                <div key={l.name} className="lang">
                  <div className="lang-row">
                    <span>{l.name}</span>
                    <span className="muted mono">{l.level}</span>
                  </div>
                  <div className="bar">
                    <span style={{ width: `${l.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
