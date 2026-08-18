const scale = [
  { name: 'display', cls: 'text-display', figma: '56.7 / 63' },
  { name: 'h2', cls: 'text-h2', figma: '44.8–45.9 / 60' },
  { name: 'h3', cls: 'text-h3', figma: '30.4 / 40' },
  { name: 'body', cls: 'text-body', figma: '18 / 27' },
  { name: 'label', cls: 'text-label', figma: '12–13.7 / 17.2–19.3' },
]

const swatches = [
  'bg-brand-500',
  'bg-brand-600',
  'bg-ink',
  'bg-surface-subtle',
  'bg-card-mint',
  'bg-card-sky',
  'bg-card-rose',
  'bg-card-peach',
]

export default function App() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-label font-semibold tracking-widest text-brand-600 uppercase">
        Environment check
      </p>
      <h1 className="text-display mt-3 font-semibold tracking-tight">OneCare</h1>
      <p className="text-body mt-4 text-ink-muted">
        Vite + React + TypeScript + Tailwind v4, with Inter self-hosted. Type scale below is
        taken from the Figma frame <code>OneCare Web</code>; colours are provisional.
      </p>

      <h2 className="text-h3 mt-16 font-semibold">Type scale</h2>
      <ul className="mt-6 divide-y divide-black/10">
        {scale.map((s) => (
          <li key={s.name} className="flex items-baseline justify-between gap-6 py-4">
            <span className={`${s.cls} font-medium`}>{s.name}</span>
            <span className="text-label shrink-0 text-ink-muted">Figma {s.figma}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-h3 mt-16 font-semibold">Palette</h2>
      <p className="text-label mt-2 text-ink-muted">Placeholders — pending exact Figma values.</p>
      <div className="mt-6 grid grid-cols-4 gap-3">
        {swatches.map((c) => (
          <div key={c}>
            <div className={`${c} h-16 rounded-lg ring-1 ring-black/10`} />
            <p className="text-label mt-2 text-ink-muted">{c.replace('bg-', '')}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
