type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-row gap-2">
        <h1>Alluca</h1>
        <nav className="flex grow flex-row justify-between">
          <ul className="flex flex-row">
            <li>[Menu Item 2]</li>
            <li>[Menu Item 2]</li>
          </ul>
          <div>[User Info]</div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer>[Footer]</footer>
    </div>
  )
}

export default AppLayout
