import { Link } from '@redwoodjs/router'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-alluca-primary text-alluca-gray">
      <header className="flex flex-row gap-2">
        <h1>
          <Link to="/">Alluca</Link>
        </h1>
        <nav className="flex grow flex-row justify-between">
          <ul className="flex flex-row gap-2">
            <li>
              <Link to="/overview">Overzicht</Link>
            </li>
            <li>
              <Link to="/plan">Plan</Link>
            </li>
            <li>
              <Link to="/job-profiles">Functieprofielen</Link>
            </li>
          </ul>
          <div>[User Info]</div>
        </nav>
      </header>
      <main className="flex-grow bg-alluca-primary">{children}</main>
      <footer>[Footer]</footer>
    </div>
  )
}

export default AppLayout
