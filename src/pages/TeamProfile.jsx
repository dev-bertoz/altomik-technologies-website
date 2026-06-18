import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Linkedin, Twitter, Github, Mail, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { TEAM_DATA } from '@/components/sections/Team'
import CTABanner from '@/components/sections/CTABanner'
import { useTheme } from '@/context/ThemeContext'

const FacebookIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const TikTokIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
  </svg>
)

export default function TeamProfile() {
  const { dark } = useTheme()
  const { slug } = useParams()
  const member = TEAM_DATA.find((m) => m.slug === slug)
  if (!member) return <Navigate to="/about" replace />
  const others = TEAM_DATA.filter((m) => m.slug !== slug)

  const socialBtn = `flex items-center gap-2 border font-heading font-medium text-sm px-3 py-1.5 rounded-lg transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white/60' : 'border-slate-200 text-slate-500'}`

  return (
    <>
      <div className={`${dark ? 'bg-navy border-white/8' : 'bg-white border-slate-200'} pt-20 pb-0 px-4 sm:px-6 lg:px-8 border-b`}>
        <div className="max-w-7xl mx-auto py-4">
          <Link to="/about" className={`inline-flex items-center gap-2 text-sm font-heading font-medium transition-colors hover:text-gold-500 ${dark ? 'text-white/50' : 'text-slate-400'}`}>
            <ArrowLeft size={14} /> Back to About Us
          </Link>
        </div>
      </div>

      <section className={`${dark ? 'bg-navy' : 'bg-white'} pb-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start pt-10">
            <div className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br ${member.color} border border-gold-500/25 flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-[0.08]"
                style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              {member.photo
                ? <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                : <span className="font-heading font-extrabold text-5xl text-always-white relative z-10">{member.initials}</span>
              }
            </div>

            <div className="flex-1">
              {member.featured && (
                <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-500 font-heading font-bold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Co-Founder
                </div>
              )}
              <h1 className={`font-heading font-extrabold text-3xl md:text-4xl tracking-tight mb-2 ${dark ? 'text-white' : 'text-navy'}`}>{member.name}</h1>
              <p className={`font-heading font-semibold text-sm tracking-wider uppercase ${member.accentColor} mb-4`}>{member.role}</p>
              <p className={`text-base leading-relaxed max-w-2xl mb-6 ${dark ? 'text-white/55' : 'text-slate-500'}`}>{member.shortBio}</p>
              <div className="flex items-center gap-3 flex-wrap">
                {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noreferrer" className={socialBtn}><Linkedin size={14} /> LinkedIn</a>}
                {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noreferrer" className={socialBtn}><Twitter size={14} /> X</a>}
                {member.social.facebook && <a href={member.social.facebook} target="_blank" rel="noreferrer" className={socialBtn}><FacebookIcon size={14} /> Facebook</a>}
                {member.social.tiktok && <a href={member.social.tiktok} target="_blank" rel="noreferrer" className={socialBtn}><TikTokIcon size={14} /> TikTok</a>}
                {member.social.github && <a href={member.social.github} target="_blank" rel="noreferrer" className={socialBtn}><Github size={14} /> GitHub</a>}
                {member.social.email && <a href={`mailto:${member.social.email}`} className={socialBtn}><Mail size={14} /> Email</a>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[#0a0f1a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className={`font-heading font-bold text-xl mb-5 pb-3 border-b ${dark ? 'text-white border-white/10' : 'text-navy border-slate-200'}`}>
                About {member.name.split(' ')[0]}
              </h2>
              <div className="space-y-4">
                {member.fullBio.split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className={`leading-relaxed ${dark ? 'text-white/55' : 'text-slate-500'}`}>{para.trim()}</p>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              <div className={`rounded-2xl p-6 border ${dark ? 'bg-navy-700 border-white/8' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={15} className="text-gold-500" />
                  <h3 className={`font-heading font-bold text-sm tracking-wide uppercase ${dark ? 'text-white' : 'text-navy'}`}>Areas of Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((e) => (
                    <span key={e} className={`border text-xs px-3 py-1.5 rounded-full font-body ${dark ? 'bg-white/6 border-white/10 text-white/55' : 'bg-white border-slate-200 text-slate-500'}`}>{e}</span>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl p-6 border ${dark ? 'bg-navy-700 border-white/8' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={15} className="text-gold-500" />
                  <h3 className={`font-heading font-bold text-sm tracking-wide uppercase ${dark ? 'text-white' : 'text-navy'}`}>Education & Certifications</h3>
                </div>
                <div className="space-y-4">
                  {member.education.map((e, i) => (
                    <div key={i} className="border-l-2 border-gold-500/40 pl-3">
                      <p className={`font-heading font-bold text-sm ${dark ? 'text-white' : 'text-navy'}`}>{e.degree}</p>
                      <p className={`text-xs mt-0.5 ${dark ? 'text-white/35' : 'text-slate-400'}`}>{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl p-6 border border-gold-500/20 ${dark ? 'bg-navy-700' : 'bg-slate-50'}`}>
                <h3 className={`font-heading font-bold text-sm mb-2 ${dark ? 'text-white' : 'text-navy'}`}>Work with {member.name.split(' ')[0]}</h3>
                <p className={`text-xs leading-relaxed mb-4 ${dark ? 'text-white/45' : 'text-slate-500'}`}>Interested in working with our team? Let's start a conversation.</p>
                <Link to="/contact" className="btn-primary text-xs w-full justify-center inline-flex items-center gap-2">
                  Get in touch <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-14 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-navy' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h3 className={`font-heading font-bold text-lg mb-7 ${dark ? 'text-white' : 'text-navy'}`}>Meet the rest of the team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.slice(0, 3).map((m) => (
              <Link key={m.id} to={`/team/${m.slug}`}
                className={`group flex items-center gap-4 border rounded-xl p-4 transition-all duration-200 ${dark ? 'bg-navy-700 border-white/8 hover:border-gold-500/30 hover:bg-navy-600' : 'bg-white border-slate-200 hover:border-gold-500/30'}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-heading font-extrabold text-always-white text-sm">{m.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-heading font-bold text-sm group-hover:text-gold-500 transition-colors truncate ${dark ? 'text-white' : 'text-navy'}`}>{m.name}</p>
                  <p className={`text-xs truncate ${dark ? 'text-white/35' : 'text-slate-400'}`}>{m.role}</p>
                </div>
                <ArrowRight size={14} className={`group-hover:text-gold-500 transition-colors flex-shrink-0 ${dark ? 'text-white/20' : 'text-slate-300'}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
