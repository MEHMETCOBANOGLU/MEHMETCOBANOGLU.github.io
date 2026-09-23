import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const links = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#deneyim', label: 'Deneyim' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#yetenekler', label: 'Yetenekler' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const current = links.findLast(({ href }) => {
        const el = document.querySelector(href)
        return el && el.getBoundingClientRect().top < window.innerHeight * 0.4
      })
      setActive(current?.href ?? '')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">MÇ</span>
          <span className="logo-text">cobanoglu<span className="accent">.dev</span></span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href ? 'active' : ''} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Temayı değiştir">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Menü">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
