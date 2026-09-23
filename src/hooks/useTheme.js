import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#faf7f5')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // depolama kapalıysa tema yalnızca bu oturumda geçerli olur
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}
