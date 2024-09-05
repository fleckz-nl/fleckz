import { LogOutIcon, LucideSettings, User2Icon } from 'lucide-react'
import avatar from 'web/public/images/avatar.png'
import notextlogo from 'web/public/images/logo-no-text.png'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import DrawerMenu from 'src/components/DrawerMenu/DrawerMenu'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from 'src/components/ui/navigation-menu'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu'

const Nav = () => {
  const { logOut, currentUser } = useAuth()
  return (
    <nav>
      <NavigationMenu className="fixed left-0 right-0 top-0 z-50 flex max-w-full items-center justify-between bg-gray-900/90 p-3 shadow-md">
        <DrawerMenu />
        <NavigationMenuList className="hidden items-center gap-4 xs:flex">
          <NavigationMenuItem>
            <Link to={routes.overview()}>
              <img
                src={notextlogo}
                alt="logo"
                className="size-10 rounded-full drop-shadow-sm transition-all hover:brightness-125"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link to={routes.overview()}>Overzicht</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link to={routes.plan()}>Plan</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={routes.jobProfiles()}>Functieprofielen</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="mx-4 flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium hover:text-accent focus:outline-none focus:outline-muted-foreground">
              <Avatar className="user-avatar drop-shadow-sm hover:brightness-110">
                <AvatarImage src={avatar} alt="avatar" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="user-profile-menu row-span-3 mr-4 w-[180px] bg-card-foreground py-1 text-card lg:grid-cols-[.75fr_1fr]">
              <DropdownMenuLabel>
                <div className="user-profile flex flex-col items-center">
                  <span className="user-name pr-2 text-muted-foreground/80">
                    Meneer Jansen
                  </span>
                  <span className="email text-xs font-thin text-muted/70">
                    {currentUser?.email}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className=" bg-accent/30" />
              <DropdownMenuItem>
                <button className="flex w-full">
                  <User2Icon size={16} className="mr-1" />
                  Profiel
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="flex w-full">
                  <LucideSettings size={16} className="mr-1" />
                  Settings
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="flex w-full" onClick={logOut}>
                  <LogOutIcon size={16} className="mr-1" />
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export default Nav
