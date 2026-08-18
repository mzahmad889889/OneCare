import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { PillLink, SectionTitle } from './primitives'

/* Only the first answer exists in the Figma file — the other eight rows are
   collapsed accordion headers with no answer text behind them. The remaining
   answers are drafted here so the component works; they should be reviewed
   before launch. */
const faqs = [
  {
    q: 'Is OneSoftCare easy to set up?',
    a: 'Yes. OneSoftCare is cloud-based and can be configured quickly, allowing your team to start managing care with minimal training.',
    fromDesign: true,
  },
  {
    q: 'Do caregivers need technical experience?',
    a: 'No. The caregiver mobile app is designed for everyday use — checking in to a visit, recording notes, and confirming medication take only a few taps.',
    fromDesign: false,
  },
  {
    q: 'Can we migrate our existing data?',
    a: 'Yes. Caregiver profiles, service user records, and care plans can be imported from spreadsheets or your current system during onboarding.',
    fromDesign: false,
  },
  {
    q: 'What features are included?',
    a: 'Every plan covers caregiver and service user management, digital care plans, smart scheduling, mobile app access, and reporting. Medication management, advanced analytics, and compliance tooling are available on higher tiers.',
    fromDesign: false,
  },
  {
    q: 'Does OneSoftCare include a mobile app?',
    a: 'Yes. The mobile app is included on every plan and lets caregivers complete visits, administer medication, and submit reports from anywhere.',
    fromDesign: false,
  },
  {
    q: 'Can multiple team members use the platform?',
    a: 'Yes. You can invite your whole organization and assign role-based permissions so each person sees only what they need.',
    fromDesign: false,
  },
  {
    q: 'Is our data secure?',
    a: 'Data is encrypted in transit and at rest, with full audit trails on every record and regular independent security review.',
    fromDesign: false,
  },
  {
    q: 'Who can access our information?',
    a: 'Only the people you invite. Access is controlled by role-based permissions, and every view or change is recorded in the audit log.',
    fromDesign: false,
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-8 lg:grid-cols-[minmax(0,1fr)_716px]">
        <div>
          <SectionTitle className="mt-0">Everything you need to know.</SectionTitle>
          <p className="mt-5 text-[1.0625rem] leading-[1.5] text-ink-muted">
            Find answers to the most common questions about OneSoftCare Solution.
          </p>

          <div className="mt-10 max-w-[390px] rounded-3xl border border-line bg-surface-subtle p-8">
            <p className="text-[1.25rem] font-semibold">Still have questions?</p>
            <p className="text-body mt-3 text-ink-muted">
              Our team is ready to help you find the right solution for your care organization.
            </p>
            <PillLink href="#demo" className="mt-6">
              Contact Support
            </PillLink>
          </div>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-card font-bold">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-ink-muted" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-ink-muted" />
                  )}
                </button>
                {isOpen && <p className="text-body -mt-1 pb-6 text-ink-muted">{f.a}</p>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
