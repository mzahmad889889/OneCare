import {
  AlertCircle,
  CheckCircle,
  Clock,
  Star,
  SunDim,
  TrendingDown,
  TrendingUp,
  Unplug,
  User,
  XCircle,
  Zap,
} from 'lucide-react'
import { Eyebrow, SectionTitle } from './primitives'

const without = {
  Icon: XCircle,
  heading: 'Without OneSoftCare',
  items: [
    {
      Icon: Clock,
      title: 'Endless Paperwork',
      body: 'Care notes, medication records, and forms scattered across paper and spreadsheets.',
      chip: 'Manual processes',
    },
    {
      Icon: User,
      title: 'Scheduling Chaos',
      body: 'Managing rotas manually leads to conflicts, missed visits, and unnecessary overtime.',
      chip: 'Time-consuming planning',
    },
    {
      Icon: Unplug,
      title: 'Disconnected Systems',
      body: 'Payroll, compliance, reporting, and care records live in separate tools.',
      chip: 'Multiple platforms',
    },
    {
      Icon: TrendingDown,
      title: 'Limited Visibility',
      body: "Managers can't easily track live visits, caregiver activity, or service delivery.",
      chip: 'Reactive management',
    },
    {
      Icon: AlertCircle,
      title: 'Compliance Risks',
      body: 'Missing documentation and delayed reporting increase audit and regulatory risks.',
      chip: 'Higher compliance risk',
    },
  ],
}

const withUs = {
  Icon: Zap,
  heading: 'With OneSoftCare',
  items: [
    {
      Icon: Star,
      title: 'Everything in One Platform',
      body: 'Manage caregivers, service users, medication, scheduling, and reporting from one dashboard.',
      chip: 'Centralized operations',
    },
    {
      Icon: CheckCircle,
      title: 'Smart Scheduling',
      body: 'Create rotas in minutes, assign caregivers, and manage availability with ease.',
      chip: 'Faster workforce planning',
    },
    {
      Icon: SunDim,
      title: 'Real-Time Care Monitoring',
      body: 'Track live visits, check-ins, medication compliance, and shift progress instantly.',
      chip: 'Live operational visibility',
    },
    {
      Icon: TrendingUp,
      title: 'Automated Compliance',
      body: 'Digital care records, audit trails, and secure documentation help you stay inspection-ready.',
      chip: 'Built for compliance',
    },
    {
      Icon: AlertCircle,
      title: 'Mobile Workforce',
      body: 'Caregivers complete visits, administer medication, and submit reports directly from the mobile app.',
      chip: 'Work from anywhere',
    },
  ],
}

/** One comparison panel. The "without" side is deliberately muted in the comp. */
function Panel({ data, muted }) {
  const { Icon, heading, items } = data
  return (
    <div
      className={`rounded-3xl p-8 ${muted ? 'bg-surface-subtle' : 'border border-line bg-white'}`}
    >
      <div className="flex items-center gap-4 pb-7">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            muted ? 'bg-white/70' : 'bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
          }`}
        >
          <Icon
            className={`h-5 w-5 ${muted ? 'text-ink-faint' : 'text-ink'}`}
            strokeWidth={1.6}
          />
        </span>
        <h3 className={`text-card font-bold ${muted ? 'text-ink-faint' : 'text-ink'}`}>
          {heading}
        </h3>
      </div>

      <div className={`border-t ${muted ? 'border-line/70' : 'border-line'}`} />

      <ul className="mt-7 space-y-7">
        {items.map((it) => (
          <li key={it.title} className="flex gap-4">
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                muted ? 'bg-white/70' : 'bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
              }`}
            >
              <it.Icon
                className={`h-5 w-5 ${muted ? 'text-ink-faint' : 'text-ink'}`}
                strokeWidth={1.6}
              />
            </span>
            <div>
              <p className={`text-card font-bold ${muted ? 'text-ink-faint' : 'text-ink'}`}>
                {it.title}
              </p>
              <p className="text-body mt-2 text-ink-muted">{it.body}</p>
              <span
                className={`mt-3 inline-flex rounded-pill px-2.5 py-1 text-[0.625rem] font-semibold ${
                  muted ? 'bg-line/50 text-ink-faint' : 'bg-accent/10 text-accent'
                }`}
              >
                {it.chip}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Problem() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8 text-center">
        <Eyebrow>Sound familiar?</Eyebrow>
        <SectionTitle>Less Admin. Better Care.</SectionTitle>
        <p className="mx-auto mt-6 max-w-[760px] text-[1.0625rem] leading-[1.5] text-ink-muted">
          Stop juggling paperwork, spreadsheets, and disconnected systems. OneSoftCare brings your
          entire care operation into one secure platform - so your team can spend more time
          delivering care.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1200px] gap-3 px-8 lg:grid-cols-2">
        <Panel data={without} muted />
        <Panel data={withUs} />
      </div>

      {/* Two stat cards and the blue CTA card - #3781da, sampled from the comp. */}
      <div className="mx-auto mt-3 grid max-w-[1200px] gap-3 px-8 lg:grid-cols-3">
        {[
          {
            stat: '50%',
            title: 'Administrative time reduced',
            body: 'Automating everyday care operations.',
          },
          {
            stat: '3x',
            title: 'More operational efficiency',
            body: 'Manage more service users without increasing admin.',
          },
        ].map((s) => (
          <div
            key={s.stat}
            className="flex min-h-[300px] flex-col justify-between rounded-2xl border border-line bg-white p-8"
          >
            <p className="text-stat font-bold tracking-[-0.02em]">{s.stat}</p>
            <div>
              <p className="text-card font-bold">{s.title}</p>
              <p className="text-body mt-2 text-ink-muted">{s.body}</p>
            </div>
          </div>
        ))}

        <div className="flex min-h-[300px] flex-col rounded-2xl bg-[#3781da] p-8 text-white">
          <p className="text-card font-bold">Ready to Modernize Your Care Operations?</p>
          <p className="text-body mt-4 text-white/90">
            Join care providers using OneSoftCare to simplify scheduling, improve compliance, and
            deliver exceptional care.
          </p>
          <a
            href="#demo"
            className="text-body mt-auto flex items-center justify-center rounded-pill bg-ink px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-85"
          >
            Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}
