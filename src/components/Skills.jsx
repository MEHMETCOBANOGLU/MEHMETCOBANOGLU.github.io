import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi'
import { skills } from '../data'
import SectionTitle from './SectionTitle'

const icons = [<FiCode key="c" />, <FiServer key="s" />, <FiDatabase key="d" />, <FiTool key="t" />]
const marquee = ['Flutter', 'Dart', 'React', 'JavaScript', 'TypeScript', 'BLoC', 'Riverpod', 'Firebase', 'REST API', 'Dio', 'SQLite', 'Hive', 'MQTT', 'Git']

export default function Skills() {
  return (
    <section id="yetenekler" className="section">
      <div className="container">
        <SectionTitle index="04" eyebrow="yetenekler" title="Teknoloji yığınım" />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={group.title} className="card skill-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="skill-icon">{icons[i]}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>
              {m} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
