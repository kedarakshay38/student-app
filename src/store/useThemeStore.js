import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import oceanThemeUrl from 'primereact/resources/themes/lara-light-blue/theme.css?url'
import midnightThemeUrl from 'primereact/resources/themes/lara-dark-indigo/theme.css?url'

const themeUrls = {
  ocean: oceanThemeUrl,
  midnight: midnightThemeUrl,
}

function applyTheme(theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.setAttribute('data-bs-theme', theme === 'midnight' ? 'dark' : 'light')

  const link = document.getElementById('prime-theme')
  if (link) link.href = themeUrls[theme]
}

// Called once before React renders so there is no flash
export function initTheme() {
  const stored = JSON.parse(localStorage.getItem('student-hub-theme') || '{}')
  applyTheme(stored?.state?.theme ?? 'ocean')
}

const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: 'ocean',
      toggleTheme: () => {
        const next = get().theme === 'ocean' ? 'midnight' : 'ocean'
        applyTheme(next)
        set({ theme: next })
      },
    }),
    { name: 'student-hub-theme' }
  )
)

export default useThemeStore
