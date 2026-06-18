import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function NotFound() {
  const { dark } = useTheme()
  return (
    <section className={`${dark ? 'bg-navy' : 'bg-white'} min-h-screen flex items-center justify-center px-4 text-center`}>
      <div>
        <div className="font-heading font-extrabold text-8xl text-gold-500/20 mb-4">404</div>
        <h1 className={`font-heading font-extrabold text-3xl mb-3 ${dark ? 'text-white' : 'text-navy'}`}>Page not found</h1>
        <p className={`text-base mb-8 max-w-sm mx-auto ${dark ? 'text-white/50' : 'text-slate-500'}`}>
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  )
}
