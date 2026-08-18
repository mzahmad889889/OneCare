import { Check } from 'lucide-react'
import { asset } from '../lib/asset'
import { SectionTitle } from './primitives'

/** Card surface + button colours are the exact fills from Figma nodes
 *  231:278 / 231:324 / 231:371 / 231:418. */
const cards = [
  {
    title: 'AI care plan suggestions',
    body: 'Create staff rotas in minutes, assign caregivers based on availability, and eliminate scheduling conflicts with an intuitive planner.',
    bullets: [
      'Drag-and-drop rota builder',
      'Automatic conflict detection',
      'Publish schedules instantly',
    ],
    cta: 'Explore Scheduling',
    surface: '#eef6e6',
    button: '#163300',
    image: 'feature-ai-care.webp',
  },
  {
    title: 'Caregiver & Service User Management',
    body: 'Manage caregiver profiles, qualifications, availability, service user records, care plans, emergency contacts, and documentation.',
    bullets: [
      'Centralized caregiver & client records',
      'Digital care plans & documentation',
      'Secure role-based access',
    ],
    cta: 'Explore Management',
    surface: '#f0dfe9',
    button: '#320707',
    image: 'feature-caregivers.webp',
  },
  {
    title: 'Medication & Care Records',
    body: 'Digitally manage medication administration, care notes, incidents, and visit documentation with complete accuracy.',
    bullets: [
      'Digital MAR & medication tracking',
      'Care notes & incident reporting',
      'Complete audit trail',
    ],
    cta: 'Explore Medication',
    surface: '#dff0f0',
    button: '#21231d',
    image: 'feature-medication.webp',
  },
  {
    title: 'Reports & Real-Time Monitoring',
    body: 'Monitor daily operations with live dashboards, performance insights, and compliance reports.',
    bullets: [
      'Live visit & caregiver tracking',
      'Custom reports & analytics',
      'Compliance & performance insights',
    ],
    cta: 'Explore Analytics',
    surface: '#f0e6df',
    button: '#260a2f',
    image: 'feature-reports.webp',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="max-w-[520px]">
          <SectionTitle className="mt-0">Everything you need to deliver better care.</SectionTitle>
          <p className="text-body mt-5 text-ink-muted">
            Powerful tools designed to simplify operations, improve compliance, and empower every
            member of your care team.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {cards.map((c) => (
            <article
              key={c.title}
              className="grid items-center gap-8 overflow-hidden rounded-3xl p-10 lg:grid-cols-2 lg:p-12"
              style={{ backgroundColor: c.surface }}
            >
              <div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.3] font-semibold tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft/80">{c.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="text-body flex items-center gap-2.5">
                      <Check className="h-4 w-4 shrink-0" style={{ color: c.button }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#features"
                  className="mt-8 inline-flex items-center rounded-pill px-6 py-3.5 text-body font-medium text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: c.button }}
                >
                  {c.cta}
                </a>
              </div>

              <img
                src={asset(c.image)}
                alt=""
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
