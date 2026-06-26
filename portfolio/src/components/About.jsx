import { useReveal } from '../hooks/useReveal';

function RevealDiv({ children, className = '' }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'in' : ''} ${className}`}>
      {children}
    </div>
  );
}

const credentials = [
  { num: 'TR+', lab: 'Top Rated Plus Status' },
  { num: '6 yrs', lab: 'On-Platform Experience' },
  { num: '40+', lab: 'Categories Worked' },
  { num: '4.9/5', lab: 'Avg. Client Rating' },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-fold-line py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        {/* Section Head */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-deep">
              <span className="inline-block h-px w-[14px] bg-green-deep" />
              01 — ABOUT
            </div>
            <h2 className="mt-[14px] font-serif-display text-[clamp(30px,3.4vw,42px)] font-medium tracking-tight">
              Six years reverse-engineering<br className="hidden sm:block" /> what Upwork rewards.
            </h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-warm-gray sm:max-w-[30ch] sm:text-right">
            A profile is a sales page. A proposal is a cold email. I treat both that way.
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.8fr_1.2fr]">
          {/* Portrait */}
          <RevealDiv className="relative flex aspect-[4/5] items-end overflow-hidden rounded-sm border border-fold-line bg-fold">
            <div className="absolute inset-0 flex items-center justify-center font-serif-display text-[140px] font-semibold text-green/10">
              H
            </div>
            <div className="z-10 m-4 rounded-sm bg-ink px-[14px] py-[10px] font-mono text-[11px] tracking-wider text-paper">
              Top Rated Plus · Karachi, PK
            </div>
          </RevealDiv>

          {/* Copy */}
          <RevealDiv>
            <div className="space-y-[22px] text-[17px] leading-[1.8] text-ink [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-2 [&>p:first-of-type]:first-letter:mt-2 [&>p:first-of-type]:first-letter:font-serif-display [&>p:first-of-type]:first-letter:text-[58px] [&>p:first-of-type]:first-letter:font-semibold [&>p:first-of-type]:first-letter:leading-[0.8] [&>p:first-of-type]:first-letter:text-green-deep">
              <p>
                I started bidding on Upwork in 2018 — badly. Generic templates, no replies, wasted Connects. So I started treating every profile and proposal like a piece of conversion copy: what&apos;s the one sentence that earns the next ten seconds of attention?
              </p>
              <p>
                That shift took me to Top Rated Plus and seven figures in won contracts, and somewhere along the way other freelancers started asking me to fix their profiles instead of competing with them. Now that&apos;s most of what I do: audit, rewrite, and test the words that decide whether a client clicks &quot;Invite to Job&quot; or scrolls past.
              </p>
              <p>
                I work across categories — dev, design, marketing, writing, ops — because the principle doesn&apos;t change: clients hire outcomes, not adjectives. My job is finding your outcome and putting it in the first line.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-fold-line bg-fold-line xs:grid-cols-2">
              {credentials.map(({ num, lab }) => (
                <div key={lab} className="bg-paper px-[22px] py-5 transition-colors duration-250 hover:bg-white">
                  <div className="font-serif-display text-[26px] font-semibold text-green-deep">{num}</div>
                  <div className="mt-[6px] font-mono text-[11px] uppercase tracking-wider text-warm-gray">{lab}</div>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
