import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls window to top on every route change.
 * Use inside any component that lives inside <Router>.
 */
export function useScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}
