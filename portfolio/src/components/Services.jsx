import { useReveal } from '../hooks/useReveal';

const services = [
  { tag: '/ 01', name: 'Profile Optimization', desc: 'Full rewrite of your title, overview, portfolio captions, and specialized profiles — structured around the searches and skim-patterns clients actually use, not keyword stuffing.' },
  { tag: '/ 02', name: 'Proposal Writing & Templates', desc: "A proposal framework built around your services, plus 3–5 modular openers you can adapt per job in under two minutes — so quality doesn't drop when volume goes up." },
  { tag: '/ 03', name: 'Bidding Strategy & Audit', desc: 'A teardown of your last 20 proposals and job-success metrics to find exactly where clients are dropping off — pricing, niche, response time, or the pitch itself.' },
  { tag: '/ 04', name: '1:1 Consultation', desc: "A live working session — screen-share through your profile and active proposals together, fix what's broken in real time, leave with a clear action list." },
];

function ServiceRow({ tag, name, desc }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'in' : ''} grid grid-cols-1 gap-[10px] border-t border-fold-line py-[26px] transition-all duration-250 sm:grid-cols-[90px_1fr_1.1fr] sm:gap-9 sm:py-[34px] sm:hover:bg-green/[0.045] sm:hover:pl-[10px]`}>
      <div className="pt-1 font-mono text-xs text-green-deep">{tag}</div>
      <div className="font-serif-display text-[25px] font-medium tracking-tight">{name}</div>
      <div className="text-[15.5px] leading-relaxed text-warm-gray">{desc}</div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative border-t border-fold-line py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-deep">
              <span className="inline-block h-px w-[14px] bg-green-deep" />
              02 — SERVICES
            </div>
            <h2 className="mt-[14px] font-serif-display text-[clamp(30px,3.4vw,42px)] font-medium tracking-tight">Where I help.</h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-warm-gray sm:max-w-[30ch] sm:text-right">Pick one, or bundle all three for a full pipeline rebuild.</div>
        </div>
        <div className="flex flex-col">
          {services.map((s) => <ServiceRow key={s.tag} {...s} />)}
          <div className="border-t border-fold-line" />
        </div>
      </div>
    </section>
  );
}
