import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiCheck, FiCopy, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { profile } from '../data'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // pano erişimi yoksa sessizce geç
    }
  }

  // Backend olmadığı için mesaj, kullanıcının e-posta istemcisinde açılır
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio üzerinden mesaj – ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const channels = [
    { icon: <FiMail />, label: 'E-posta', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <FiPhone />, label: 'Telefon', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', value: '/in/-mehmet-cobanoglu', href: profile.linkedin },
    { icon: <FaGithub />, label: 'GitHub', value: `@${profile.githubUser}`, href: profile.github },
  ]

  return (
    <section id="iletisim" className="section">
      <div className="container">
        <SectionTitle index="05" eyebrow="iletişim" title="Birlikte bir şeyler geliştirelim." />
        <div className="contact-grid">
          <div className="reveal">
            <p className="lead">
              Yeni bir proje, iş fırsatı ya da sadece merhaba demek için — mesajınızı bekliyorum. Genellikle 24 saat içinde dönüş yaparım.
            </p>
            <button className="email-big" onClick={copyEmail}>
              <span>{profile.email}</span>
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
            {copied && <span className="small accent">Kopyalandı!</span>}
            <div className="channels">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="channel">
                  <span className="channel-icon">{c.icon}</span>
                  <span>
                    <span className="small muted">{c.label}</span>
                    <br />
                    {c.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="card contact-form reveal" onSubmit={onSubmit}>
            <label>
              Adınız
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ad Soyad" />
            </label>
            <label>
              Mesajınız
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Merhaba Mehmet, ..."
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Gönder <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
