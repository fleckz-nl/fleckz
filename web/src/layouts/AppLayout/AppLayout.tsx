import { Copyright } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Nav from 'src/components/Nav/Nav'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from 'src/components/ui/navigation-menu'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu'
import { Separator } from 'src/components/ui/separator'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <Nav />
      <main className="max-w-full flex-grow flex-col break-words bg-transparent px-4 py-20">
        {children}
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-2 p-4 text-accent/20 sm:justify-between">
        <div className="copyright-section flex items-center gap-0.5">
          <Copyright size={20} />
          <span className="text-nowrap font-medium">2024 Fleckz</span>
        </div>
        <Separator className="opacity-10 xs:hidden"></Separator>
        <NavigationMenu className="privacy-and-services-section">
          <NavigationMenuList className="mr-2 flex gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href=""
              >
                Privacybeleid
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href=""
              >
                Servicevoorwaarden
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
      <Toaster />
    </div>
  )
}

export default AppLayout
