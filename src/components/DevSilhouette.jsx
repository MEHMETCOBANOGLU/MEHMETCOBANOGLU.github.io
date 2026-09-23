import { useEffect, useRef } from 'react'

// Fotoğraf yerine kullanılan, temaya uyumlu geliştirici silueti.
// Sayfa en üstteyken masada oturur; aşağı kaydırdıkça masadan uzaklaşır.
export default function DevSilhouette() {
  const ref = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.35)))
      ref.current?.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <svg ref={ref} className="dev-avatar" viewBox="0 0 400 400" role="img" aria-label="Masada laptop başında oturan bir yazılım geliştirici silueti">
      <defs>
        <radialGradient id="av-bg" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor="var(--avatar-bg-1)" />
          <stop offset="100%" stopColor="var(--avatar-bg-2)" />
        </radialGradient>
        <radialGradient id="av-screen-glow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="av-face" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
          <stop offset="60%" stopColor="var(--sil-2)" />
          <stop offset="100%" stopColor="var(--sil)" />
        </linearGradient>
        <linearGradient id="av-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="35%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="65%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="av-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--lid-1)" />
          <stop offset="100%" stopColor="var(--lid-2)" />
        </linearGradient>
        <clipPath id="av-clip">
          <circle cx="200" cy="200" r="200" />
        </clipPath>
      </defs>

      <g clipPath="url(#av-clip)">
        <rect width="400" height="400" fill="url(#av-bg)" />

        {/* Arka plandaki kod satırları */}
        <g className="av-lines" fill="var(--accent)">
          <rect x="44" y="92" width="58" height="5" rx="2.5" opacity="0.35" />
          <rect x="44" y="106" width="34" height="5" rx="2.5" opacity="0.2" />
          <rect x="56" y="120" width="46" height="5" rx="2.5" opacity="0.25" />
          <rect x="296" y="212" width="62" height="5" rx="2.5" opacity="0.3" />
          <rect x="310" y="226" width="40" height="5" rx="2.5" opacity="0.2" />
          <rect x="296" y="240" width="52" height="5" rx="2.5" opacity="0.25" />
        </g>

        {/* Yüzen kod sembolleri */}
        <g className="av-glyphs" fontFamily="'JetBrains Mono', monospace" fontWeight="600" fill="var(--accent)">
          <text x="300" y="104" fontSize="26" opacity="0.7">{'{ }'}</text>
          <text x="40" y="222" fontSize="20" opacity="0.5">=&gt;</text>
          <text x="318" y="170" fontSize="15" opacity="0.4">01</text>
          <text x="70" y="176" fontSize="16" opacity="0.35">;</text>
        </g>

        {/* Geliştirici + koltuk: kaydırmayla masadan uzaklaşan grup */}
        <g className="av-person">
          {/* Oyuncu koltuğu */}
          <rect x="136" y="150" width="128" height="200" rx="30" fill="var(--sil-2)" />
          <rect x="152" y="168" width="6" height="90" rx="3" fill="var(--accent)" opacity="0.6" />
          <rect x="242" y="168" width="6" height="90" rx="3" fill="var(--accent)" opacity="0.6" />

          {/* Gövde */}
          <path d="M72 420 C76 322 122 274 200 268 C278 274 324 322 328 420 Z" fill="var(--sil)" />
          <path d="M72 420 C76 322 122 274 200 268 C278 274 324 322 328 420" fill="none" stroke="url(#av-rim)" strokeWidth="3" />
          <rect x="188" y="228" width="24" height="44" rx="8" fill="var(--sil)" />

          {/* Klavyeye uzanan kollar */}
          <g fill="none" stroke="var(--sil)" strokeWidth="22" strokeLinecap="round">
            <path d="M104 332 C112 306 128 300 150 318" />
            <path d="M296 332 C288 306 272 300 250 318" />
          </g>

          {/* Baş, yüz ve saç */}
          <ellipse cx="200" cy="200" rx="32" ry="40" fill="var(--sil)" />
          <ellipse className="av-face-lit" cx="200" cy="200" rx="32" ry="40" fill="url(#av-face)" />
          <path
            d="M167 198 C162 160 180 148 201 148 C223 148 239 161 233 198 C229 180 217 172 200 173 C185 173 173 181 167 198 Z"
            fill="var(--sil)"
          />
          <ellipse cx="200" cy="200" rx="32" ry="40" fill="none" stroke="url(#av-rim)" strokeWidth="2" />
          <path d="M167 198 C162 160 180 148 201 148 C223 148 239 161 233 198" fill="none" stroke="url(#av-rim)" strokeWidth="2" />

          {/* Kulaklık */}
          <path d="M165 204 C155 116 245 116 235 204" fill="none" stroke="var(--sil-2)" strokeWidth="7" strokeLinecap="round" />
          <rect x="156" y="186" width="17" height="34" rx="8" fill="var(--sil-2)" />
          <rect x="227" y="186" width="17" height="34" rx="8" fill="var(--sil-2)" />
          <rect x="159" y="196" width="3.5" height="14" rx="1.75" fill="var(--accent)" className="av-led" />
          <rect x="237.5" y="196" width="3.5" height="14" rx="1.75" fill="var(--accent)" className="av-led" />
        </g>

        {/* Ekran ışığı */}
        <ellipse className="av-glow" cx="200" cy="300" rx="170" ry="110" fill="url(#av-screen-glow)" />

        {/* Masa */}
        <path d="M-10 330 L410 330 L410 352 L-10 352 Z" fill="var(--desk-top)" />
        <path d="M-10 330 L410 330" stroke="var(--accent)" strokeWidth="2" opacity="0.7" />
        <rect x="-10" y="352" width="420" height="60" fill="var(--desk-front)" />

        {/* Kitaplar */}
        <rect x="58" y="318" width="56" height="12" rx="2" fill="var(--sil-2)" />
        <rect x="64" y="307" width="46" height="11" rx="2" fill="var(--lid-1)" />
        <rect x="60" y="297" width="50" height="10" rx="2" fill="var(--sil-2)" />
        <rect x="64" y="299" width="3" height="6" fill="var(--accent)" />
        <rect x="68" y="309" width="3" height="7" fill="var(--accent)" opacity="0.6" />

        {/* Kupa ve buhar */}
        <g className="av-steam" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.55">
          <path d="M302 292 c-5 -8 5 -12 0 -20" />
          <path d="M313 294 c-5 -8 5 -12 0 -20" />
        </g>
        <rect x="294" y="300" width="28" height="30" rx="5" fill="var(--sil-2)" />
        <path d="M322 307 h5 a6 6 0 0 1 0 12 h-5" fill="none" stroke="var(--sil-2)" strokeWidth="4" />
        <rect x="294" y="306" width="28" height="3" fill="var(--accent)" opacity="0.7" />

        {/* Laptop */}
        <path d="M136 250 L264 250 L270 330 L130 330 Z" fill="url(#av-lid)" />
        <path d="M136 250 L264 250" stroke="var(--accent)" strokeWidth="2" opacity="0.8" />
        <rect x="118" y="327" width="164" height="6" rx="3" fill="var(--lid-1)" />
        <text
          x="200"
          y="300"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="26"
          fontWeight="700"
          fill="var(--accent)"
          className="av-logo"
        >
          &lt;/&gt;
        </text>
      </g>
    </svg>
  )
}
