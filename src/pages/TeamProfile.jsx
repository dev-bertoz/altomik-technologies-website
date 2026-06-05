import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Linkedin, Twitter, Mail, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { TEAM_DATA } from '@/components/sections/Team'
import CTABanner from '@/components/sections/CTABanner'

export default function TeamProfile() {
  const { slug } = useParams()
  const member = TEAM_DATA.find((m) => m.slug === slug)

  if (!member) return <Navigate to="/about" replace />

  const others = TEAM_DATA.filter((m) => m.slug !== slug)

  return (
    <>
      {/* Back nav */}
      <div className="bg-navy pt-20 pb-0 px-4 sm:px-6 lg:px-8 border-b border-white/8">
        <div className="max-w-7xl mx-auto py-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold-500 text-sm font-heading font-medium transition-colors"
          >
            <ArrowLeft size={14} /> Back to About Us
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start pt-10">

            {/* Avatar */}
            <div className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br ${member.color} border border-gold-500/25 flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <span className="font-heading font-extrabold text-5xl text-white relative z-10">
                {member.initials}
              </span>
              {/* Replace with: <img src={member.photo} alt={member.name} className="w-full h-full object-cover" /> */}
            </div>

            {/* Info */}
            <div className="flex-1">
              {member.featured && (
                <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-500 font-heading font-bold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Co-Founder
                </div>
              )}
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-2">
                {member.name}
              </h1>
              <p className={`font-heading font-semibold text-sm tracking-wider uppercase ${member.accentColor} mb-4`}>
                {member.role}
              </p>
              <p className="text-white/55 text-base leading-relaxed max-w-2xl mb-6">
                {member.shortBio}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 border border-white/20 text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all px-3 py-1.5 rounded-lg text-sm font-heading font-medium">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 border border-white/20 text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all px-3 py-1.5 rounded-lg text-sm font-heading font-medium">
                    <Twitter size={14} /> Twitter
                  </a>
                )}
                {member.social.email && (
                  <a href={`mailto:${member.social.email}`}
                    className="flex items-center gap-2 border border-white/20 text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all px-3 py-1.5 rounded-lg text-sm font-heading font-medium">
                    <Mail size={14} /> Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-navy text-xl mb-5 pb-3 border-b border-gray-100">
                About {member.name.split(' ')[0]}
              </h2>
              <div className="space-y-4">
                {member.fullBio.split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-7">

              {/* Expertise */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={15} className="text-gold-500" />
                  <h3 className="font-heading font-bold text-navy text-sm tracking-wide uppercase">Areas of Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((e) => (
                    <span key={e} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full font-body">
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={15} className="text-gold-500" />
                  <h3 className="font-heading font-bold text-navy text-sm tracking-wide uppercase">Education & Certifications</h3>
                </div>
                <div className="space-y-4">
                  {member.education.map((e, i) => (
                    <div key={i} className="border-l-2 border-gold-500/40 pl-3">
                      <p className="font-heading font-bold text-navy text-sm">{e.degree}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-navy rounded-2xl p-6 border border-gold-500/15">
                <h3 className="font-heading font-bold text-white text-sm mb-2">Work with {member.name.split(' ')[0]}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  Interested in working with our team? Let's start a conversation.
                </p>
                <Link to="/contact" className="btn-primary text-xs w-full justify-center">
                  Get in touch <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other team members */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-heading font-bold text-navy text-lg mb-7">
            Meet the rest of the team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.slice(0, 3).map((m) => (
              <Link
                key={m.id}
                to={`/team/${m.slug}`}
                className="group flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-gold-500/30 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-heading font-extrabold text-white text-sm">{m.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-navy text-sm group-hover:text-gold-600 transition-colors truncate">{m.name}</p>
                  <p className="text-gray-400 text-xs truncate">{m.role}</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-gold-500 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
