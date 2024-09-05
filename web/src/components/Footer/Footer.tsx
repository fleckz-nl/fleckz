import { Copyright } from 'lucide-react'

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

const Footer = () => {
  return (
    <>
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
    </>
  )
}

export default Footer
