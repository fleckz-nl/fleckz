import { Building2, CreditCard, Earth, Settings, User } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { cn } from 'src/lib/utils'

import { Separator } from '../ui/separator'

const SideNav = ({ className }) => {
  const { currentUser } = useAuth()
  return (
    <nav
      className={cn(
        'fixed z-30 -ml-4 h-[calc(100vh-3.5rem)] min-w-fit bg-accent/20 xs:sticky xs:top-14 xs:-ml-2 xs:block xs:w-full',
        className
      )}
    >
      <div className="flex h-screen items-center xs:items-start">
        <div className="-mt-16 flex w-full flex-col items-center px-2 xs:mt-2 xs:items-start">
          <div className="flex flex-wrap items-center gap-1 py-4">
            <Settings className="size-7 text-white" />
            <h3 className="hidden font-semibold text-white xs:block">
              App-instellingen
            </h3>
            <div className="ml-3 mt-2 hidden flex-col hyphens-auto  text-sm text-muted-foreground xs:flex">
              {currentUser.firstName}
              <span className="text-xs font-thin text-muted">
                {currentUser.email}
              </span>
            </div>
          </div>
          <Separator />
          <ul className="flex w-full min-w-fit flex-col items-center pt-2 xs:items-start">
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link
                to={routes.profile()}
                className="flex items-center gap-2 py-1 xs:px-2"
              >
                <User className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Profiel</h4>
              </Link>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link
                to={routes.profile()}
                className="flex items-center gap-2 py-1 xs:px-2"
              >
                <Building2 className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Werkplekken</h4>
              </Link>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link
                to={routes.profile()}
                className="flex items-center gap-2 py-1 xs:px-2"
              >
                <CreditCard className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Factuurgegevens</h4>
              </Link>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link
                to={routes.profile()}
                className="flex items-center gap-2 py-1 xs:px-2"
              >
                <Earth className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Tijd en Locatie</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideNav
