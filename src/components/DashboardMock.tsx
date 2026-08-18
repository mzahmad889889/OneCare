/** Placeholder for the tablet dashboard render used in the hero.
 *  The comp uses a photographic mockup (hands holding a tablet) that still
 *  needs exporting from Figma — this is a lightweight stand-in with the same
 *  silhouette and layout so the section composes correctly. */

const stats = [
  { label: 'Completed shifts', value: '24', delta: '+11.9%', tint: 'bg-emerald-50 text-emerald-600' },
  { label: 'Missed visits', value: '2', delta: '+66.9%', tint: 'bg-rose-50 text-rose-600' },
  { label: 'Medication compliance', value: '83.9%', delta: '+16.9%', tint: 'bg-sky-50 text-sky-600' },
  { label: 'Active caregivers', value: '3', delta: '+40.0%', tint: 'bg-violet-50 text-violet-600' },
]

export function DashboardMock() {
  return (
    <div className="rounded-[26px] bg-ink p-2.5 shadow-2xl ring-1 ring-black/10">
      <div className="overflow-hidden rounded-[18px] bg-white">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-sm bg-ink-faint/40" />
          <div className="flex items-center gap-1.5 rounded-pill bg-surface-subtle px-2.5 py-1">
            <div className="h-3 w-3 rounded-sm bg-brand-500" />
            <span className="text-[9px] font-semibold">One SoftCare</span>
          </div>
          <div className="flex items-center gap-1.5">
            {['bg-rose-500', 'bg-amber-400', 'bg-brand-500'].map((c) => (
              <span key={c} className={`h-2.5 w-2.5 rounded-full ${c}`} />
            ))}
            <span className="ml-1 h-4 w-4 rounded-full bg-ink-faint/30" />
          </div>
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="flex w-9 flex-col items-center gap-3 border-r border-line py-3">
            <span className="h-5 w-5 rounded-md bg-brand-500" />
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="h-3.5 w-3.5 rounded bg-ink-faint/25" />
            ))}
          </div>

          <div className="flex-1 p-3">
            <p className="text-[11px] font-semibold">Care Overview</p>
            <p className="text-[7px] text-ink-faint">
              High-level metrics and trends for your care services.
            </p>

            <div className="mt-2.5 grid grid-cols-4 gap-1.5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-line p-1.5">
                  <div className="flex items-center gap-1">
                    <span className={`h-3 w-3 rounded-full ${s.tint}`} />
                    <span className="truncate text-[6px] text-ink-muted">{s.label}</span>
                  </div>
                  <p className="mt-0.5 text-[13px] font-semibold">{s.value}</p>
                  <p className="text-[5.5px] text-emerald-600">{s.delta} vs previous 7 days</p>
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-3 gap-1.5">
              <div className="col-span-2 rounded-lg border border-line p-2">
                <p className="text-[7px] font-semibold">Today&apos;s Schedule</p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="h-2 w-10 rounded bg-surface-subtle" />
                  <span className="h-3 w-4 rounded-sm bg-emerald-400" />
                  <span className="h-3 w-6 rounded-sm bg-emerald-400" />
                  <span className="h-3 w-3 rounded-sm bg-emerald-400" />
                </div>
                <svg viewBox="0 0 200 46" className="mt-2 w-full" preserveAspectRatio="none">
                  <path
                    d="M0 34 L28 26 L52 32 L78 14 L104 24 L132 10 L162 22 L200 12"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M0 40 L30 36 L58 40 L86 30 L112 38 L140 28 L168 36 L200 30"
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <div className="rounded-lg border border-line p-2">
                <p className="text-[7px] font-semibold">Recent Visits</p>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="mt-1.5 flex items-center gap-1">
                    <span className="h-3.5 w-3.5 rounded-full bg-ink-faint/30" />
                    <span className="h-1.5 flex-1 rounded bg-surface-subtle" />
                    <span className="h-2 w-5 rounded-sm bg-emerald-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
