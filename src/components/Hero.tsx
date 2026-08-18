import { DashboardMock } from './DashboardMock'

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden pt-32 pb-0">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-white/70 px-3 py-1 text-label font-medium text-ink-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Built for Care Teams
        </span>

        {/* The comp breaks these two sentences onto their own lines and sets the
            H1 at 56px on a 1440 canvas; step down from there on smaller screens. */}
        <h1 className="mt-6 text-[2rem] leading-[1.08] font-semibold tracking-tight sm:text-[2.5rem] lg:text-[3rem] xl:text-display">
          <span className="block">Simplify Care Management.</span>
          <span className="block">One Platform for Every Care Team.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted">
          Manage caregivers, schedules, medication, compliance, and reporting — all in one
          intuitive platform built for how your care team actually works.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#trial"
            className="rounded-pill bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Start Free Trial
          </a>
          <a
            href="#demo"
            className="rounded-pill border border-line bg-white px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-subtle"
          >
            Book Demo
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[980px] px-6">
        <DashboardMock />
      </div>
    </section>
  )
}
