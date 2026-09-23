import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiStar } from 'react-icons/fi'
import { profile } from '../data'

const langColors = { Dart: '#00B4AB', JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5' }

// GitHub'daki güncel public repoları canlı olarak çeker
export default function GithubRepos() {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) =>
        setRepos(
          data
            .filter((r) => !r.fork && r.name !== profile.githubUser && r.name !== 'deneme')
            .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
            .slice(0, 6),
        ),
      )
      .catch(() => setRepos([]))
  }, [])

  if (repos && repos.length === 0) return null

  return (
    <div className="repos reveal">
      <div className="repos-head">
        <h3>
          <FaGithub /> GitHub'dan son repolar
        </h3>
        <a href={profile.github} target="_blank" rel="noreferrer" className="link">
          Tümünü gör <FiArrowUpRight />
        </a>
      </div>
      <div className="repos-grid">
        {(repos ?? Array.from({ length: 6 }, (_, i) => ({ id: i }))).map((r) =>
          r.name ? (
            <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="repo">
              <span className="repo-name mono">{r.name}</span>
              <span className="repo-desc muted">{r.description || 'Açıklama yok'}</span>
              <span className="repo-meta small muted">
                {r.language && (
                  <span>
                    <i style={{ background: langColors[r.language] ?? 'var(--accent)' }} /> {r.language}
                  </span>
                )}
                <span>
                  <FiStar /> {r.stargazers_count}
                </span>
              </span>
            </a>
          ) : (
            <div key={r.id} className="repo skeleton" />
          ),
        )}
      </div>
    </div>
  )
}
