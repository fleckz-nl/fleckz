import { useState } from 'react'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { X } from 'lucide-react'
import noTextLogo from 'web/public/images/logo-no-text.png'

import { Link } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import { Label } from 'src/components/ui/label'
import { SwitchWhite } from 'src/components/ui/switch'

import {
  Drawer,
  DrawerBar,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

const DrawerMenu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false)
  return (
    <Drawer direction="left">
      <DrawerTrigger className="absolute">
        <HamburgerMenuIcon className="hover:pointer mx-2 block h-7 w-7 transition-colors hover:text-accent xs:hidden" />
      </DrawerTrigger>
      <DrawerContent className="h-screen w-5/6 rounded-tl-none bg-primary text-primary-foreground outline-none">
        <DrawerClose className="ml-4 w-fit">
          <X className="size-7 hover:text-accent" />
        </DrawerClose>
        <DrawerHeader className="p-0">
          <img src={noTextLogo} alt="fleckz-logo" className="mx-auto size-10" />
          <DrawerTitle className="relative -top-3 text-white">
            Fleckz
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Uitzendbureau App
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBar className="absolute bottom-1/2 right-4 m-0 h-[100px] w-2 bg-muted/10" />
        <section className="container">
          <ul className="mt-5 space-y-5 text-2xl">
            <li className="hover:text-accent">
              <Link to={routes.overview()}>
                <DrawerClose>Werklijst</DrawerClose>
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link to={routes.candidates()}>
                <DrawerClose>Kandidaten</DrawerClose>
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link to={routes.invoice()}>
                <DrawerClose>Facturen</DrawerClose>
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link to={'#'}>
                <DrawerClose>Support</DrawerClose>
              </Link>
            </li>
          </ul>
          {showFullMenu && (
            <ul className="mt-5 space-y-5 text-2xl">
              <li className="hover:text-accent">
                <Link to={routes.today()}>
                  <DrawerClose>Vandaag</DrawerClose>
                </Link>
              </li>
              <li className="hover:text-accent">
                <Link to={routes.overview()}>
                  <DrawerClose>Overzicht</DrawerClose>
                </Link>
              </li>
              <li className="hover:text-accent">
                <Link to={routes.plan()}>
                  <DrawerClose>Plan</DrawerClose>
                </Link>
              </li>
              <li className="hover:text-accent">
                <Link to={routes.jobProfiles()}>
                  <DrawerClose>Functieprofielen</DrawerClose>
                </Link>
              </li>
              <li className="hover:text-accent">
                <Link to={routes.dashboard()}>
                  <DrawerClose>Dashboard</DrawerClose>
                </Link>
              </li>
              <li className="hover:text-accent">
                <Link to={routes.invoice()}>
                  <DrawerClose>Factuur</DrawerClose>
                </Link>
              </li>
              <li className="hover:text-accent">
                <Link to={routes.candidates()}>
                  <DrawerClose>Kandidaten</DrawerClose>
                </Link>
              </li>
            </ul>
          )}
        </section>
        <DrawerFooter className="relative self-center">
          <div className="flex items-center space-x-2 text-sm">
            <Label className="text-secondary" htmlFor="show-full-menu">
              Show full menu
            </Label>{' '}
            <SwitchWhite
              id="show-full-menu"
              checked={showFullMenu}
              onCheckedChange={() => setShowFullMenu((c) => !c)}
            />
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1 text-secondary">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="">Privacybeleid</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="">Servicevoorwaarden</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerMenu
