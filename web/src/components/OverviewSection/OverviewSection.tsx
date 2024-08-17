export function OverviewSection({ children, ...props }) {
  return (
    <section className="mx-auto" {...props}>
      {children}
    </section>
  )
}

export function OverviewHeader({ children, ...props }) {
  return (
    <h2 className="mb-2 text-xl font-bold" {...props}>
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
