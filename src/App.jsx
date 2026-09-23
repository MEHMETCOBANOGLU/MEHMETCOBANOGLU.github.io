import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GithubRepos from './components/GithubRepos'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  useReveal()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <div className="container">
          <GithubRepos />
        </div>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
