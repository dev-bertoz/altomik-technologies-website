import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import clsx from 'clsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { scrollDir, scrolled } = useScrollDirection()
  const isHome = pathname === '/'

  useEffect(() => setMobileOpen(false), [pathname])

  // Hide when scrolling down (but not on hero = top of page)
  // Show when scrolling up OR near the top
  const hidden = scrollDir === 'down' && scrolled && !mobileOpen

  const bgClass = scrolled
    ? 'bg-navy/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg shadow-black/20'
    : isHome
      ? 'bg-transparent'
      : 'bg-navy border-b border-gold-500/10'

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        bgClass,
        hidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="w-9 h-9" />
            <div className="font-heading font-bold text-sm tracking-wide text-white">
              ALTOMIK <span className="text-gold-500">TECHNOLOGIES</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'font-body text-sm font-medium tracking-wide transition-colors duration-200',
                    isActive ? 'text-gold-500' : 'text-white/70 hover:text-white'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-xs tracking-widest uppercase">
              Get In Touch
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx(
        'md:hidden bg-navy border-t border-gold-500/20 overflow-hidden transition-all duration-300',
        mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                clsx(
                  'font-body text-sm font-medium px-3 py-2.5 rounded transition-colors',
                  isActive ? 'text-gold-500 bg-gold-500/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mt-2 justify-center text-xs tracking-widest uppercase">
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
