import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { asset } from '../lib/asset'

const links = [
  { label: 'Why OneSoftCare', href: '#why' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Testimonial', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-8">
        <a href="#" aria-label="OneSoftCare home">
          {/* `logo.webp` is the white-on-dark variant used in the footer;
              this is the dark wordmark from the nav (Figma node 255:215). */}
          <img src={asset('logo-nav.webp')} alt="OneSoftCare" className="h-[42px] w-auto" />
        </a>

        {/* Seven links plus the logo and CTA need ~1200px; below that fall back
            to the sheet rather than letting labels wrap. */}
        <ul className="hidden items-center gap-8 xl:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-body whitespace-nowrap text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#trial"
            className="text-label hidden whitespace-nowrap rounded-pill bg-ink px-6 py-3 font-medium text-white transition-opacity hover:opacity-85 sm:inline-block"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-md p-2 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-6 rounded-2xl border border-line bg-white p-4 shadow-lg xl:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-body block px-2 py-2.5 text-ink-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
