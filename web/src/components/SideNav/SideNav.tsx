import { Link, routes } from '@redwoodjs/router'
import { cn } from 'src/lib/utils'
const SideNav = ({ className }) => {
    <nav
      className={cn(
        'fixed z-30 -ml-4 h-[calc(100vh-3.5rem)] min-w-fit bg-accent/20 xs:sticky xs:top-14 xs:-ml-2 xs:block xs:w-full',
        className
      )}
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link to={routes.profile()}>
                <User className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Profiel</h4>
              </Link>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link to={routes.profile()}>
                <Building2 className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Werkplekken</h4>
              </Link>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link to={routes.profile()}>
                <CreditCard className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Factuurgegevens</h4>
              </Link>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <Link to={routes.profile()}>
                <Earth className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Tijd en Locatie</h4>
              </Link>
            </li>
