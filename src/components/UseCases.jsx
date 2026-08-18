import { ArrowRight } from 'lucide-react'
import { Chip, Eyebrow, PillLink, SectionTitle } from './primitives'

const cases = [
  {
    tag: 'Sales',
    title: 'Home Care Management',
    body: 'Manage caregivers, schedules, home visits, medications, and digital care records from one centralized platform.',
    tags: ['Rota Management', 'Medication Tracking', 'Live Visits'],
    footer: 'Used by home care providers',
  },
  {
    tag: 'Support',
    title: 'Supported Living Services',
    body: 'Coordinate staff, monitor daily activities, document incidents, and maintain person-centered care plans with ease.',
    tags: ['Care Plan', 'Incident Reports', 'Daily Notes'],
    footer: 'Built for supported living',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[620px]">
            <Eyebrow>Use cases</Eyebrow>
            <SectionTitle>Built for the way your team works.</SectionTitle>
            <p className="text-body mt-5 text-ink-muted">
              Choose the workflows that match your organization and start delivering better care from
              day one.
            </p>
          </div>
          <a
            href="#platform"
            className="text-body inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
          >
            Explore all solutions <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cases.map((c) => (
            <article key={c.title} className="rounded-3xl border border-line bg-surface-subtle p-8">
              <Chip tone="accent">{c.tag}</Chip>
              <h3 className="text-card mt-6 font-bold">{c.title}</h3>
              <p className="text-body mt-3 text-ink-muted">{c.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-pill border border-line bg-white px-3 py-1.5 text-[0.75rem] font-medium text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-label mt-8 font-medium text-ink-faint">{c.footer}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line p-8">
          <div className="max-w-[720px]">
            <h3 className="text-card font-bold">Need something more specific?</h3>
            <p className="text-body mt-2 text-ink-muted">
              OneSoftCare is flexible enough to support residential care homes, rehabilitation
              centers, private care agencies, and multi-location organizations.
            </p>
          </div>
          <PillLink href="#demo">Book a Demo</PillLink>
        </div>
      </div>
    </section>
  )
}
