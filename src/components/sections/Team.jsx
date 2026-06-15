import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Animate from '@/components/ui/Animate'

export const TEAM_DATA = [
  {
    id: 'ceo', slug: 'albert-nyabuto',
    name: 'Albert Junior Nyabuto', role: 'Co-Founder & CEO',
    photo: '/team/albert.jpg',
    shortBio: 'Co-founder of Altomik Technologies with a background in ICT systems, network infrastructure, and full-stack software development.',
    fullBio: `Albert Junior Nyabuto is the Co-Founder and CEO of Altomik Technologies, bringing a solid foundation in ICT systems, network infrastructure, and software development to the company he built from the ground up.

With a Bachelor of Science in Computer Science from the University of Eldoret and hands-on experience spanning hospital IT environments, enterprise networking, and bespoke software development, Albert has developed a rare combination of practical technical depth and entrepreneurial drive.

Before founding Altomik, Albert honed his skills across diverse environments — from deploying and securing network infrastructure supporting 800+ concurrent users at a private enterprise, to delivering ICT support in the mission-critical setting of Kenyatta University Teaching, Referral & Research Hospital (KUTRRH). His freelance work as an ICT and software consultant gave him a clear view of the gap in quality, reliable technology services available to East African SMEs — the gap that Altomik was built to close.

Albert leads the technical delivery of web applications, API integrations, and IT infrastructure projects across Altomik's service lines. He builds the tools that power the company and the solutions that serve its clients.`,
    expertise: ['Software Development', 'ICT Systems & Infrastructure', 'Network Administration', 'Web Applications', 'IT Consulting'],
    education: [
      { degree: 'BSc, Computer Science', school: 'University of Eldoret, Kenya (2022)' },
      { degree: 'Introduction to Cybersecurity', school: 'Cisco Networking Academy (2022)' },
      { degree: 'Cisco Networking Essentials', school: 'In Progress — Expected 2026' },
    ],
    initials: 'AJ', color: 'from-navy to-blue-900', accentColor: 'text-blue-400',
    social: { linkedin: 'https://linkedin.com/in/albert-nyabuto-045jnr', github: 'https://github.com/dev-bertoz', email: 'nyabutojnr@gmail.com' },
    featured: true,
  },
  {
    id: 'cto', slug: 'cto',
    name: 'Aisha Kamau', role: 'CTO & Co-Founder',
    shortBio: 'Software architect and cloud specialist with a passion for building robust, scalable systems that solve real problems.',
    fullBio: `Aisha is the technical backbone of Altomik Technologies. A software architect by training and a builder by instinct, she oversees all technical delivery, architecture decisions, and engineering standards across the company.

With 8+ years in software engineering and cloud infrastructure, Aisha has architected systems handling millions of transactions for financial services, logistics, and retail clients. She has deep expertise in cloud-native architecture on AWS and Azure, microservices, and DevSecOps practices.

Aisha holds a BSc in Software Engineering from Jomo Kenyatta University and is a certified AWS Solutions Architect. She actively mentors young women entering tech through several Nairobi-based coding bootcamps.`,
    expertise: ['Cloud Architecture', 'Software Engineering', 'DevSecOps', 'AWS & Azure', 'System Design'],
    education: [
      { degree: 'AWS Certified Solutions Architect', school: 'Amazon Web Services' },
      { degree: 'BSc, Software Engineering', school: 'Jomo Kenyatta University' },
    ],
    initials: 'AK', color: 'from-emerald-900 to-navy', accentColor: 'text-emerald-400',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'aisha@altomik.com' },
    featured: true,
  },
  {
    id: 'cso', slug: 'cso',
    name: 'Kevin Oduya', role: 'Chief Security Officer',
    shortBio: 'Cybersecurity expert and ethical hacker protecting East African businesses from an ever-evolving threat landscape.',
    fullBio: `Kevin leads Altomik's cybersecurity practice, bringing a rare combination of offensive and defensive security expertise. A certified ethical hacker and penetration tester, he has helped dozens of organisations identify and close critical vulnerabilities before malicious actors could exploit them.

Kevin spent five years working in cybersecurity for a major pan-African bank before joining Altomik to bring enterprise-level security expertise to SMEs — businesses that are increasingly targeted but often lack the resources to defend themselves.

He holds certifications including CEH, CompTIA Security+, and OSCP.`,
    expertise: ['Penetration Testing', 'Security Architecture', 'Incident Response', 'Compliance (ISO 27001)', 'Security Training'],
    education: [
      { degree: 'OSCP — Offensive Security Certified Professional', school: 'Offensive Security' },
      { degree: 'BSc, Information Security', school: 'Multimedia University of Kenya' },
    ],
    initials: 'KO', color: 'from-red-900 to-navy', accentColor: 'text-red-400',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'kevin@altomik.com' },
    featured: true,
  },
  {
    id: 'cmo', slug: 'cmo',
    name: 'Fatuma Wanjiku', role: 'Head of Growth & Partnerships',
    shortBio: "Growth strategist and partnerships lead driving Altomik's market expansion across East Africa.",
    fullBio: `Fatuma drives Altomik's commercial growth and strategic partnerships. With a background in B2B sales and marketing at several leading technology companies in the region, she has a proven track record of building client relationships that last.

She joined Altomik as a co-founder because she saw firsthand how many East African SMEs were being underserved by the existing IT market — either paying too much for too little, or being sold products rather than solutions.

Fatuma holds a BSc in Business Information Technology from Strathmore University and an Executive Certificate in Digital Marketing from the African Management Institute.`,
    expertise: ['B2B Sales Strategy', 'Partnership Development', 'Market Expansion', 'Digital Marketing', 'Client Success'],
    education: [
      { degree: 'Executive Certificate, Digital Marketing', school: 'African Management Institute' },
      { degree: 'BSc, Business Information Technology', school: 'Strathmore University, Nairobi' },
    ],
    initials: 'FW', color: 'from-purple-900 to-navy', accentColor: 'text-purple-400',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'fatuma@altomik.com' },
    featured: false,
  },
]

function TeamCard({ member, index }) {
  return (
    <Animate variant="fade-up" delay={index * 100}>
      <Link to={`/team/${member.slug}`}
        className="group block bg-navy-700 rounded-2xl border border-white/8 overflow-hidden hover:border-gold-500/40 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1 h-full"
      >
        {/* Avatar */}
        <div className={`bg-gradient-to-br ${member.color} h-48 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="relative w-24 h-24 rounded-full border-2 border-gold-500/40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="relative w-24 h-24 rounded-full border-2 border-gold-500/40 bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-extrabold text-3xl text-white">{member.initials}</span>
            </div>
          )}
          {member.featured && (
            <div className="absolute top-3 right-3 bg-gold-500/20 border border-gold-500/40 text-gold-400 text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">
              Founder
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-heading font-bold text-white text-lg mb-0.5 group-hover:text-gold-400 transition-colors">
            {member.name}
          </h3>
          <p className="text-gold-500 font-heading font-semibold text-xs tracking-wider uppercase mb-3">
            {member.role}
          </p>
          <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">
            {member.shortBio}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {member.expertise.slice(0, 3).map((e) => (
              <span key={e} className="bg-white/6 border border-white/10 text-white/50 text-xs px-2.5 py-1 rounded-full">{e}</span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/8">
            <div className="flex gap-2">
              {member.social.linkedin && (
                <span onClick={(e) => { e.preventDefault(); window.open(member.social.linkedin, '_blank') }}
                  className="w-7 h-7 rounded border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-500 transition-colors cursor-pointer">
                  <Linkedin size={12} />
                </span>
              )}
              {member.social.twitter && (
                <span onClick={(e) => { e.preventDefault(); window.open(member.social.twitter, '_blank') }}
                  className="w-7 h-7 rounded border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-500 transition-colors cursor-pointer">
                  <Twitter size={12} />
                </span>
              )}
              {member.social.github && (
                <span onClick={(e) => { e.preventDefault(); window.open(member.social.github, '_blank') }}
                  className="w-7 h-7 rounded border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-500 transition-colors cursor-pointer">
                  <Github size={12} />
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-gold-500 