/** Stand-in for the OneSoftCare mark — a cluster of rounded petals around a
 *  centre node, matching the silhouette in the comp. Replace with the real
 *  SVG once it is exported from Figma. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="3.4" fill="var(--color-brand-600)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="14.6"
          y="1.8"
          width="2.8"
          height="8"
          rx="1.4"
          fill={deg % 90 === 0 ? 'var(--color-brand-500)' : 'var(--color-brand-400)'}
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </svg>
  )
}
