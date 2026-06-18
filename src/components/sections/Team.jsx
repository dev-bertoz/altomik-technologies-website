import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Animate from "@/components/ui/Animate";
import { useTheme } from "@/context/ThemeContext";

const FacebookIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
  </svg>
);

export const TEAM_DATA = [
  {
    id: "ceo",
    slug: "albert-nyabuto",
    name: "Albert Nyabuto",
    role: "Co-Founder & CEO",
    photo: null,
    shortBio:
      "CEO and Co-Founder of Altomik Technologies — on a mission to make world-class technology accessible to every business across East Africa.",
    fullBio: `Albert Nyabuto is the CEO and Co-Founder of Altomik Technologies, a company built on a single conviction: that every business in East Africa deserves access to technology that actually works for them.

Albert is a builder and a believer. He founded Altomik not just to deliver IT services, but to change the relationship between East African businesses and technology — to make it a genuine engine of growth rather than a source of frustration. His vision is a region where ambitious businesses are never held back by the tools they use.

Under Albert's leadership, Altomik is building something bigger than a service company. It is a technology partner — one that invests in its clients' success, grows with them, and holds itself accountable to real outcomes. He believes that precision, reliability, and trust are not optional extras; they are the standard every client deserves.

Albert leads with purpose. Every product Altomik ships, every client problem it solves, and every team member it develops is part of a larger mission — to demonstrate that world-class technology is not a privilege reserved for large corporations, but a right available to any business willing to pursue it.`,
    expertise: [
      "Technology Leadership",
      "Business Strategy",
      "Client Success",
      "IT Consulting",
      "Frontend Development",
      "Network Architecture & Administration",
    ],
    education: [
      {
        degree: "BSc, Computer Science",
        school: "University of Eldoret, Kenya (2022)",
      },
      {
        degree: "Introduction to Cybersecurity",
        school: "Cisco Networking Academy (2022)",
      },
      {
        degree: "Cisco CCNA",
        school: "In Progress — Expected 2026",
      },
    ],
    initials: "AN",
    color: "from-navy to-blue-900",
    accentColor: "text-blue-400",
    social: {
      linkedin: "https://linkedin.com/in/albert-nyabuto-045jnr",
      twitter: "https://x.com/altomiktech",
      facebook: "https://facebook.com/altomiktechnologies",
      tiktok: "https://tiktok.com/@altomiktech",
      github: "https://github.com/dev-bertoz",
      email: "ceo@altomik.co.ke",
    },
    featured: true,
  },
  {
    id: "dev",
    slug: "michael-obiero",
    name: "Michael Obiero",
    role: "Developer & Co-Founder",
    shortBio:
      "Full-stack developer and co-founder driving Altomik's software engineering practice — building fast, reliable, and scalable solutions.",
    fullBio: `Michael Obiero is a Co-Founder and the lead developer at Altomik Technologies. With a strong command of modern web and mobile development stacks, Michael is responsible for architecting and delivering the software products that power Altomik's clients.

From custom web applications and APIs to ERP systems and mobile apps, Michael brings both technical depth and a pragmatic delivery mindset to every project. He has hands-on experience with React, Node.js, and various local API integrations including M-Pesa, KRA eTIMS, and Bulk SMS — ensuring every product is ready for the Kenyan market from day one.

Michael co-founded Altomik because he believed East African businesses deserved access to world-class software built with them in mind, not imported solutions that don't fit the local context.`,
    expertise: [
      "Full-Stack Development",
      "Web Applications",
      "Mobile Apps",
      "API Integrations",
      "System Architecture",
    ],
    education: [
      {
        degree: "BSc, Computer Science",
        school: "University of Embu, Kenya (2023)",
      },
      {
        degree: "AWS Certified Solutions Architect",
        school: "Amazon Web Services",
      },
    ],
    initials: "MO",
    color: "from-emerald-900 to-navy",
    accentColor: "text-emerald-400",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      facebook: "https://facebook.com/altomiktechnologies",
      tiktok: "https://tiktok.com/@altomiktech",
      github: "https://github.com",
      email: "michael.obiero@altomik.co.ke",
    },
    featured: true,
  },
  {
    id: "design",
    slug: "thomas-nyambosero",
    name: "Thomas Nyambosero",
    role: "Graphics & Cybersecurity, Co-Founder",
    shortBio:
      "Co-founder heading Altomik's creative and security divisions — crafting compelling brand identities and keeping client systems safe.",
    fullBio: `Thomas Nyambosero is a Co-Founder at Altomik Technologies, uniquely straddling two critical disciplines: graphic design and cybersecurity. His dual expertise makes him an invaluable part of the founding team — ensuring that what Altomik builds not only looks world-class but is protected from the ground up.

On the creative side, Thomas leads brand identity work, print design, and visual communications for clients — from logo design and company profiles to vehicle branding and marketing collateral. His eye for detail and understanding of brand communication gives Altomik's clients a visual presence that stands out.

On the security side, Thomas brings certified expertise in ethical hacking, penetration testing, and security architecture. He helps clients assess their vulnerabilities, train their teams, and implement robust defences against an increasingly hostile digital landscape.

Thomas co-founded Altomik to build an agency that could serve clients completely — beautiful design backed by rock-solid security.`,
    expertise: [
      "Graphic Design & Branding",
      "Print & Visual Communication",
      "Cybersecurity",
      "Penetration Testing",
      "Security Training",
    ],
    education: [
      {
        degree: "BSc, Information Security",
        school: "Jomo Kenyatta University of Agriculture and Technology (2022)",
      },
      {
        degree: "Certificate, Graphic Design",
        school: "Nairobi Institute of Technology",
      },
    ],
    initials: "TN",
    color: "from-red-900 to-navy",
    accentColor: "text-red-400",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      facebook: "https://facebook.com/altomiktechnologies",
      tiktok: "https://tiktok.com/@altomiktech",
      github: "https://github.com",
      email: "thomas.nyambosero@altomik.co.ke",
    },
    featured: true,
  },
  //   {
  //     id: "cmo",
  //     slug: "cmo",
  //     name: "Fatuma Wanjiku",
  //     role: "Head of Growth & Partnerships",
  //     shortBio:
  //       "Growth strategist and partnerships lead driving Altomik's market expansion across East Africa.",
  //     fullBio: `Fatuma drives Altomik's commercial growth and strategic partnerships. With a background in B2B sales and marketing at several leading technology companies in the region, she has a proven track record of building client relationships that last.

  // She joined Altomik as a co-founder because she saw firsthand how many East African SMEs were being underserved by the existing IT market — either paying too much for too little, or being sold products rather than solutions.

  // Fatuma holds a BSc in Business Information Technology from Strathmore University and an Executive Certificate in Digital Marketing from the African Management Institute.`,
  //     expertise: [
  //       "B2B Sales Strategy",
  //       "Partnership Development",
  //       "Market Expansion",
  //       "Digital Marketing",
  //       "Client Success",
  //     ],
  //     education: [
  //       {
  //         degree: "Executive Certificate, Digital Marketing",
  //         school: "African Management Institute",
  //       },
  //       {
  //         degree: "BSc, Business Information Technology",
  //         school: "Strathmore University, Nairobi",
  //       },
  //     ],
  //     initials: "FW",
  //     color: "from-purple-900 to-navy",
  //     accentColor: "text-purple-400",
  //     social: {
  //       linkedin: "https://linkedin.com",
  //       twitter: "https://twitter.com",
  //       email: "fatuma@altomik.com",
  //     },
  //     featured: false,
  //   },
];

function TeamCard({ member, index, dark }) {
  return (
    <Animate variant="fade-up" delay={index * 100}>
      <Link
        to={`/team/${member.slug}`}
        className={`group block rounded-2xl border overflow-hidden hover:border-gold-500/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full ${dark ? "bg-navy-700 border-white/8 hover:shadow-black/40" : "bg-white border-slate-200 hover:shadow-slate-200"}`}
      >
        <div
          className={`bg-gradient-to-br ${member.color} h-48 flex items-center justify-center relative overflow-hidden`}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="relative w-24 h-24 rounded-full border-2 border-gold-500/40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="relative w-24 h-24 rounded-full border-2 border-gold-500/40 bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-extrabold text-3xl text-always-white">
                {member.initials}
              </span>
            </div>
          )}
          {member.featured && (
            <div className="absolute top-3 right-3 bg-gold-500/20 border border-gold-500/40 text-gold-400 text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">
              Founder
            </div>
          )}
        </div>

        <div className="p-6">
          <h3
            className={`font-heading font-bold text-lg mb-0.5 group-hover:text-gold-500 transition-colors ${dark ? "text-white" : "text-navy"}`}
          >
            {member.name}
          </h3>
          <p className="text-gold-500 font-heading font-semibold text-xs tracking-wider uppercase mb-3">
            {member.role}
          </p>
          <p
            className={`text-sm leading-relaxed mb-4 line-clamp-2 ${dark ? "text-white/45" : "text-slate-500"}`}
          >
            {member.shortBio}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {member.expertise.slice(0, 3).map((e) => (
              <span
                key={e}
                className={`border text-xs px-2.5 py-1 rounded-full ${dark ? "bg-white/6 border-white/10 text-white/50" : "bg-slate-100 border-slate-200 text-slate-500"}`}
              >
                {e}
              </span>
            ))}
          </div>
          <div
            className={`flex items-center justify-between pt-4 border-t ${dark ? "border-white/8" : "border-slate-100"}`}
          >
            <div className="flex gap-2">
              {member.social.linkedin && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(member.social.linkedin, "_blank");
                  }}
                  className={`w-7 h-7 rounded border flex items-center justify-center transition-colors cursor-pointer hover:border-gold-500 hover:text-gold-500 ${dark ? "border-white/15 text-white/40" : "border-slate-200 text-slate-400"}`}
                >
                  <Linkedin size={12} />
                </span>
              )}
              {member.social.twitter && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(member.social.twitter, "_blank");
                  }}
                  className={`w-7 h-7 rounded border flex items-center justify-center transition-colors cursor-pointer hover:border-gold-500 hover:text-gold-500 ${dark ? "border-white/15 text-white/40" : "border-slate-200 text-slate-400"}`}
                >
                  <Twitter size={12} />
                </span>
              )}
              {member.social.facebook && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(member.social.facebook, "_blank");
                  }}
                  className={`w-7 h-7 rounded border flex items-center justify-center transition-colors cursor-pointer hover:border-gold-500 hover:text-gold-500 ${dark ? "border-white/15 text-white/40" : "border-slate-200 text-slate-400"}`}
                >
                  <FacebookIcon size={12} />
                </span>
              )}
              {member.social.tiktok && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(member.social.tiktok, "_blank");
                  }}
                  className={`w-7 h-7 rounded border flex items-center justify-center transition-colors cursor-pointer hover:border-gold-500 hover:text-gold-500 ${dark ? "border-white/15 text-white/40" : "border-slate-200 text-slate-400"}`}
                >
                  <TikTokIcon size={12} />
                </span>
              )}
              {member.social.github && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(member.social.github, "_blank");
                  }}
                  className={`w-7 h-7 rounded border flex items-center justify-center transition-colors cursor-pointer hover:border-gold-500 hover:text-gold-500 ${dark ? "border-white/15 text-white/40" : "border-slate-200 text-slate-400"}`}
                >
                  <Github size={12} />
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-gold-500 font-heading font-bold text-xs group-hover:gap-2 transition-all">
              View profile <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </Animate>
  );
}

export default function Team({ limit }) {
  const { dark } = useTheme();
  const members = limit ? TEAM_DATA.slice(0, limit) : TEAM_DATA;

  return (
    <SectionWrapper className={dark ? "bg-navy" : "bg-white"} id="team">
      <div className="text-center mb-14">
        <Animate variant="fade-up">
          <p className="section-tag flex justify-center">
            The people behind the work
          </p>
          <h2
            className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? "text-white" : "text-navy"}`}
          >
            Meet our founders & team
          </h2>
          <p
            className={`text-base leading-relaxed max-w-xl mx-auto ${dark ? "text-white/50" : "text-slate-500"}`}
          >
            A founding team that combines deep technical expertise, business
            acumen, and a shared passion for elevating East African businesses
            through technology.
          </p>
        </Animate>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, i) => (
          <TeamCard key={member.id} member={member} index={i} dark={dark} />
        ))}
      </div>

      {limit && TEAM_DATA.length > limit && (
        <div className="text-center mt-10">
          <Link
            to="/about#team"
            className={`inline-flex items-center gap-2 border font-heading font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-gold-500 hover:text-gold-500 ${dark ? "border-white/20 text-white" : "border-slate-300 text-navy"}`}
          >
            Meet the full team <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
}
