import { ArrowRight } from 'lucide-react'
import { asset } from '../lib/asset'

const settings = ['Home Care', 'Supported Living', 'Residential Care', 'Multi-Site Management']

export function PlatformBand() {
  return (
    <section id="platform" className="bg-white pb-24">
      <div className="mx-auto max-w-[1248px] px-8">
        {/* #1e1e1e / radius 12, from Figma node 34:1362. */}
        <div className="grid items-center gap-10 overflow-hidden rounded-xl bg-[#1e1e1e] p-12 text-white lg:grid-cols-2 lg:p-14">
          <div>
            {/* Orange filled pill, orange link and outlined teal tags — all as
                the comp renders this band. */}
            <p className="text-label inline-flex rounded-pill bg-warn-alt px-4 py-2 font-semibold text-white">
              Built for Every Care Setting
            </p>
            <h2 className="mt-7 text-[clamp(1.75rem,2.78vw,2.5rem)] leading-[1.2] font-bold tracking-[-0.02em]">
              One platform for every care service.
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.5] text-white/70">
              Whether you manage home care, supported living, residential care, or multiple
              locations, OneSoftCare adapts to the way your organization delivers care.
            </p>

            <a
              href="#use-cases"
              className="text-body mt-5 inline-flex items-center gap-2 font-medium text-warn-alt underline underline-offset-4 decoration-warn-alt/50 hover:decoration-warn-alt"
            >
              Explore solutions <ArrowRight className="h-4 w-4" />
            </a>

            <ul className="mt-14 flex flex-wrap gap-3">
              {settings.map((s) => (
                <li
                  key={s}
                  className="text-label rounded-pill border border-accent/60 px-4 py-2 font-semibold text-accent-leaf"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Composed export of Figma node 255:197 — phone + laptop device set. */}
          <img
            src={asset('platform-visual.webp')}
            alt="OneSoftCare running on desktop and mobile"
            loading="lazy"
            width={1100}
            height={825}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
