import { Copyright, LogOutIcon, LucideSettings, User2Icon } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
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

import avatar from './avatar.png'
import notextlogo from './notextlogo.png'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { logOut, currentUser } = useAuth()
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <header>
        <NavigationMenu className="navigation-bar mx-2 flex max-w-full flex-wrap items-center justify-between">
          <NavigationMenuList className="navigation-links-section mx-4 flex items-center gap-1">
            <NavigationMenuItem>
              <Link to={routes.overview()}>
                <img
                  src={notextlogo}
                  alt="logo"
                  className="my-4 mr-0 max-w-10 rounded-full drop-shadow-sm transition-all hover:brightness-110"
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
          <NavigationMenuList className="user-profile-section mx-4 flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-accent">
                <Avatar className="user-avatar drop-shadow-sm hover:brightness-105">
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
                      {currentUser.email}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className=" bg-accent/30" />
                <DropdownMenuItem>
                  <a href="" className="flex">
                    <User2Icon size={16} className="mr-1" />
                    Profiel
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="" className="flex">
                    <LucideSettings size={16} className="mr-1" />
                    Settings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/" className="flex" onClick={logOut}>
                    <LogOutIcon size={16} className="mr-1" />
                    Logout
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="mx-6 my-4 flex-grow flex-col bg-transparent">
        {children}
      </main>
      <footer className="mx-2 mb-2 flex items-center justify-between text-accent/40">
        <div className="copyright-section mx-4 flex items-center gap-0.5">
          <Copyright size={20} />
          <span className="text-nowrap font-medium">2024 Alluca</span>
        </div>
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
    </div>
  )
}

export default AppLayout
