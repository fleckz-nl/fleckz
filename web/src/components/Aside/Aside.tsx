import { Building2, CreditCard, Earth, Settings, User } from 'lucide-react'

import { useAuth } from 'src/auth'

import { Separator } from '../ui/separator'

const Aside = () => {
  const { currentUser } = useAuth()
  return (
    <aside className="fixed z-30 -ml-4 h-[calc(100vh-3.5rem)] min-w-fit bg-accent/20 xs:sticky xs:top-14 xs:-ml-2 xs:block xs:w-full">
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
              <a href="/">
                <User className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Profiel</h4>
              </a>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <a href="/">
                <Building2 className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Werkplekken</h4>
              </a>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <a href="/">
                <CreditCard className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Factuurgegevens</h4>
              </a>
            </li>
            <li className="w-full py-1 pl-1 xs:pl-0">
              <a href="/">
                <Earth className="size-5" />{' '}
                <h4 className="hidden text-left xs:block">Tijd en Locatie</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Aside
