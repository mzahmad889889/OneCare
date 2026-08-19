import { asset } from '../lib/asset'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* The pastel band wash is Figma node 34:219 exported directly, rather
          than an approximation in CSS. It sits 1440x900 at the top of the
          section in the comp and fades out into white. */}
      <img
        src={asset('hero-bg.webp')}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full select-none"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-transparent to-white"
      />

      <div className="relative mx-auto max-w-[1280px] px-8 pt-[168px] text-center">
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

      {/* Composed export of Figma node 34:259 ("Hero Images"), trimmed to its
          artwork — the node render carried ~400px of transparent padding
          below the tablet, which was showing up as dead space before the
          next section. */}
      <div className="relative mx-auto mt-14 max-w-[1180px] px-8">
        <img
          src={asset('hero-visual.webp')}
          alt="OneSoftCare care overview dashboard shown on a tablet"
          width={1444}
          height={754}
          className="w-full"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
