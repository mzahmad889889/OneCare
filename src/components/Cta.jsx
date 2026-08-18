import { PillLink } from './primitives'

const badges = [
  'Secure Cloud Platform',
  'Role-Based Access',
  'Mobile App Included',
  'Compliance Ready',
  'Dedicated Support',
]

export function Cta() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-[1248px] px-8">
        {/* #141414 / radius 12, from Figma node 34:3215. */}
        <div className="rounded-xl bg-[#141414] px-8 py-20 text-center text-white">
          <p className="text-[0.6875rem] font-medium text-white/60">Get started today</p>
          <h2 className="mx-auto mt-4 max-w-[760px] text-[clamp(1.75rem,2.78vw,2.5rem)] leading-[1.2] font-bold tracking-[-0.02em]">
            Deliver Better Care. Manage Less.
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-[1.0625rem] leading-[1.5] text-white/70">
            Join care providers using OneSoftCare Solution to simplify scheduling, improve
            compliance, and empower their teams with one connected platform.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PillLink href="#sales" variant="light">
              Contact Sales
            </PillLink>
            <a
              href="#demo"
              className="text-label inline-flex items-center justify-center rounded-pill border border-white/25 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>

          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
            {badges.map((b) => (
              <li key={b} className="text-[0.6875rem] font-medium text-white/60">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
