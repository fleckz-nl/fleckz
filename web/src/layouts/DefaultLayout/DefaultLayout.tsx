import { Link } from '@redwoodjs/router'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-row gap-2">
        <h1>
          <Link to="/">[Logo] Alluca</Link>
        </h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer>[Footer]</footer>
    </div>
  )
}

export default DefaultLayout
