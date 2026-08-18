import { ArrowRight, Clock, Lock, ShieldCheck, Zap } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    stat: '100%',
    title: 'Compliance Ready',
    body: 'Audit-ready records with full activity history, so inspections are never a scramble.',
  },
  {
    icon: Zap,
    stat: 'Real-Time',
    title: 'Live Visibility',
    body: 'Track visits, shifts and medication as they happen across every location.',
  },
  {
    icon: Lock,
    stat: 'Secure',
    title: 'Role-Based Access',
    body: 'Enterprise-grade security with encrypted data and permission-based access controls.',
  },
  {
    icon: Clock,
    stat: '24/7',
    title: 'Cloud Access',
    body: 'Access your care management platform anytime, anywhere, from any device.',
  },
]

const badges = ['SOC 2 Type II', 'GDPR Compliant', '99.9% SLA Uptime', '24/7 Support']

export function Trust() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-label font-medium text-ink-faint">By the numbers</p>

        <div className="mt-4 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="text-[1.5rem] leading-[1.3] font-semibold tracking-tight text-balance lg:text-h3">
            Trusted by Care Agencies, Supported Living Providers &amp; Healthcare Teams
          </h2>
          <div className="md:pb-1">
            <p className="text-[15px] leading-relaxed text-ink-muted">
              From independent care providers to enterprise healthcare organizations, OneSoftCare
              simplifies operations, empowers caregivers, and helps deliver exceptional care every
              day.
            </p>
            <a
              href="#stories"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
              Read customers stories <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white p-6">
              <p.icon className="h-5 w-5 text-ink-soft" strokeWidth={1.6} />
              <p className="mt-5 text-[26px] font-semibold tracking-tight">{p.stat}</p>
              <p className="mt-1 text-sm font-semibold">{p.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2 text-[13px] text-ink-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.8} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
