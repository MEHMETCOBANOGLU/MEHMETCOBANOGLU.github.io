import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="muted small">
          © {new Date().getFullYear()} {profile.name}. React ile <span className="accent">♥</span> geliştirildi.
        </span>
        <a href="#top" className="icon-btn" aria-label="Başa dön">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}
