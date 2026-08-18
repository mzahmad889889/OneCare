/** Small uppercase-ish kicker that sits above every section heading in the comp
 *  (Inter 500, ~11–12px, muted). */
export function Eyebrow({ children }) {
  return <p className="text-[0.6875rem] font-medium text-ink-faint">{children}</p>
}

/** Section heading — Manrope 700 at 40/48 on the 1440 canvas. */
export function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`mt-3 text-[clamp(1.75rem,2.78vw,2.5rem)] leading-[1.2] font-bold tracking-[-0.02em] ${className}`}
    >
      {children}
    </h2>
  )
}

export function Lead({ children, className = '' }) {
  return <p className={`mt-5 text-[1.0625rem] leading-[1.5] text-ink-muted ${className}`}>{children}</p>
}

/** Pill used for the small feature chips ("Manual processes", "Live sync", …).
 *  `tone` is one of 'neutral' | 'accent' | 'warn'. */
export function Chip({ children, tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-surface-subtle text-ink-muted',
    accent: 'bg-accent/10 text-accent',
    warn: 'bg-warn/10 text-warn',
  }
  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-1 text-[0.625rem] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

/** `variant` is one of 'dark' | 'light' | 'outline'. */
export function PillLink({ href, children, variant = 'dark', className = '' }) {
  const variants = {
    dark: 'bg-ink text-white hover:opacity-85',
    light: 'bg-white text-ink hover:bg-surface-subtle',
    outline: 'border border-line bg-white text-ink hover:bg-surface-subtle',
  }
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-pill px-6 py-3 text-label font-medium transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
