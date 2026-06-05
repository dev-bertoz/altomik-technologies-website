import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      if (Math.abs(currentY - lastY) > 4) {
        setScrollDir(currentY > lastY ? 'down' : 'up')
        lastY = currentY
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollDir, scrolled }
}
