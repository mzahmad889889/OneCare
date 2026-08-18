import { Check, X } from 'lucide-react'
import { Chip, Eyebrow, Lead, PillLink, SectionTitle } from './primitives'

const rows = [
  {
    without: {
      title: 'Endless Paperwork',
      body: 'Care notes, medication records, and forms scattered across paper and spreadsheets.',
      chip: 'Manual processes',
    },
    with: {
      title: 'Everything in One Platform',
      body: 'Manage caregivers, service users, medication, scheduling, and reporting from one dashboard.',
      chip: 'Centralized operations',
    },
  },
  {
    without: {
      title: 'Scheduling Chaos',
      body: 'Managing rotas manually leads to conflicts, missed visits, and unnecessary overtime.',
      chip: 'Time-consuming planning',
    },
    with: {
      title: 'Smart Scheduling',
      body: 'Create rotas in minutes, assign caregivers, and manage availability with ease.',
      chip: 'Faster workforce planning',
    },
  },
  {
    without: {
      title: 'Disconnected Systems',
      body: 'Payroll, compliance, reporting, and care records live in separate tools.',
      chip: 'Multiple platforms',
    },
    with: {
      title: 'Real-Time Care Monitoring',
      body: 'Track live visits, check-ins, medication compliance, and shift progress instantly.',
      chip: 'Live operational visibility',
    },
  },
  {
    without: {
      title: 'Limited Visibility',
      body: "Managers can't easily track live visits, caregiver activity, or service delivery.",
      chip: 'Reactive management',
    },
    with: {
      title: 'Automated Compliance',
      body: 'Digital care records, audit trails, and secure documentation help you stay inspection-ready.',
      chip: 'Built for compliance',
    },
  },
  {
    without: {
      title: 'Compliance Risks',
      body: 'Missing documentation and delayed reporting increase audit and regulatory risks.',
      chip: 'Higher compliance risk',
    },
    with: {
      title: 'Mobile Workforce',
      body: 'Caregivers complete visits, administer medication, and submit reports directly from the mobile app.',
      chip: 'Work from anywhere',
    },
  },
]

export function Problem() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8 text-center">
        <Eyebrow>Sound familiar?</Eyebrow>
        <SectionTitle>Less Admin. Better Care.</SectionTitle>
        <Lead className="mx-auto max-w-[760px]">
          Stop juggling paperwork, spreadsheets, and disconnected systems. OneSoftCare brings your
          entire care operation into one place.
        </Lead>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1200px] gap-6 px-8 lg:grid-cols-2">
        {(['without', 'with'] as const).map((side) => (
          <div key={side}>
            <h3 className="text-card font-bold">
              {side === 'without' ? 'Without OneSoftCare' : 'With OneSoftCare'}
            </h3>
            <ul className="mt-6 space-y-4">
              {rows.map((r) => {
                const cell = r[side]
                const good = side === 'with'
                return (
                  <li
                    key={cell.title}
                    className={`rounded-2xl border p-5 ${
                      good ? 'border-accent/20 bg-accent/5' : 'border-line bg-surface-subtle'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          good ? 'bg-accent text-white' : 'bg-warn/10 text-warn'
                        }`}
                      >
                        {good ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      </span>
                      <div>
                        <p className="text-[1rem] font-bold">{cell.title}</p>
                        <p className="text-body mt-1.5 text-ink-muted">{cell.body}</p>
                        <div className="mt-3">
                          <Chip tone={good ? 'accent' : 'warn'}>{cell.chip}</Chip>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Closing stat band + CTA card */}
      <div className="mx-auto mt-14 max-w-[1200px] px-8">
        <div className="grid gap-8 rounded-3xl border border-line bg-surface-subtle p-10 lg:grid-cols-3 lg:items-center">
          <div>
            <p className="text-stat font-bold">50%</p>
            <p className="text-card mt-3 font-bold">Administrative time reduced</p>
            <p className="text-body mt-1.5 text-ink-muted">Automating everyday care operations.</p>
          </div>
          <div>
            <p className="text-stat font-bold">3x</p>
            <p className="text-card mt-3 font-bold">More operational efficiency</p>
            <p className="text-body mt-1.5 text-ink-muted">
              Manage more service users without increasing admin.
            </p>
          </div>
          <div className="rounded-2xl bg-ink p-7 text-white">
            <p className="text-card font-bold">Ready to Modernize Your Care Operations?</p>
            <p className="text-body mt-3 text-white/70">
              Join care providers using OneSoftCare to simplify scheduling, improve compliance, and
              deliver exceptional care.
            </p>
            <PillLink href="#demo" variant="light" className="mt-6">
              Book a Free Demo
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  )
}
