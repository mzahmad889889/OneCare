import { Star } from 'lucide-react'
import { asset } from '../lib/asset'
import { Eyebrow, Lead, SectionTitle } from './primitives'

/* NOTE: the quotes below are the Figma file's own copy, which is still the
   unedited Framer template filler — it referenced "Flowpath" and describes
   agencies, restaurants and hardware firms rather than care providers. The
   brand name is swapped to OneSoftCare here so nothing ships with a foreign
   product name; the quotes themselves still need writing by the client. */

/** Each quote is { body, name, role, avatar }; one array per column. */
const columns = [
  [
    {
      body: 'We automated our entire client onboarding and project briefing flow. What used to take our account team half a day now happens before we even open our laptops.',
      name: 'Lena Marchand',
      role: 'Creative Director',
      avatar: 'avatar-1.webp',
    },
    {
      body: "Running a creative agency means constant context switching. OneSoftCare handles the admin so our team stays in creative mode, it's the invisible backbone of how we work.",
      name: 'Omar Bilal',
      role: 'Head of Operations',
      avatar: 'avatar-2.webp',
    },
    {
      body: 'Patient intake, appointment reminders, internal escalations, all automated with full audit trails. For a healthcare org, the compliance logging alone is worth every penny.',
      name: 'Dr. Claire Sutton',
      role: 'Chief Operating Officer',
      avatar: 'avatar-3.webp',
    },
  ],
  [
    {
      body: 'We’re a small team moving fast. OneSoftCare lets us punch way above our weight, our ops run like a 50-person company and we’re still under 10.',
      name: 'Ben Okoro',
      role: 'Co-founder & CTO',
      avatar: 'avatar-4.webp',
    },
    {
      body: 'Invoice reconciliation, dunning sequences, churn alerts, all automated. Our finance team stopped doing data entry and started doing actual finance.',
      name: 'Isabelle Forte',
      role: 'VP of Revenue Operations',
      avatar: 'avatar-5.webp',
    },
    {
      body: 'Order routing, driver assignments, low-stock alerts, OneSoftCare runs our backend so our staff can focus on the food. Setup took an afternoon, ROI was immediate.',
      name: 'Marco Ricci',
      role: 'Operations Manager',
      avatar: 'avatar-6.webp',
    },
  ],
  [
    {
      body: 'Every new project used to mean a dozen Slack messages and a shared doc nobody updated. Now the moment a contract is signed, everything kicks off automatically.',
      name: 'Yuki Tanaka',
      role: 'Studio Director',
      avatar: 'avatar-7.webp',
    },
    {
      body: 'We run personalized wellness check-ins at scale across thousands of patients. OneSoftCare made something that felt impossible feel completely routine.',
      name: 'Priya Nair',
      role: 'Director of Patient Experience',
      avatar: 'avatar-8.webp',
    },
    {
      body: 'Hardware meets software meets ops, our stack is complex. OneSoftCare is the glue that holds it all together, routing signals between tools we thought could never talk to each other.',
      name: 'James Kimble',
      role: 'Head of Product',
      avatar: 'avatar-9.webp',
    },
  ],
]

const stats = [
  { value: '4.9/5', label: 'Average G2 rating', delta: 'from 4.7 last quarter' },
  { value: '2,400+', label: 'Verified reviews', delta: '340 this month' },
  { value: '97%', label: 'Would recommend', delta: '2% vs last quarter' },
  { value: '9,000+', label: 'Teams worldwide', delta: '34% year over year' },
]

function Card({ q }) {
  return (
    <figure className="rounded-2xl border border-line bg-white p-6">
      <blockquote className="text-body text-ink-soft">{q.body}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <img src={asset(q.avatar)} alt="" loading="lazy" className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="text-[1rem] font-bold">{q.name}</p>
          <p className="text-[0.6875rem] font-medium text-ink-faint">{q.role}</p>
        </div>
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {[
            { site: 'G2', score: '4.9/5', count: '/ 1,200+ reviews' },
            { site: 'Capterra', score: '4.8/5', count: '/ 800+ reviews' },
          ].map((r) => (
            <div key={r.site} className="flex items-center gap-2">
              <span className="text-[1rem] font-semibold">{r.site}</span>
              <Star className="h-3.5 w-3.5 fill-warn-amber text-warn-amber" />
              <span className="text-[0.625rem] font-semibold">{r.score}</span>
              <span className="text-[0.6875rem] font-medium text-ink-faint">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Three columns that drift upward, as the comp's repeated stacks imply.
          Motion is disabled for users who ask for reduced motion. */}
      <div className="mx-auto mt-14 grid max-w-[1200px] gap-6 px-8 md:grid-cols-2 lg:grid-cols-3">
        {columns.map((col, i) => (
          <div
            key={i}
            className="marquee-col space-y-6"
            style={{ animationDelay: `${i * -6}s` }}
          >
            {[...col, ...col].map((q, j) => (
              <Card key={`${q.name}-${j}`} q={q} />
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-[1200px] gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-stat font-bold">{s.value}</p>
            <p className="text-[0.6875rem] mt-2 font-medium text-ink-faint">{s.label}</p>
            <p className="text-[0.6875rem] mt-1 font-medium text-accent">{s.delta}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
