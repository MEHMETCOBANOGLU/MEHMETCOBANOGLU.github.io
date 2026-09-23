import { useEffect, useState } from 'react'

export function useTypewriter(words, { typeMs = 80, deleteMs = 40, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs
    if (!deleting && text === word) delay = holdMs

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}
