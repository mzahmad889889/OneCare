import { Bell, FileText, Zap } from 'lucide-react'
import { Chip, Eyebrow, Lead, SectionTitle } from './primitives'

const steps = [
  {
    n: '1.',
    title: 'Set up your organization',
    body: 'Add caregivers, service users, and company details to create your digital care environment.',
    chips: ['Import data', 'Secure setup', 'Ready in minutes'],
    panel: {
      label: 'Organization Setup',
      tags: ['Caregivers', 'Service Users', 'Rotas', 'Medications', 'Reports'],
      footer: '+ Everything connected',
    },
  },
  {
    n: '2.',
    title: 'Plan and manage care',
    body: 'Create rotas, assign caregivers, build care plans, and manage medication - all from one centralized dashboard.',
    chips: ['Smart scheduling', 'Care plans', 'Real-time updates'],
    panel: {
      label: 'Care Management Platform',
      rows: [
        { kicker: 'Caregiver', title: 'Add Your Care Team', Icon: FileText, tint: 'bg-[#e6f6ee] text-[#0f9d64]' },
        { kicker: 'Service User', title: 'Import Client Records', Icon: FileText, tint: 'bg-[#f3e9fb] text-[#8b3fd4]' },
        { kicker: 'Schedule', title: 'Create Your First Rota', Icon: Bell, tint: 'bg-[#e5eefc] text-[#2d6fe0]' },
      ],
    },
  },
  {
    n: '3.',
    title: 'Deliver care with confidence',
    body: 'Caregivers use the OneSoftCare mobile app to complete visits, record notes, administer medication, and submit reports in real time.',
    chips: ['Live sync', 'Secure records', 'Mobile access'],
    panel: {
      label: 'Live Care Session',
      status: 'Visit in Progress',
      synced: '100% Synced',
      events: ['GPS Check-In', 'Medication Completed', 'Care Notes Submitted'],
    },
  },
]

function Panel({ panel }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-8">
      <p className="text-body text-ink-faint">{panel.label}</p>

      {panel.tags && (
        <>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {panel.tags.map((t) => (
              <span
                key={t}
                className="rounded-xl border border-line px-6 py-4 text-body font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-body mt-8 text-center text-ink-faint">{panel.footer}</p>
        </>
      )}

      {panel.rows && (
        <div className="mt-6 space-y-3">
          {panel.rows.map((r) => (
            <div
              key={r.title}
              className="flex items-center gap-4 rounded-xl border border-line px-4 py-3"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${r.tint}`}>
                <r.Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[0.6875rem] font-medium text-ink-faint">{r.kicker}</p>
                <p className="mt-0.5 text-[0.9375rem] font-semibold">{r.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {panel.events && (
        <>
          <div className="mt-10 flex items-center justify-between gap-4 rounded-xl border border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e6f6ee] text-[#0f9d64]">
                <Zap className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[0.9375rem] font-semibold">{panel.status}</p>
                <p className="text-[0.6875rem] font-medium text-ink-faint">{panel.synced}</p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-[0.6875rem] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {panel.events.map((e) => (
              <Chip key={e} tone="accent">
                {e}
              </Chip>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8 text-center">
        <Eyebrow>How it works</Eyebrow>
        <SectionTitle>Start managing care in minutes.</SectionTitle>
        <Lead className="mx-auto max-w-[760px]">
          From onboarding your team to delivering care, OneSoftCare helps you digitize operations
          without complicated setup or lengthy training.
        </Lead>
      </div>

      {/* Centre timeline with a dot per step, as in the comp. */}
      <div className="relative mx-auto mt-16 max-w-[1200px] px-8">
        <div
          aria-hidden
          className="absolute top-12 bottom-12 left-1/2 hidden w-px -translate-x-1/2 bg-line lg:block"
        />

        <div className="space-y-20">
          {steps.map((s, i) => (
            <div key={s.n} className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
              <span
                aria-hidden
                className="absolute top-10 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink lg:block"
              />

              {/* Steps alternate sides: 1 left, 2 right, 3 left. */}
              <div className={i === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-baseline gap-3">
                  <span className="text-card font-bold text-ink-faint">{s.n}</span>
                  <h3 className="text-card font-bold">{s.title}</h3>
                </div>
                <p className="text-body mt-4 max-w-[480px] text-ink-muted">{s.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>

              <div className={i === 1 ? 'lg:order-1' : ''}>
                <Panel panel={s.panel} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
