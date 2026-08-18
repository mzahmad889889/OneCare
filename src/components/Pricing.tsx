import { ArrowRight, Check } from 'lucide-react'
import { Chip, Eyebrow, PillLink, SectionTitle } from './primitives'

const plans = [
  {
    name: 'Starter',
    price: 'FREE',
    note: null,
    body: 'Perfect for small care agencies and independent providers getting started with digital care management.',
    cta: 'Get started',
    featuredCta: false,
    // The Figma file reads "What's inluded" — corrected here.
    includesLabel: "What's included",
    features: [
      'Caregiver Management',
      'Service User Records',
      'Digital Care Plans',
      'Smart Scheduling',
      'Mobile App Access',
      'Basic Reporting',
      'Email Support',
    ],
  },
  {
    name: 'Professional',
    price: 'Custom Pricing',
    note: null,
    body: 'Built for growing care providers that need advanced workflows, compliance tools, and operational insights.',
    cta: 'Start free for 14 days',
    featuredCta: true,
    includesLabel: 'Everything in Starter, plus:',
    features: [
      'Medication Management (MAR)',
      'Incident Reporting',
      'Advanced Reporting & Analytics',
      'Real-Time Monitoring',
      'Compliance Dashboard',
      'Role-Based Permissions',
      'Priority Support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Solution',
    note: "Tailored to your team's needs",
    body: 'For large care organizations, supported living providers, and multi-location operations with advanced requirements.',
    cta: 'Talk to sales',
    featuredCta: false,
    includesLabel: 'Everything in Professional, plus:',
    features: [
      'Multi-Location Management',
      'Custom Integrations',
      'API Access',
      'Enterprise Security',
      'Dedicated Account Manager',
      'Staff Training & Onboarding',
      'SLA & Priority Support',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <Eyebrow>Pricing</Eyebrow>
            <SectionTitle>Flexible pricing for every care provider.</SectionTitle>
            <p className="text-body mt-5 text-ink-muted">
              Choose the plan that fits your organization today and scale as your care services grow.
            </p>
          </div>
          <a
            href="#pricing"
            className="text-body inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
          >
            Compare plans <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                p.featuredCta ? 'border-ink shadow-sm' : 'border-line'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-card font-bold">{p.name}</h3>
                {p.featuredCta && <Chip tone="accent">Recommended</Chip>}
              </div>

              <p className="text-stat mt-5 font-bold">{p.price}</p>
              {p.note && <p className="text-[0.6875rem] mt-2 font-medium text-ink-faint">{p.note}</p>}

              <p className="text-body mt-5 text-ink-muted">{p.body}</p>

              <PillLink
                href="#trial"
                variant={p.featuredCta ? 'dark' : 'outline'}
                className="mt-7 w-full"
              >
                {p.cta}
              </PillLink>

              <p className="text-[0.6875rem] mt-8 font-medium text-ink-faint">{p.includesLabel}</p>
              <ul className="mt-4 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="text-body flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line bg-surface-subtle p-8">
          <div className="max-w-[680px]">
            <h3 className="text-card font-bold">Not sure which plan is right for you?</h3>
            <p className="text-body mt-2 text-ink-muted">
              Our team will help you choose the best solution for your organization and care
              services.
            </p>
          </div>
          <PillLink href="#demo">Schedule a Demo</PillLink>
        </div>
      </div>
    </section>
  )
}
