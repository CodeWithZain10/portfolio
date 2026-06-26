import { useCountUp } from '../hooks/useReveal';

function StatItem({ target, suffix, label, decimals = 0 }) {
  const [ref, display] = useCountUp(target, suffix, decimals);
  return (
    <div>
      <div ref={ref} className="font-serif-display text-[30px] font-semibold leading-none text-green-deep">
        {display}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-warm-gray">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-[90px] pt-20" id="top">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[60px]">
        {/* Left Content */}
        <div>
          {/* Eyebrow */}
          <div className="mb-[26px] flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-deep opacity-0 animate-[riseIn_0.6s_ease-out_0.1s_forwards]">
            <span className="inline-block h-px w-[14px] bg-green-deep" />
            UPWORK PROFILE &amp; PROPOSAL STRATEGIST
          </div>

          {/* Headline */}
          <h1 className="font-serif-display text-[clamp(40px,5.4vw,68px)] font-medium leading-[1.03] tracking-tight opacity-0 animate-[riseIn_0.7s_ease-out_0.25s_forwards]">
            Your Upwork profile isn&apos;t{' '}
            <span className="relative italic font-normal text-warm-gray">
              getting ignored
              <span className="absolute left-[-2%] right-[-2%] top-[48%] h-[2px] bg-green origin-left scale-x-0 animate-[strike_0.6s_ease-out_1.1s_forwards]" />
              <span className="not-italic inline-block text-green-deep opacity-0 translate-y-[6px] animate-[rise_0.5s_ease-out_1.55s_forwards]">
                winning offers
              </span>
            </span>
            .
          </h1>

          {/* Sub */}
          <p className="mt-[26px] max-w-[46ch] text-lg leading-relaxed text-warm-gray opacity-0 animate-[riseIn_0.7s_ease-out_0.4s_forwards]">
            I&apos;m Hamza Raza — I rewrite freelancer profiles and proposals that aren&apos;t converting, into ones that get interviews. Top Rated Plus on Upwork, 6+ years inside the algorithm, $1M+ in client contracts won.
          </p>

          {/* Actions */}
          <div className="mt-[38px] flex flex-wrap gap-4 opacity-0 animate-[riseIn_0.7s_ease-out_0.55s_forwards]">
            <a
              href="#book"
              className="inline-flex items-center gap-[10px] rounded-sm border border-green bg-green px-[26px] py-[15px] font-mono text-[13px] uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-[2px] hover:border-green-deep hover:bg-green-deep hover:shadow-[0_10px_24px_-10px_rgba(20,168,0,0.5)]"
            >
              Book Free Consultation →
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-[10px] rounded-sm border border-fold-line bg-white px-[26px] py-[15px] font-mono text-[13px] uppercase tracking-wider text-ink transition-all duration-200 hover:-translate-y-[2px] hover:border-green hover:text-green-deep"
            >
              See the Work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-[54px] flex flex-wrap gap-10 opacity-0 animate-[riseIn_0.7s_ease-out_0.7s_forwards]">
            <StatItem target={230} suffix="+" label="Profiles Optimized" />
            <StatItem target={98} suffix="%" label="Client Job Success" />
            <StatItem target={1.2} suffix="M+" label="Contracts Won" decimals={1} />
          </div>
        </div>

        {/* Right — Document Card */}
        <div>
          <div className="relative rounded-sm border border-fold-line bg-white p-[30px_26px] shadow-[0_18px_50px_-20px_rgba(0,30,0,0.2),0_1px_0_rgba(0,30,0,0.04)] rotate-[1.2deg] opacity-0 animate-[cardIn_0.8s_ease-out_0.5s_forwards] transition-transform duration-400 hover:rotate-0 hover:-translate-y-1">
            {/* Tag */}
            <div className="absolute -top-[13px] left-6 rounded-sm bg-green px-[10px] py-1 font-mono text-[10.5px] tracking-wider text-white">
              PROPOSAL_DRAFT_v3.doc
            </div>

            {/* Skeleton lines */}
            <div className="mb-[11px] h-[9px] w-[40%] rounded-sm bg-fold" />
            <div className="mb-[11px] mt-[18px] h-[9px] w-[90%] rounded-sm bg-fold" />
            <div className="mb-[11px] h-[9px] w-[75%] rounded-sm bg-fold" />

            {/* Strike-through line */}
            <div className="relative border border-dashed border-fold-line px-0 py-[6px] font-mono text-xs text-[#A9B6A8]">
              <span className="relative">
                &quot;Hi, I am a hard worker and...&quot;
                <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-green" />
              </span>
            </div>

            {/* Check list */}
            <ul className="mt-[18px] flex flex-col gap-[9px]">
              {[
                'Title rebuilt around outcome, not job title',
                'Overview opens with proof, not greeting',
                'Portfolio captions tied to client metrics',
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-[9px] font-mono text-xs text-ink opacity-0 animate-[checkIn_0.4s_ease-out_forwards]"
                  style={{ animationDelay: `${1.7 + i * 0.25}s` }}
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green text-[10px] text-white">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* Margin note */}
            <div className="mt-[18px] border-t border-dashed border-fold-line pt-4 font-mono text-[11.5px] leading-relaxed text-green-deep">
              <b className="text-ink">Margin note —</b> lead with proof, not pleasantries. Client scans top 2 lines before deciding.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
