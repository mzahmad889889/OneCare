import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const links = [
  { label: 'One SoftCare', href: '#platform' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Software', href: '#software' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="text-[15px] leading-[1.05] font-semibold tracking-tight">
            OneSoft
            <br />
            Care
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden rounded-pill bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85 sm:inline-block"
          >
            Get a Demo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-md p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-6 rounded-2xl border border-line bg-white p-4 shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium text-ink-soft"
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
