import { asset } from '../lib/asset'

const product = [
  { label: 'Care Management', tag: null },
  { label: 'Caregiver Management', tag: 'New' },
  { label: 'Service User Records', tag: null },
  { label: 'Smart Scheduling', tag: null },
  { label: 'Mobile App', tag: 'New' },
  { label: 'Reporting & Analytics', tag: null },
  { label: 'Pricing', tag: null },
]

const company = [
  { label: 'About Us', tag: null },
  { label: 'Why OneSoftCare', tag: null },
  { label: 'Careers', tag: 'Hiring' },
  { label: 'Contact Us', tag: null },
  { label: 'Partners', tag: null },
  { label: 'Security', tag: null },
  { label: 'Privacy Policy', tag: null },
]

const socials = ['LinkedIn', 'X', 'Facebook', 'YouTube']

function Column({ title, items }) {
  return (
    <div>
      <p className="text-[0.75rem] font-medium tracking-wider text-white/50">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href="#"
              className="text-body inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              {i.label}
              {i.tag && (
                <span className="rounded-pill bg-accent/20 px-2 py-0.5 text-[0.625rem] font-semibold text-accent-bright">
                  {i.tag}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1e1e1e] text-white">
      {/* Two large soft colour blobs, from Figma nodes 34:3303 (#006b5f) and
          34:3304 (#2d7bd9). Painted as radial gradients rather than blurred
          divs — a 120px blur on a 617px element pins the compositor and made
          the whole page janky. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(46% 62% at 8% 118%, #006b5f 0%, transparent 70%),' +
            'radial-gradient(46% 62% at 92% 118%, #2d7bd9 0%, transparent 70%)',
          opacity: 0.55,
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.8fr))_minmax(0,1.2fr)]">
          <div>
            <img src={asset('logo.webp')} alt="OneSoftCare" className="h-10 w-auto" />
            <p className="text-body mt-6 max-w-[320px] text-white/70">
              The complete care management platform helping care providers simplify operations, stay
              compliant, and deliver exceptional care.
            </p>
          </div>

          <Column title="PRODUCT" items={product} />
          <Column title="COMPANY" items={company} />

          <div>
            <p className="text-[0.6875rem] font-medium text-white/50">
              Subscribe for product updates
            </p>
            <form
              className="mt-4 flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                className="text-body min-w-0 flex-1 bg-transparent px-3 text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="text-label shrink-0 rounded-pill bg-white px-5 py-2.5 font-medium text-ink transition-opacity hover:opacity-85"
              >
                Subscribe
              </button>
            </form>
            <p className="text-label mt-4 text-white/60">
              Get the latest product updates, new features, and care industry insights delivered to
              your inbox.
            </p>

            <p className="text-[0.6875rem] mt-8 font-medium text-white/50">FIND US ON</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s}>
                  <a href="#" className="text-label text-white/70 transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-label text-white/50">
            © {new Date().getFullYear()} OneSoftCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
