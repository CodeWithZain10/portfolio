import { useReveal } from '../hooks/useReveal';

const cases = [
  { industry: 'Web Development', result: '+340% Invites', title: 'Full-stack dev profile rebuilt around 3 verticals instead of 11 skills.', before: '"I can build anything in any stack"', after: '"I build Shopify→custom backend migrations"' },
  { industry: 'Graphic Design', result: '12 → 3 days to first reply', title: 'Proposal opener rewritten to lead with a relevant portfolio link, not a greeting.', before: '"Hi, hope you\'re doing well..."', after: '"Here\'s a logo system I built for a SaaS at your stage"' },
  { industry: 'Copywriting', result: 'JSS 84 → 97', title: 'Niche narrowed from "all writing" to fintech landing pages — fewer bids, better fits.', before: '"Experienced writer, all niches"', after: '"Landing pages for fintech, 40+ shipped"' },
  { industry: 'Virtual Assistant', result: '+2 long-term clients', title: 'Overview restructured around tools and SLAs instead of a duties list.', before: '"I can do admin, email, calendar..."', after: '"48hr inbox-zero SLA, Notion + ClickUp certified"' },
  { industry: 'UI/UX Design', result: 'Rate +60%, win rate held', title: 'Portfolio captions rewritten to state the business metric each project moved.', before: '"Mobile app redesign project"', after: '"Redesign that cut onboarding drop-off 22%"' },
  { industry: 'Digital Marketing', result: '+5 hrs/wk saved bidding', title: 'Built a modular proposal system — 4 openers, swapped by job type in under 90 seconds.', before: 'Fresh proposal written per job', after: 'Modular system, 90-second customization' },
];

function CaseCard({ industry, result, title, before, after }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'in' : ''} flex flex-col gap-[18px] rounded-sm border border-fold-line bg-white p-[28px_26px] transition-all duration-250 hover:-translate-y-[5px] hover:border-green-soft hover:shadow-[0_18px_36px_-18px_rgba(0,30,0,0.22)]`}>
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-warm-gray">{industry}</span>
        <span className="whitespace-nowrap rounded-full bg-green px-[9px] py-1 font-mono text-[11px] text-white">{result}</span>
      </div>
      <div className="font-serif-display text-[21px] font-medium leading-[1.25]">{title}</div>
      <div className="border-t border-dashed border-fold-line pt-[14px] font-mono text-xs leading-8">
        <div className="text-[#A9B6A8]"><span className="text-warm-gray">BEFORE  </span>{before}</div>
        <div className="text-ink"><span className="text-green-deep">AFTER   </span>{after}</div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-fold-line py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-deep">
              <span className="inline-block h-px w-[14px] bg-green-deep" />
              03 — PORTFOLIO
            </div>
            <h2 className="mt-[14px] font-serif-display text-[clamp(30px,3.4vw,42px)] font-medium tracking-tight">Before / after, with results.</h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-warm-gray sm:max-w-[30ch] sm:text-right">Placeholder case studies — swap in your real client outcomes here.</div>
        </div>
        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => <CaseCard key={i} {...c} />)}
        </div>
      </div>
    </section>
  );
}
