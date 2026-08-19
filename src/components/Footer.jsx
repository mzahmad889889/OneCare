import { asset } from '../lib/asset'

/* lucide v1 dropped brand logos, so these four are inlined. */
const socials = [
  {
    name: 'Framer',
    path: 'M4 2h16v7h-8l-8-7Zm0 7h8l8 7H4V9Zm0 7h8v7l-8-7Z',
  },
  {
    name: 'X',
    path: 'M17.53 3h3.02l-6.6 7.54L21.75 21h-6.07l-4.76-6.22L5.47 21H2.44l7.06-8.07L2.25 3h6.22l4.3 5.69L17.53 3Zm-1.06 16.2h1.67L7.6 4.71H5.81L16.47 19.2Z',
  },
  {
    name: 'LinkedIn',
    path: 'M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.66 1.66 0 1 0 0 3.32A1.66 1.66 0 0 0 5.5 4ZM20 13.7c0-3.1-1.66-4.55-3.87-4.55-1.79 0-2.59 1-3.03 1.68V8.5H10.2c.04.81 0 11.5 0 11.5h2.9v-6.42c0-.26.02-.52.1-.7.2-.52.68-1.05 1.48-1.05 1.05 0 1.47.8 1.47 1.96V20H20v-6.3Z',
  },
  {
    name: 'YouTube',
    path: 'M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z',
  },
]

/* NOTE: "Smart Scheduling" is listed twice in the Figma file. Kept here to
   match the comp exactly — almost certainly a slip in the design. */
const product = [
  { label: 'Care Management' },
  { label: 'Caregiver Management', tag: 'New', tone: 'blue' },
  { label: 'Service User Records' },
  { label: 'Smart Scheduling' },
  { label: 'Smart Scheduling' },
  { label: 'Mobile App', tag: 'New', tone: 'blue' },
  { label: 'Reporting & Analytics' },
  { label: 'Pricing' },
]

const company = [
  { label: 'About Us' },
  { label: 'Why OneSoftCare' },
  { label: 'Careers', tag: 'Hiring', tone: 'green' },
  { label: 'Contact Us' },
  { label: 'Partners' },
  { label: 'Security' },
  { label: 'Privacy Policy' },
]

const tones = {
  blue: 'bg-[#1b3a63] text-[#5fa8ff]',
  green: 'bg-[#123b2c] text-[#3ddc9a]',
}

function Column({ title, items }) {
  return (
    <div>
      <p className="text-[0.75rem] font-medium tracking-wider text-white/45">{title}</p>
      <ul className="mt-7 space-y-4">
        {items.map((i, idx) => (
          <li key={`${i.label}-${idx}`}>
            <a
              href="#"
              className="text-body inline-flex items-center gap-2.5 text-white/75 transition-colors hover:text-white"
            >
              {i.label}
              {i.tag && (
                <span
                  className={`rounded-pill px-2 py-0.5 text-[0.625rem] font-semibold ${tones[i.tone]}`}
                >
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
      {/* Teal glow upper-left, blue glow upper-right — Figma nodes 34:3303
          (#006b5f) and 34:3304 (#2d7bd9). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(52% 60% at 2% -6%, #006b5f 0%, transparent 62%),' +
            'radial-gradient(58% 68% at 100% 8%, #2d7bd9 0%, transparent 62%)',
          opacity: 0.5,
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-8 py-24">
        <img src={asset('logo.webp')} alt="OneSoftCare" className="h-14 w-auto" />
        <p className="text-body mt-8 max-w-[1100px] text-white/75">
          The complete care management platform helping care providers simplify operations, stay
          compliant, and deliver exceptional care.
        </p>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
          <Column title="PRODUCT" items={product} />
          <Column title="COMPANY" items={company} />

          <div>
            <p className="text-body text-white/45">Subscribe for product updates</p>

            {/* Input and button stack in the comp, they are not side by side. */}
            <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="jane@framer.com"
                className="text-body w-full rounded-pill border border-white/10 bg-black/30 px-6 py-4 text-white placeholder:text-white/45 focus:border-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="text-body mt-3 w-full rounded-pill border border-white/10 bg-black/40 py-4 font-semibold text-white transition-colors hover:bg-black/60"
              >
                Subscribe
              </button>
            </form>

            <p className="text-body mt-5 text-white/55">
              Get the latest product updates, new features, and care industry insights delivered to
              your inbox.
            </p>

            <p className="text-[0.75rem] mt-12 font-medium tracking-wider text-white/45">
              FIND US ON
            </p>
            <ul className="mt-4 flex gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href="#"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-black/30 text-white/70 transition-colors hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
