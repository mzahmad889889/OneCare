import { ShieldCheck } from 'lucide-react'
import { Eyebrow, PillLink } from './primitives'

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
        <div className="relative overflow-hidden rounded-xl bg-[#141414] px-8 py-24 text-center text-white">
          {/* Faint vertical streaks running through the panel in the comp. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.05) 38%, transparent 44%, rgba(255,255,255,0.04) 52%, transparent 60%, rgba(255,255,255,0.05) 66%, transparent 72%)',
            }}
          />

          <div className="relative">
            <Eyebrow dark>Get started today</Eyebrow>

            <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(1.75rem,2.78vw,2.5rem)] leading-[1.2] font-bold tracking-[-0.02em]">
              Deliver Better Care. Manage Less.
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[1.0625rem] leading-[1.5] text-white/70">
              Join care providers using OneSoftCare Solution to simplify scheduling, improve
              compliance, and empower their teams with one connected platform.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <PillLink href="#sales" variant="light" className="px-8 py-4">
                Contact Sales
              </PillLink>
              <a
                href="#demo"
                className="text-body inline-flex items-center justify-center rounded-pill border border-white/30 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
              >
                Book a demo
              </a>
            </div>

            <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {badges.map((b) => (
                <li
                  key={b}
                  className="text-[0.6875rem] flex items-center gap-1.5 font-medium text-white/50"
                >
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.6} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
