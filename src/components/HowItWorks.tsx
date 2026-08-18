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
        { kicker: 'Caregiver', title: 'Add Your Care Team' },
        { kicker: 'Service User', title: 'Import Client Records' },
        { kicker: 'Schedule', title: 'Create Your First Rota' },
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

function Panel({ step }: { step: (typeof steps)[number] }) {
  const p = step.panel
  return (
    <div className="rounded-3xl border border-line bg-surface-subtle p-8">
      <p className="text-label font-semibold">{p.label}</p>

      {'tags' in p && p.tags && (
        <>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-xl border border-line bg-white px-4 py-2.5 text-body font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-label mt-6 font-semibold text-accent">{p.footer}</p>
        </>
      )}

      {'rows' in p && p.rows && (
        <div className="mt-5 space-y-3">
          {p.rows.map((r) => (
            <div key={r.title} className="rounded-xl border border-line bg-white px-4 py-3">
              <p className="text-[0.6875rem] font-medium text-ink-faint">{r.kicker}</p>
              <p className="mt-0.5 text-[0.9375rem] font-semibold">{r.title}</p>
            </div>
          ))}
        </div>
      )}

      {'events' in p && p.events && (
        <>
          <div className="mt-5 flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
            <div>
              <p className="text-[0.9375rem] font-semibold">{p.status}</p>
              <p className="text-[0.6875rem] font-medium text-ink-faint">{p.synced}</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-pill bg-accent/10 px-2.5 py-1 text-[0.625rem] font-semibold text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.events.map((e) => (
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

      <div className="mx-auto mt-16 max-w-[1200px] space-y-16 px-8">
        {steps.map((s, i) => (
          <div key={s.n} className="grid items-center gap-10 lg:grid-cols-2">
            {/* Steps alternate sides in the comp: 1 left, 2 right, 3 left. */}
            <div className={i === 1 ? 'lg:order-2' : ''}>
              <div className="flex items-baseline gap-3">
                <span className="text-card font-bold text-accent">{s.n}</span>
                <h3 className="text-card font-bold">{s.title}</h3>
              </div>
              <p className="text-body mt-4 max-w-[460px] text-ink-muted">{s.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
            <div className={i === 1 ? 'lg:order-1' : ''}>
              <Panel step={s} />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
