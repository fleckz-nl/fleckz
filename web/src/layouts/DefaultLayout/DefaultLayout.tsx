import { Link } from '@redwoodjs/router'

import logo from 'src/pages/HomePage/logo-white-text.png'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <header className="mt-10 flex flex-row items-center justify-center md:mt-24">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-28  drop-shadow-sm transition-all hover:brightness-110"
          />
        </Link>
      </header>
      <main className="-mt-6 w-full flex-grow justify-center">{children}</main>
    </div>
  )
}

export default DefaultLayout
