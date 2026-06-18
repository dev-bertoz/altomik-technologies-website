import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import Logo from '@/components/ui/Logo'
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react'

const SERVICES = [
  'IT Consulting & Support',
  'Software Development',
  'Web Design & UI/UX',
  'Cybersecurity',
  'Graphic Design & Branding',
  'Print & Branded Merchandise',
]

const COMPANY = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const { dark } = useTheme()
  return (
    <footer className={dark ? 'bg-navy text-white' : 'bg-slate-900 text-white'}>
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <Logo className="h-10 w-10" variant="dark" />
              <div className="font-heading font-bold text-sm tracking-wide">
                ALTOMIK <span className="text-gold-500">TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Full-service IT company delivering precision technology solutions for ambitious businesses across East Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/altomik-technologies"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/15 flex items-center justify-center text-white/50 hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://twitter.com/altomiktech"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/15 flex items-center justify-center text-white/50 hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://github.com/altomik-technologies"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/15 flex items-center justify-center text-white/50 hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">Nairobi, Kenya<br />East Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <a
                  href="mailto:info@altomik.co.ke"
                  className="text-sm text-white/50 hover:text-gold-500 transition-colors"
                >
                  info@altomik.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-sm text-white/50 hover:text-gold-500 transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Altomik Technologies LTD. All rights reserved.
          </p>
          <p className="text-white/30 text-xs italic">
            Precision in Every Solution.
          </p>
             </div>
      </div>
    </footer>
  )
}
