import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import Animate from "@/components/ui/Animate";
import { useTheme } from "@/context/ThemeContext";

export const PARTNERS = [
  { id: 1, name: "Savanna Logistics", abbr: "SL", sector: "Logistics" },
  { id: 2, name: "Meridian Microfinance", abbr: "MM", sector: "Finance" },
  { id: 3, name: "Coastal Trade Hub", abbr: "CTH", sector: "Trade" },
  { id: 4, name: "AgriConnect Kenya", abbr: "ACK", sector: "Agriculture" },
  { id: 5, name: "Nairobi Digital", abbr: "ND", sector: "Media" },
  { id: 6, name: "SafariTech Group", abbr: "STG", sector: "Technology" },
  { id: 7, name: "Pamoja Sacco", abbr: "PS", sector: "Finance" },
  { id: 8, name: "EastPay Solutions", abbr: "EP", sector: "Fintech" },
];

const STATS = [
  { target: 20, suffix: "+", label: "Active Clients" },
  { target: 5, suffix: "", label: "Service Lines" },
  { target: 3, suffix: "", label: "Countries Served" },
  { target: 98, suffix: "%", label: "Client Retention" },
];

function StatCard({ target, suffix, label, inView, dark }) {
  const count = useCountUp(target, 2000, inView);
  return (
    <div
      className={`rounded-xl border py-6 px-4 text-center transition-colors hover:border-gold-500/30 ${dark ? "bg-navy-700 border-white/8" : "bg-slate-50 border-slate-200"}`}
    >
      <div className="font-heading font-extrabold text-2xl text-gold-500 mb-1">
        {count}
        {suffix}
      </div>
      <div className={`text-sm ${dark ? "text-white/45" : "text-slate-500"}`}>
        {label}
      </div>
    </div>
  );
}

export default function Partners() {
  const { dark } = useTheme();
  const { ref, inView } = useInView();
  const fade = dark ? "#0a0f1a" : "#ffffff";

  return (
    <section
      className={`${dark ? "bg-[#0a0f1a]" : "bg-white"} py-16 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        <Animate variant="fade-up">
          <p
            className={`text-center font-heading font-bold text-xs tracking-widest uppercase mb-10 ${dark ? "text-white/30" : "text-slate-400"}`}
          >
            Trusted by businesses across East Africa
          </p>
        </Animate>

        <div className="relative mb-14">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fade}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fade}, transparent)`,
            }}
          />
          <div className="overflow-hidden">
            <div
              className="flex gap-4 animate-marquee"
              style={{ width: "max-content" }}
            >
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div
                  key={`${p.id}-${i}`}
                  className={`flex-shrink-0 flex items-center gap-3 border rounded-xl px-5 py-3.5 transition-all duration-200 group ${dark ? "bg-navy-700 border-white/8 hover:border-gold-500/40 hover:bg-navy-600" : "bg-slate-50 border-slate-200 hover:border-gold-500/40 hover:bg-white"}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-extrabold text-gold-500 text-[10px] tracking-tight">
                      {p.abbr}
                    </span>
                  </div>
                  <div>
                    <div
                      className={`font-heading font-bold text-sm group-hover:text-gold-500 transition-colors whitespace-nowrap ${dark ? "text-white" : "text-navy"}`}
                    >
                      {p.name}
                    </div>
                    <div
                      className={`text-xs ${dark ? "text-white/35" : "text-slate-400"}`}
                    >
                      {p.sector}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} dark={dark} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
