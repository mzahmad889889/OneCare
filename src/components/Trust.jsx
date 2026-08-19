import { ArrowRight, Clock, FileText, ShieldCheck, Star, SunDim, UserRound, Users, Zap } from 'lucide-react'
import { asset } from '../lib/asset'
import { Eyebrow } from './primitives'

/** Four stat cards. Icons match the comp exactly (Users / Zap / SunDim / Star). */
const cards = [
  {
    Icon: Users,
    stat: '100%',
    title: 'Digital Care Documentation',
    body: 'Replace paperwork with secure digital records, care plans, and real-time documentation.',
  },
  {
    Icon: Zap,
    stat: 'Real-Time',
    title: 'Care Monitoring',
    body: 'Track visits, caregiver activity, schedules, and performance as they happen.',
  },
  {
    Icon: SunDim,
    stat: 'Secure',
    title: 'Role-Based Access',
    body: 'Enterprise-grade security with encrypted data and permission-based access controls.',
  },
  {
    Icon: Star,
    stat: '24/7',
    title: 'Cloud Access',
    body: 'Access your care management platform anytime, anywhere, from any device.',
  },
]

const badges = [
  { Icon: ShieldCheck, strong: 'SOC 2', rest: 'Type II' },
  { Icon: FileText, strong: 'GDPR', rest: 'Compliant' },
  { Icon: Clock, strong: '99.9% SLA', rest: 'Uptime' },
  { Icon: UserRound, strong: '24/7', rest: 'Support' },
]

const avatars = ['avatar-1', 'avatar-2', 'avatar-5', 'avatar-3', 'avatar-4']

export function Trust() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="mx-auto max-w-[1200px] px-8">
        <Eyebrow>By the numbers</Eyebrow>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <h2 className="text-[clamp(1.75rem,2.78vw,2.5rem)] leading-[1.2] font-bold tracking-[-0.02em]">
            Trusted by Care Agencies, Supported Living Providers &amp; Healthcare Teams
          </h2>

          <div className="flex flex-col lg:items-end lg:text-right">
            <p className="text-body max-w-[520px] text-ink-muted">
              From independent care providers to enterprise healthcare organizations, OneSoftCare
              simplifies operations, empowers caregivers, and helps deliver exceptional care every
              day.
            </p>
            <a
              href="#stories"
              className="text-body mt-auto inline-flex items-center gap-2 pt-8 font-medium underline underline-offset-4"
            >
              Read customers stories <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Four separate white cards, ~11px apart in the comp. */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, stat, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-subtle">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <p className="text-stat mt-7 font-bold tracking-[-0.02em]">{stat}</p>
              <p className="text-card mt-4 font-bold">{title}</p>
              <p className="text-body mt-3 text-ink-muted">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-8">
          {/* Avatar stack + rating */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((a) => (
                <img
                  key={a}
                  src={asset(`${a}.webp`)}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                />
              ))}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-subtle text-[0.625rem] font-semibold ring-2 ring-white">
                +9K
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-warn-soft text-warn-soft" />
                  ))}
                </span>
                <span className="text-[0.625rem] font-semibold">4.9/5</span>
              </div>
              <p className="text-[0.6875rem] mt-1 font-medium text-ink-faint">
                from 2,4K+ verified reviews
              </p>
            </div>
          </div>

          {/* Compliance badges - bold term, muted qualifier */}
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {badges.map(({ Icon, strong, rest }) => (
              <li key={strong} className="flex items-center gap-1.5 text-[0.6875rem]">
                <Icon className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.6} />
                <span className="font-semibold">{strong}</span>
                <span className="text-ink-faint">{rest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
