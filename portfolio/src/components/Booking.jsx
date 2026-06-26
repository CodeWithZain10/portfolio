import { useState } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative border-t border-fold-line py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-1 gap-14 rounded-[4px] bg-ink p-[42px_28px] text-paper lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-green-soft">
              <span className="inline-block h-px w-[14px] bg-green-soft" />
              06 — CONSULTATION
            </div>
            <h3 className="mt-[18px] font-serif-display text-[clamp(28px,3.2vw,38px)] font-medium leading-[1.15]">
              Book a free 20-minute profile audit.
            </h3>
            <p className="mt-[18px] max-w-[42ch] text-[15.5px] leading-[1.75] text-[#B9CBB6]">
              No pitch deck, no pressure. I&apos;ll look at your live profile and tell you the first three things I&apos;d change — and whether working together makes sense.
            </p>
            <ul className="mt-[30px] flex flex-col gap-3">
              {[
                'A live read of your current profile & overview',
                'One proposal reviewed line-by-line',
                "A short written action list, yours to keep either way",
              ].map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-[14.5px] text-[#E2EFE0]">
                  <span className="font-mono text-green-soft">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-[18px] xs:grid-cols-2">
                  <div>
                    <label htmlFor="fname" className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#90A38D]">Name</label>
                    <input id="fname" name="fname" type="text" placeholder="Your full name" required className="w-full rounded-sm border border-white/[0.18] bg-white/[0.06] px-[14px] py-[13px] font-serif-body text-[14.5px] text-paper placeholder-[#6E806B] transition-all duration-200 focus:border-green-soft focus:bg-white/10 focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="femail" className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#90A38D]">Email</label>
                    <input id="femail" name="femail" type="email" placeholder="you@email.com" required className="w-full rounded-sm border border-white/[0.18] bg-white/[0.06] px-[14px] py-[13px] font-serif-body text-[14.5px] text-paper placeholder-[#6E806B] transition-all duration-200 focus:border-green-soft focus:bg-white/10 focus:outline-none" />
                  </div>
                </div>
                <div className="mt-[18px] grid grid-cols-1 gap-[18px] xs:grid-cols-2">
                  <div>
                    <label htmlFor="fcategory" className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#90A38D]">Upwork Category</label>
                    <select id="fcategory" name="fcategory" required className="w-full rounded-sm border border-white/[0.18] bg-white/[0.06] px-[14px] py-[13px] font-serif-body text-[14.5px] text-paper transition-all duration-200 focus:border-green-soft focus:bg-white/10 focus:outline-none">
                      <option value="" disabled>Select one</option>
                      <option>Web / App Development</option>
                      <option>Design &amp; Creative</option>
                      <option>Writing &amp; Content</option>
                      <option>Marketing</option>
                      <option>Admin / VA Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ftime" className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#90A38D]">Preferred Time</label>
                    <input id="ftime" name="ftime" type="text" placeholder="e.g. Weekday evenings, GMT+5" className="w-full rounded-sm border border-white/[0.18] bg-white/[0.06] px-[14px] py-[13px] font-serif-body text-[14.5px] text-paper placeholder-[#6E806B] transition-all duration-200 focus:border-green-soft focus:bg-white/10 focus:outline-none" />
                  </div>
                </div>
                <div className="mt-[18px]">
                  <label htmlFor="fmessage" className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#90A38D]">What&apos;s not working right now?</label>
                  <textarea id="fmessage" name="fmessage" rows={4} placeholder="e.g. Low invite rate, proposals not getting replies, unsure how to niche down..." className="w-full rounded-sm border border-white/[0.18] bg-white/[0.06] px-[14px] py-[13px] font-serif-body text-[14.5px] text-paper placeholder-[#6E806B] transition-all duration-200 focus:border-green-soft focus:bg-white/10 focus:outline-none" />
                </div>
                <button type="submit" className="mt-[10px] w-full cursor-pointer rounded-sm border-none bg-green px-4 py-4 font-mono text-[13px] uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-[2px] hover:bg-green-soft hover:shadow-[0_10px_24px_-10px_rgba(20,168,0,0.6)]">
                  Request Free Consultation
                </button>
                <div className="mt-[14px] text-center font-mono text-[11px] text-[#6E806B]">
                  I reply within 24 hours — usually faster.
                </div>
              </form>
            ) : (
              <div className="animate-[riseIn_0.5s_ease-out_forwards] px-[10px] py-10 text-center">
                <div className="font-serif-display text-[40px] text-green-soft">✓</div>
                <p className="mt-[14px] text-[14.5px] text-[#B9CBB6]">
                  <strong className="text-white">Request received.</strong><br />
                  I&apos;ll email you within 24 hours to confirm a time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
