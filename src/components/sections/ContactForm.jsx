import { useState } from 'react'
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react'

const SERVICES = [
  'IT Consulting & Support',
  'Software Development & SaaS',
  'Cybersecurity',
  'Cloud Services',
  'AI & Data Solutions',
  'General Enquiry',
]

const INITIAL_STATE = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // In production, wire this to your backend / form service (Formspree, Resend, etc.)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-5">
          <CheckCircle size={28} className="text-gold-500" />
        </div>
        <h3 className="font-heading font-bold text-navy text-xl mb-2">Message received!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setForm(INITIAL_STATE); setSubmitted(false) }}
          className="mt-6 text-gold-500 font-heading font-bold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
      {/* Info */}
      <div>
        <p className="section-tag">Get in touch</p>
        <h2 className="section-title">Let's build something together</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          Whether you need IT support today, a custom software solution, or a full technology partner — we'd love to hear from you. First consultation is always free.
        </p>

        <div className="space-y-5">
          {[
            { Icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', sub: 'Serving East Africa & Beyond' },
            { Icon: Mail, label: 'Email', value: 'hello@altomik.com', href: 'mailto:hello@altomik.com' },
            { Icon: Phone, label: 'Phone', value: '+254 700 000 000', href: 'tel:+254700000000' },
          ].map(({ Icon, label, value, sub, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-gold-500" />
              </div>
              <div>
                <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-navy font-medium hover:text-gold-500 transition-colors">{value}</a>
                ) : (
                  <p className="text-navy font-medium">{value}</p>
                )}
                {sub && <p className="text-gray-400 text-xs mt-0.5">{sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full px-4 py-3 rounded-lg border text-sm font-body text-navy placeholder-gray-300 outline-none transition-colors ${
                errors.name
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-200 focus:border-gold-500'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={`w-full px-4 py-3 rounded-lg border text-sm font-body text-navy placeholder-gray-300 outline-none transition-colors ${
                errors.email
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-200 focus:border-gold-500'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-1.5">
            Company (Optional)
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 text-sm font-body text-navy placeholder-gray-300 outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-1.5">
            Service Interest
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 text-sm font-body text-navy outline-none transition-colors bg-white"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your business and what you're looking to solve..."
            className={`w-full px-4 py-3 rounded-lg border text-sm font-body text-navy placeholder-gray-300 outline-none transition-colors resize-none ${
              errors.message
                ? 'border-red-400 focus:border-red-500'
                : 'border-gray-200 focus:border-gold-500'
            }`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-navy text-white font-heading font-bold text-sm tracking-wider py-4 rounded-lg hover:bg-navy/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Send Message <Send size={15} />
        </button>

        <p className="text-center text-gray-400 text-xs">
          We respond within 24 hours on business days.
        </p>
      </form>
    </div>
  )
}
