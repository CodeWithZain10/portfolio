export default function Footer() {
  return (
    <footer id="contact" className="border-t border-fold-line pb-9 pt-16">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-1 gap-9 pb-11 sm:grid-cols-[1.3fr_1fr_1fr] sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif-display text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-green" />
              Hamza
            </div>
            <p className="mt-[14px] max-w-[34ch] text-[14.5px] leading-relaxed text-warm-gray">
              Upwork profile optimization and proposal strategy for freelancers who want to win better-fit clients, faster.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-green-deep">Contact</div>
            <a href="mailto:hello@hamzaraza.work" className="block py-[6px] text-[14.5px] text-ink transition-colors hover:text-green-deep">hello@hamzaraza.work</a>
            <a href="#book" className="block py-[6px] text-[14.5px] text-ink transition-colors hover:text-green-deep">Book a consultation</a>
            <p className="py-[6px] text-[14.5px] text-ink">Karachi, Pakistan · Remote-first</p>
          </div>

          {/* Navigate */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-green-deep">Navigate</div>
            {['About', 'Services', 'Portfolio', 'Process'].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="block py-[6px] text-[14.5px] text-ink transition-colors hover:text-green-deep">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between gap-[14px] border-t border-fold-line pt-[26px] font-mono text-[11.5px] text-warm-gray">
          <span>© 2026 Hamza Raza. All rights reserved.</span>
          <span>Built for freelancers who&apos;d rather be working than guessing.</span>
        </div>
      </div>
    </footer>
  );
}
