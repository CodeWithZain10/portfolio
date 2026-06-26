import { useReveal } from '../hooks/useReveal';

const steps = [
  { stage: 'STAGE A', title: 'Audit', desc: 'I review your current profile, last 15–20 proposals, and job-success data to find where clients are dropping off.' },
  { stage: 'STAGE B', title: 'Rewrite', desc: 'Title, overview, portfolio captions, and proposal templates rebuilt around your strongest, most provable outcome.' },
  { stage: 'STAGE C', title: 'Review Call', desc: "We go through every change line by line on a call — nothing ships you don't understand or agree with." },
  { stage: 'STAGE D', title: '30-Day Check-in', desc: 'A short follow-up after a month live, to adjust anything based on real invite and reply data.' },
];

function ProcessStep({ stage, title, desc, isFirst }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'in' : ''} flex-1 bg-paper p-[30px_26px] transition-colors duration-250 hover:bg-white ${!isFirst ? 'border-t border-fold-line sm:border-l sm:border-t-0' : ''}`}>
      <div className="font-mono text-[11px] text-green-deep">{stage}</div>
      <h4 className="my-[8px] mt-[10px] font-serif-display text-[19px] font-medium">{title}</h4>
      <p className="text-sm leading-relaxed text-warm-gray">{desc}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative border-t border-fold-line py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-deep">
              <span className="inline-block h-px w-[14px] bg-green-deep" />
              04 — PROCESS
            </div>
            <h2 className="mt-[14px] font-serif-display text-[clamp(30px,3.4vw,42px)] font-medium tracking-tight">How an engagement runs.</h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-warm-gray sm:max-w-[30ch] sm:text-right">Typical turnaround: 4–6 days from audit to delivered rewrite.</div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-sm border border-fold-line sm:flex-row">
          {steps.map((s, i) => <ProcessStep key={s.stage} {...s} isFirst={i === 0} />)}
        </div>
      </div>
    </section>
  );
}
