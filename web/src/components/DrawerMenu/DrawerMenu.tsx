import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { X } from 'lucide-react'

import { Link } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import {
  Drawer,
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
  return (
    <Drawer direction="left">
      <DrawerTrigger className="absolute">
        <HamburgerMenuIcon className="hover:pointer mx-2 block h-7 w-7 transition-colors hover:text-accent xs:hidden" />
      </DrawerTrigger>
      <DrawerContent className="h-screen w-5/6 rounded-tl-none bg-primary text-primary-foreground outline-none">
        <DrawerClose>
          <X className="ml-4 size-7 hover:text-destructive/70" />
        </DrawerClose>
        <DrawerHeader>
          <DrawerTitle>Fleckz</DrawerTitle>
          <DrawerDescription>Uitzendbureau App</DrawerDescription>
          <ul className="mt-5 space-y-5 text-2xl">
            <li>
              <Link to={routes.overview()}>
                <DrawerClose>Overzicht</DrawerClose>
              </Link>
            </li>
            <li>
              <Link to={routes.plan()}>
                <DrawerClose>Plan</DrawerClose>
              </Link>
            </li>
            <li>
              <Link to={routes.jobProfiles()}>
                <DrawerClose>Functieprofielen</DrawerClose>
              </Link>
            </li>
            <li>
              <Link to={routes.dashboard()}>
                <DrawerClose>Dashboard</DrawerClose>
              </Link>
            </li>
            <li>
              <Link to={routes.tempAgencies()}>
                <DrawerClose>Uitzendbureau</DrawerClose>
              </Link>
            </li>
          </ul>
        </DrawerHeader>
        <DrawerFooter>
          <NavigationMenu>
            <NavigationMenuList className="mr-2 flex gap-1 text-secondary">
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
