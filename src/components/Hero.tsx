import { asset } from '../lib/asset'

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-8 pt-[168px] text-center">
        <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-white/80 py-1 pr-4 pl-1 backdrop-blur">
          <span className="text-[10px] rounded-pill bg-info/10 px-2.5 py-1 font-semibold text-info">
            New
          </span>
          <span className="text-label text-ink-muted">Digital Care Records</span>
        </span>

        {/* Manrope 700 at 60/60 on the comp's 1440 canvas. 4.17vw hits exactly
            60px at 1440 and scales down smoothly below it, so the two lines
            never wrap regardless of viewport. */}
        <h1 className="mt-8 text-[clamp(1.75rem,4.17vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.02em]">
          <span className="block">Simplify Care Management.</span>
          <span className="block">One Platform for Every Care Team.</span>
        </h1>

        <p className="text-body mx-auto mt-6 max-w-[680px] text-ink-muted">
          Manage caregivers, service users, schedules, medication, compliance, and reporting - all
          from one intelligent platform built for modern care providers.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#trial"
            className="rounded-pill bg-ink px-8 py-4 text-body font-medium text-white transition-opacity hover:opacity-85"
          >
            Start Free Trial
          </a>
          <a
            href="#demo"
            className="rounded-pill border border-line bg-white px-8 py-4 text-body font-medium transition-colors hover:bg-surface-subtle"
          >
            Book Demo
          </a>
        </div>
      </div>

      {/* Composed export of Figma node 34:259 ("Hero Images") — the raw image
          fill is an uncropped device set; this is the node as the comp masks
          it, already faded out at the bottom edge. */}
      <div className="mx-auto mt-12 max-w-[1248px] px-8">
        <img
          src={asset('hero-visual.webp')}
          alt="OneSoftCare care overview dashboard shown on a tablet"
          width={1600}
          height={1150}
          className="w-full"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
