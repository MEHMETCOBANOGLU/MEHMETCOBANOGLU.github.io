import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import DevSilhouette from './DevSilhouette'

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="grid-lines" />
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <span className="badge">
            <span className="pulse" /> Yeni fırsatlara açığım
          </span>
          <h1>
            Merhaba, ben <br />
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role mono">
            <span className="accent">&gt;</span> {role}
            <span className="caret" />
          </p>
          <p className="hero-desc">
            Flutter ve React ile hızlı, ölçeklenebilir ve kullanıcı odaklı mobil &amp; web uygulamaları geliştiriyorum.
          </p>
          <div className="hero-cta">
            <a href="#projeler" className="btn btn-primary">
              Projelerim <FiArrowRight />
            </a>
            <a href={profile.cv} download className="btn btn-ghost">
              <FiDownload /> CV İndir
            </a>
          </div>
          <div className="hero-meta">
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <span className="muted location">
              <FiMapPin /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <div className="photo-ring" />
            <DevSilhouette />
          </div>
          <div className="float-card fc-1">
            <span className="fc-dot" /> Flutter · Dart
          </div>
          <div className="float-card fc-2">
            <span className="fc-dot" /> React · JS
          </div>
          <div className="code-card mono">
            <span className="kw">const</span> dev = {'{'}
            <br />
            &nbsp;&nbsp;focus: <span className="str">'mobile &amp; web'</span>,
            <br />
            &nbsp;&nbsp;coffee: <span className="num">Infinity</span>
            <br />
            {'}'}
          </div>
        </div>
      </div>

      <a href="#hakkimda" className="scroll-hint" aria-label="Aşağı kaydır">
        <span />
      </a>
    </section>
  )
}
