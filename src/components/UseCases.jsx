import { ArrowRight, Route, User } from 'lucide-react'
import { Eyebrow, SectionTitle } from './primitives'

const cases = [
  {
    Icon: User,
    badge: { label: 'Sales', tint: 'bg-[#e5eefc] text-[#2d6fe0]' },
    title: 'Home Care Management',
    body: 'Manage caregivers, schedules, home visits, medications, and digital care records from one centralized platform.',
    tags: [
      { label: 'Rota Management', dot: 'bg-accent' },
      { label: 'Medication Tracking', dot: 'bg-info' },
      { label: 'Live Visits', dot: 'bg-ink' },
    ],
    footer: 'Used by home care providers',
  },
  {
    Icon: Route,
    badge: { label: 'Support', tint: 'bg-[#e6f6ee] text-[#0f9d64]' },
    title: 'Supported Living Services',
    body: 'Coordinate staff, monitor daily activities, document incidents, and maintain person-centered care plans with ease.',
    tags: [
      { label: 'Care Plan', dot: 'bg-warn-amber' },
      { label: 'Incident Reports', dot: 'bg-ink' },
      { label: 'Daily Notes', dot: 'bg-ink' },
    ],
    footer: 'Built for supported living',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <Eyebrow>Use cases</Eyebrow>
        <SectionTitle>Built for the way your team works.</SectionTitle>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-body max-w-[720px] text-ink-muted">
            Choose the workflows that match your organization and start delivering better care from
            day one.
          </p>
          <a
            href="#platform"
            className="text-body inline-flex items-center gap-2 font-medium underline underline-offset-4"
          >
            Explore all solutions <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* The two cards sit flush against each other in the comp. */}
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-line lg:grid-cols-2">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`bg-white p-8 ${i === 0 ? 'lg:border-r lg:border-line' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                  <c.Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span
                  className={`rounded-pill px-2.5 py-1 text-[0.625rem] font-semibold ${c.badge.tint}`}
                >
                  {c.badge.label}
                </span>
              </div>

              <h3 className="text-card mt-8 font-bold">{c.title}</h3>
              <p className="text-body mt-3 text-ink-muted">{c.body}</p>

              {/* Dotted pills chained with arrows */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {c.tags.map((t, j) => (
                  <span key={t.label} className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[0.75rem] text-ink-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                      {t.label}
                    </span>
                    {j < c.tags.length - 1 && (
                      <ArrowRight className="h-3 w-3 shrink-0 text-ink-faint" />
                    )}
                  </span>
                ))}
              </div>

              <p className="text-body mt-8 flex items-center justify-end gap-2 font-semibold">
                {c.footer} <ArrowRight className="h-4 w-4" />
              </p>
            </article>
          ))}
        </div>

        {/* Blue bar - #3781da, matching the problem section's CTA card. */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#3781da] p-8 text-white">
          <div className="max-w-[820px]">
            <h3 className="text-card font-bold">Need something more specific?</h3>
            <p className="text-body mt-2 text-white/90">
              OneSoftCare is flexible enough to support residential care homes, rehabilitation
              centers, private care agencies, and multi-location organizations.
            </p>
          </div>
          <a
            href="#demo"
            className="text-body shrink-0 rounded-pill bg-ink px-7 py-3.5 font-medium text-white transition-opacity hover:opacity-85"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
