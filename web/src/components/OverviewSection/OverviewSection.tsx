export function OverviewSection({ children, ...props }) {
  return (
    <div className="mx-auto mb-14" {...props}>
      {children}
    </div>
  )
}

export function OverviewHeader({ children, ...props }) {
  return (
    <h2
      className="mb-2 flex items-center text-xl font-bold text-white/90"
      {...props}
    >
      {children}
    </h2>
  )
}

export function OverviewContent({ children, ...props }) {
  return (
    <div className="grid sm:grid-cols-2 sm:gap-4" {...props}>
      {children}
    </div>
  )
}

export default OverviewSection
