import { ArrowUp, Star } from 'lucide-react'
import { asset } from '../lib/asset'
import { Eyebrow, Lead, SectionTitle } from './primitives'

/* NOTE: the quotes below are the Figma file's own copy, which is still the
   unedited Framer template filler — it referenced "Flowpath" and describes
   agencies, restaurants and hardware firms rather than care providers. The
   brand name is swapped to OneSoftCare here so nothing ships with a foreign
   product name; the quotes themselves still need writing by the client.

   The company wordmarks are set as styled text. The comp uses bespoke logo
   vectors (KUDOS, Huggl, Payble, …) that would each need exporting. */

const columns = [
  [
    {
      body: 'We automated our entire client onboarding and project briefing flow. What used to take our account team half a day now happens before we even open our laptops.',
      name: 'Lena Marchand',
      role: 'Creative Director',
      avatar: 'avatar-1.webp',
      company: 'KUDOS',
    },
    {
      body: "Running a creative agency means constant context switching. OneSoftCare handles the admin so our team stays in creative mode, it's the invisible backbone of how we work.",
      name: 'Omar Bilal',
      role: 'Head of Operations',
      avatar: 'avatar-2.webp',
      company: 'AGENTIC®',
    },
    {
      body: 'Patient intake, appointment reminders, internal escalations, all automated with full audit trails. For a healthcare org, the compliance logging alone is worth every penny.',
      name: 'Dr. Claire Sutton',
      role: 'Chief Operating Officer',
      avatar: 'avatar-3.webp',
      company: 'HealthWell',
    },
  ],
  [
    {
      body: 'We’re a small team moving fast. OneSoftCare lets us punch way above our weight, our ops run like a 50-person company and we’re still under 10.',
      name: 'Ben Okoro',
      role: 'Co-founder & CTO',
      avatar: 'avatar-4.webp',
      company: 'Huggl',
    },
    {
      body: 'Invoice reconciliation, dunning sequences, churn alerts, all automated. Our finance team stopped doing data entry and started doing actual finance.',
      name: 'Isabelle Forte',
      role: 'VP of Revenue Operations',
      avatar: 'avatar-5.webp',
      company: 'Payble',
    },
    {
      body: 'Order routing, driver assignments, low-stock alerts, OneSoftCare runs our backend so our staff can focus on the food. Setup took an afternoon, ROI was immediate.',
      name: 'Marco Ricci',
      role: 'Operations Manager',
      avatar: 'avatar-6.webp',
      company: 'Pepper',
    },
  ],
  [
    {
      body: 'Every new project used to mean a dozen Slack messages and a shared doc nobody updated. Now the moment a contract is signed, everything kicks off automatically.',
      name: 'Yuki Tanaka',
      role: 'Studio Director',
      avatar: 'avatar-7.webp',
      company: '+XZERO®',
    },
    {
      body: 'We run personalized wellness check-ins at scale across thousands of patients. OneSoftCare made something that felt impossible feel completely routine.',
      name: 'Priya Nair',
      role: 'Director of Patient Experience',
      avatar: 'avatar-8.webp',
      company: 'VISTIQ',
    },
    {
      body: 'Hardware meets software meets ops, our stack is complex. OneSoftCare is the glue that holds it all together, routing signals between tools we thought could never talk to each other.',
      name: 'James Kimble',
      role: 'Head of Product',
      avatar: 'avatar-9.webp',
      company: 'aerosound',
    },
  ],
]

const stats = [
  { label: 'Average G2 rating', value: '4.9/5', delta: 'from 4.7 last quarter' },
  { label: 'Verified reviews', value: '2,400+', delta: '340 this month' },
  { label: 'Would recommend', value: '97%', delta: '2% vs last quarter' },
  { label: 'Teams worldwide', value: '9,000+', delta: '34% year over year' },
]

const ratings = [
  { site: 'G2', score: '4.9/5', count: '/ 1,200+ reviews' },
  { site: 'Capterra', score: '4.8/5', count: '/ 800+ reviews' },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-5 w-7 text-line" fill="currentColor" aria-hidden>
      <path d="M0 24V13.2C0 5.9 4.2 1 11.4 0l1 3.2C8.3 4.6 6.2 7.2 6.2 10.4H12V24H0Zm20 0V13.2C20 5.9 24.2 1 31.4 0l1 3.2c-4.1 1.4-6.2 4-6.2 7.2H32V24H20Z" />
    </svg>
  )
}

function Card({ q }) {
  return (
    <figure className="rounded-2xl border border-line bg-white p-6">
      <QuoteMark />
      <blockquote className="text-body mt-5 text-ink-soft">{q.body}</blockquote>
      <figcaption className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Square, softly rounded avatars in the comp - not circles. */}
          <img
            src={asset(q.avatar)}
            alt=""
            loading="lazy"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div>
            <p className="text-[1rem] font-bold">{q.name}</p>
            <p className="text-[0.6875rem] font-medium text-ink-faint">{q.role}</p>
          </div>
        </div>
        <span className="text-[0.6875rem] shrink-0 font-bold tracking-wide text-ink-faint">
          {q.company}
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface-subtle py-24">
      <div className="mx-auto max-w-[1200px] px-8 text-center">
        <Eyebrow>Social proof</Eyebrow>
        <SectionTitle>Loved by teams that move fast.</SectionTitle>
        <Lead className="mx-auto max-w-[640px]">
          9,000+ teams run their operations on OneSoftCare. Here&apos;s what they say.
        </Lead>

        {/* Each rating sits in its own bordered pill. */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {ratings.map((r) => (
            <div
              key={r.site}
              className="flex items-center gap-2.5 rounded-pill border border-line bg-white px-5 py-2.5"
            >
              <span className="text-[1.125rem] font-bold">{r.site}</span>
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-warn-soft text-warn-soft" />
                ))}
              </span>
              <span className="text-[0.75rem] font-semibold">{r.score}</span>
              <span className="text-[0.75rem] text-ink-faint">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The columns scroll inside this box and are clipped by it, so nothing
          spills over the sections above or below. Hovering a column pauses
          only that column — the other two keep moving. */}
      <div className="marquee-viewport mx-auto mt-14 max-w-[1200px] px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((col, i) => (
            <div key={i} className="marquee-col space-y-6" style={{ animationDelay: `${i * -6}s` }}>
              {[...col, ...col].map((q, j) => (
                <Card key={`${q.name}-${j}`} q={q} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Label sits above the number in the comp, with a green delta below. */}
      <div className="mx-auto mt-16 grid max-w-[1200px] gap-8 px-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-[0.6875rem] font-medium text-ink-faint">{s.label}</p>
            <p className="text-stat mt-2 font-bold tracking-[-0.02em]">{s.value}</p>
            <p className="text-[0.6875rem] mt-2 flex items-center justify-center gap-1 font-medium text-accent">
              <ArrowUp className="h-3 w-3" strokeWidth={2.5} />
              {s.delta}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
