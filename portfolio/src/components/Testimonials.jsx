import { useReveal } from '../hooks/useReveal';

function VideoCard() {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'in' : ''} flex flex-col overflow-hidden bg-paper transition-colors duration-250 hover:bg-white`}>
      <div
        className="relative flex aspect-[16/10] cursor-pointer items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,30,0,0.85), rgba(13,122,0,0.7)), repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 14px)',
        }}
        role="button"
        tabIndex={0}
        aria-label="Play video testimonial from Bilal Ahmed"
        onClick={() => alert('Add your video testimonial embed here (e.g. a YouTube/Loom link) — this is a placeholder.')}
        onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 45%, rgba(20,168,0,0.25), transparent 60%)' }} />
        <span className="absolute left-[14px] top-[14px] z-10 rounded-full border border-white/30 bg-white/15 px-[9px] py-1 font-mono text-[10px] uppercase tracking-wider text-white">▶ Video</span>
        <span className="absolute bottom-[14px] right-[14px] z-10 rounded-sm bg-black/45 px-2 py-[3px] font-mono text-[10.5px] text-white">1:42</span>
        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] transition-all duration-250 hover:scale-110 hover:shadow-[0_0_0_10px_rgba(255,255,255,0.15),0_8px_24px_-6px_rgba(0,0,0,0.4)]">
          <span className="ml-1 border-y-[9px] border-l-[15px] border-y-transparent border-l-green-deep" />
        </span>
      </div>
      <div className="flex flex-col gap-3 p-[22px_24px_26px]">
        <div className="font-serif-display text-[15.5px] italic leading-relaxed text-ink">
          &quot;Watch Bilal walk through exactly what changed in his profile — and what happened to his invite rate the following week.&quot;
        </div>
        <div className="flex justify-between font-mono text-[11.5px] text-warm-gray">
          Bilal Ahmed <b className="text-green-deep">— Shopify Developer</b>
        </div>
      </div>
    </div>
  );
}

function TextTestimonial({ quote, name, role }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'in' : ''} flex flex-col gap-[18px] bg-paper p-[32px_28px] transition-colors duration-250 hover:bg-white`}>
      <div className="font-serif-display text-[17px] italic leading-relaxed text-ink">&quot;{quote}&quot;</div>
      <div className="flex justify-between font-mono text-[11.5px] text-warm-gray">
        {name} <b className="text-green-deep">— {role}</b>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative border-t border-fold-line py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-deep">
              <span className="inline-block h-px w-[14px] bg-green-deep" />
              05 — WHAT CLIENTS SAY
            </div>
            <h2 className="mt-[14px] font-serif-display text-[clamp(30px,3.4vw,42px)] font-medium tracking-tight">Placeholder testimonials.</h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-warm-gray sm:max-w-[30ch] sm:text-right">Replace with real client quotes &amp; video once collected.</div>
        </div>
        <div className="stagger grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-fold-line bg-fold-line md:grid-cols-3">
          <VideoCard />
          <TextTestimonial quote="Hamza found the one line in my overview that was quietly repelling clients. One sentence, completely different results." name="Daniyal R." role="Backend Developer" />
          <TextTestimonial quote="The proposal templates alone paid for the session in the first week. I'm bidding faster and winning more." name="Areeba N." role="Content Strategist" />
        </div>
      </div>
    </section>
  );
}
