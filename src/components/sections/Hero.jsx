import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    tag: "Full-Service IT Partner",
    headline: ["Technology that", "elevates", "your business"],
    highlightIndex: 1,
    sub: "Altomik Technologies delivers end-to-end IT solutions for ambitious SMEs across East Africa — from software development to cybersecurity and AI.",
    cta: { label: "Start a Conversation", to: "/contact" },
    ctaSecondary: { label: "Explore Services", to: "/services" },
    accent: "from-gold-500/10 via-transparent to-transparent",
    stat: { num: "East Africa", label: "Our Market" },
  },
  {
    id: 2,
    tag: "Software Development",
    headline: ["Custom software", "built to scale", "with your growth"],
    highlightIndex: 1,
    sub: "From web and mobile applications to ERP systems and SaaS platforms, we build software that solves real business problems and grows with your organization.",
    cta: { label: "Software Solutions", to: "/services/software" },
    ctaSecondary: { label: "Request a Quote", to: "/contact" },
    accent: "from-blue-500/10 via-transparent to-transparent",
    stat: { num: "KES 150K+", label: "Projects From" },
  },
  {
    id: 3,
    tag: "Cybersecurity",
    headline: ["Protect your", "business from", "evolving threats"],
    highlightIndex: 1,
    sub: "We help businesses stay secure with security assessments, penetration testing, endpoint protection, compliance support, and employee awareness training.",
    cta: { label: "Secure Your Business", to: "/services/cybersecurity" },
    ctaSecondary: { label: "Free Consultation", to: "/contact" },
    accent: "from-emerald-500/10 via-transparent to-transparent",
    stat: { num: "24/7", label: "Protection" },
  },
  {
    id: 4,
    tag: "AI & Cloud Solutions",
    headline: ["Intelligence and", "cloud power", "for every team"],
    highlightIndex: 0,
    sub: "Leverage AI, cloud infrastructure, and modern automation to improve efficiency, reduce costs, and unlock new growth opportunities.",
    cta: { label: "Explore AI & Cloud", to: "/services/ai" },
    ctaSecondary: { label: "Talk to an Expert", to: "/contact" },
    accent: "from-purple-500/10 via-transparent to-transparent",
    stat: { num: "AWS / Azure", label: "Cloud Ready" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setTimeout(next, 6000);
    return () => clearTimeout(timer);
  }, [current, next]);

  const slide = SLIDES[current];

  return (
    <section className="relative min-h-[90vh] bg-navy flex items-center justify-center overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-28">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent Glow */}
      <div
        key={`glow-${current}`}
        className={`absolute inset-0 bg-gradient-to-br ${slide.accent} transition-all duration-1000`}
      />

      {/* Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag */}
          <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-500 font-heading font-semibold text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8"
            style={{ animation: "fadeSlideUp 0.5s ease forwards" }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            {slide.tag}
          </div>

          {/* Heading */}
          <h1
            key={`heading-${current}`}
            className="font-heading font-extrabold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8"
            style={{ animation: "fadeSlideUp 0.6s ease forwards" }}
          >
            {slide.headline.map((line, i) => (
              <span key={i} className="block">
                {i === slide.highlightIndex ? (
                  <span className="text-gold-500">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            key={`sub-${current}`}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-12"
            style={{ animation: "fadeSlideUp 0.7s ease forwards" }}
          >
            {slide.sub}
          </p>

          {/* CTA Buttons */}
          <div
            key={`cta-${current}`}
            className="flex flex-wrap justify-center gap-4 mb-16"
            style={{ animation: "fadeSlideUp 0.8s ease forwards" }}
          >
            <Link
              to={slide.cta.to}
              className="btn-primary inline-flex items-center gap-2"
            >
              {slide.cta.label}
              <ArrowRight size={16} />
            </Link>

            <Link to={slide.ctaSecondary.to} className="btn-outline-light">
              {slide.ctaSecondary.label}
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap justify-center gap-12 lg:gap-20"
            style={{ animation: "fadeSlideUp 0.9s ease forwards" }}
          >
            {[
              { num: "5+", label: "Service Areas" },
              slide.stat,
              { num: "100%", label: "Client Focused" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-heading font-extrabold text-3xl lg:text-4xl text-gold-500">
                  {item.num}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {/* Side Navigation Arrows */}
          <div className="hidden lg:block">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <div
          key={`progress-${current}`}
          className="h-full bg-gold-500"
          style={{
            animation: "progress 6s linear forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
