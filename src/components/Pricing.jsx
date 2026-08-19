import { ArrowRight, Check, X } from 'lucide-react'
import { Eyebrow, SectionTitle } from './primitives'

/** `on: false` renders the muted X row — Starter excludes the last two. */
const plans = [
  {
    name: 'Starter',
    price: 'FREE',
    note: null,
    recommended: false,
    body: 'Perfect for small care agencies and independent providers getting started with digital care management.',
    cta: 'Get started',
    dark: false,
    includesLabel: "What's included", // the Figma file reads "inluded"
    features: [
      { label: 'Caregiver Management', on: true },
      { label: 'Service User Records', on: true },
      { label: 'Digital Care Plans', on: true },
      { label: 'Smart Scheduling', on: true },
      { label: 'Mobile App Access', on: true },
      { label: 'Basic Reporting', on: false },
      { label: 'Email Support', on: false },
    ],
  },
  {
    name: 'Professional',
    price: 'Custom Pricing',
    note: null,
    recommended: true,
    body: 'Built for growing care providers that need advanced workflows, compliance tools, and operational insights.',
    cta: 'Start free for 14 days',
    dark: false,
    includesLabel: 'Everything in Starter, plus:',
    features: [
      { label: 'Medication Management (MAR)', on: true },
      { label: 'Incident Reporting', on: true },
      { label: 'Advanced Reporting & Analytics', on: true },
      { label: 'Real-Time Monitoring', on: true, badge: 'New' },
      { label: 'Compliance Dashboard', on: true },
      { label: 'Role-Based Permissions', on: true },
      { label: 'Priority Support', on: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Solution',
    note: "Tailored to your team's needs",
    recommended: false,
    body: 'For large care organizations, supported living providers, and multi-location operations with advanced requirements.',
    cta: 'Talk to sales',
    dark: true,
    includesLabel: 'Everything in Professional, plus:',
    features: [
      { label: 'Multi-Location Management', on: true },
      { label: 'Custom Integrations', on: true },
      { label: 'API Access', on: true },
      { label: 'Enterprise Security', on: true },
      { label: 'Dedicated Account Manager', on: true },
      { label: 'Staff Training & Onboarding', on: true },
      { label: 'SLA & Priority Support', on: true },
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <Eyebrow>Pricing</Eyebrow>
        <SectionTitle>Flexible pricing for every care provider.</SectionTitle>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-body max-w-[720px] text-ink-muted">
            Choose the plan that fits your organization today and scale as your care services grow.
          </p>
          <a
            href="#pricing"
            className="text-body inline-flex items-center gap-2 font-medium underline underline-offset-4"
          >
            Compare plans <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Three flush columns divided by hairlines, as in the comp. */}
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-line lg:grid-cols-3">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`flex flex-col bg-white p-8 ${i < 2 ? 'lg:border-r lg:border-line' : ''}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-body font-medium text-ink-muted">{p.name}</h3>
                {p.recommended && (
                  <span className="rounded-pill bg-[#e6f6ee] px-2.5 py-1 text-[0.625rem] font-semibold text-[#0f9d64]">
                    Recommended
                  </span>
                )}
              </div>

              <p className="text-stat mt-6 font-bold tracking-[-0.02em]">{p.price}</p>
              {p.note && <p className="text-[0.6875rem] mt-2 text-ink-faint">{p.note}</p>}

              <p className="text-body mt-6 text-ink-muted">{p.body}</p>

              <a
                href="#trial"
                className={`text-body mt-8 flex items-center justify-center rounded-pill px-6 py-3.5 font-medium transition-all ${
                  p.dark
                    ? 'bg-ink text-white hover:opacity-85'
                    : 'border border-line text-ink hover:bg-surface-subtle'
                }`}
              >
                {p.cta}
              </a>

              <p className="text-[0.6875rem] mt-8 text-ink-faint">{p.includesLabel}</p>

              <ul className="mt-5 space-y-3">
                {p.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    {f.on ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#d9f2e5]">
                        <Check className="h-3 w-3 text-[#0f9d64]" strokeWidth={3} />
                      </span>
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-ink-faint" strokeWidth={2} />
                    )}
                    <span className={`text-body ${f.on ? '' : 'text-ink-faint'}`}>{f.label}</span>
                    {f.badge && (
                      <span className="ml-auto rounded-pill bg-[#e5eefc] px-2 py-0.5 text-[0.625rem] font-semibold text-[#2d6fe0]">
                        {f.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-white p-8">
          <div className="max-w-[760px]">
            <h3 className="text-card font-bold">Not sure which plan is right for you?</h3>
            <p className="text-body mt-2 text-ink-muted">
              Our team will help you choose the best solution for your organization and care
              services.
            </p>
          </div>
          <a
            href="#demo"
            className="text-body shrink-0 rounded-pill bg-ink px-7 py-3.5 font-medium text-white transition-opacity hover:opacity-85"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
