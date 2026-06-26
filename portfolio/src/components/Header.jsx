import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-fold-line bg-paper/88 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 font-serif-display text-xl font-semibold tracking-tight">
          <span className="inline-block h-[9px] w-[9px] rounded-full bg-green shadow-[0_0_0_0_rgba(20,168,0,0.5)] animate-[pulse_2.4s_ease-in-out_infinite]" />
          Hamza
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden gap-9 font-mono text-[12.5px] uppercase tracking-wider md:flex">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="group relative pb-[3px] transition-colors duration-200 hover:text-green-deep"
              >
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-green transition-all duration-250 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#book"
          className="hidden whitespace-nowrap rounded-sm bg-green px-[18px] py-[10px] font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-px hover:bg-green-deep sm:inline-block"
        >
          Book a Call
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-6 bg-ink transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-6 bg-ink transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-1 border-t border-fold-line bg-paper px-8 pb-6 pt-4">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 font-mono text-[13px] uppercase tracking-wider transition-colors hover:text-green-deep"
            >
              {label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-sm bg-green px-4 py-3 text-center font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-green-deep"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
