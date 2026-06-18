import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useTheme } from '@/context/ThemeContext'
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
  const { dark, toggle } = useTheme()
  const isHome = pathname === '/'

  useEffect(() => setMobileOpen(false), [pathname])

  const hidden = scrollDir === 'down' && scrolled && !mobileOpen

  const bgClass = scrolled
    ? dark
      ? 'bg-[#0a0f1a]/95 backdrop-blur-md border-b border-gold-500/15 shadow-lg shadow-black/40'
      : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
    : isHome
      ? 'bg-transparent'
      : dark
        ? 'bg-navy border-b border-gold-500/10'
        : 'bg-white border-b border-slate-200'

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
            <Logo className="h-10 w-10" variant="dark" />
            <div className={clsx('font-heading font-bold text-sm tracking-wide', dark ? 'text-white' : 'text-navy')}>
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
                    dark
                      ? isActive ? 'text-gold-500' : 'text-white/70 hover:text-white'
                      : isActive ? 'text-gold-600' : 'text-slate-600 hover:text-slate-900'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className={clsx(
                'w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200',
                dark
                  ? 'border-white/15 text-white/60 hover:border-gold-500 hover:text-gold-500'
                  : 'border-slate-200 text-slate-500 hover:border-gold-500 hover:text-gold-500'
              )}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link to="/contact" className="btn-primary text-xs tracking-widest uppercase">
              Get In Touch
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clsx(
              'md:hidden p-2 rounded transition-colors',
              dark ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx(
        'md:hidden overflow-hidden transition-all duration-300',
        dark ? 'bg-[#0a0f1a] border-t border-white/8' : 'bg-white border-t border-slate-200',
        mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                clsx(
                  'font-body text-sm font-medium tracking-wide py-2.5 px-3 rounded-lg transition-colors duration-200',
                  dark
                    ? isActive ? 'text-gold-500 bg-gold-500/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                    : isActive ? 'text-gold-600 bg-gold-500/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-3 mt-2 border-t flex items-center gap-3 border-white/8">
            <button
              onClick={toggle}
              className={clsx(
                'w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200',
                dark
                  ? 'border-white/15 text-white/60 hover:border-gold-500 hover:text-gold-500'
                  : 'border-slate-200 text-slate-500 hover:border-gold-500 hover:text-gold-500'
              )}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link to="/contact" className="btn-primary text-xs tracking-widest uppercase flex-1 justify-center">
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
