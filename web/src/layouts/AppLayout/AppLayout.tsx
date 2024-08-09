import { Copyright } from 'lucide-react'

import { Link } from '@redwoodjs/router'

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'src/components/ui/navigation-menu'
import {
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu'

import avatar from './avatar.png'
import notextlogo from './notextlogo.png'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <header>
        <NavigationMenu className="navigation-bar mx-2 flex max-w-full flex-wrap items-center justify-between">
          <NavigationMenuList className="navigation-links-section mx-4 flex items-center">
            <NavigationMenuItem>
              <Link to="/">
                <img
                  src={notextlogo}
                  alt="logo"
                  className="my-4 mr-2 max-w-10 rounded-full drop-shadow-sm transition-all hover:brightness-150"
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/overview">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Overzicht
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/plan">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Plan
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/job-profiles">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Functieprofielen
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="user-profile-section mx-4 flex items-center">
            <Avatar className="user-avatar drop-shadow-sm">
              <AvatarImage src={avatar} alt="avatar" />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="username mr-2 hover:text-foreground focus:bg-foreground/60">
                Username
              </NavigationMenuTrigger>
              <NavigationMenuContent className="user-profile-menu row-span-3 bg-card-foreground p-4 text-card md:w-[200px] lg:w-[250px] lg:grid-cols-[.75fr_1fr]">
                <div className="user-profile flex flex-row items-center">
                  <Avatar className="user-avatar mx-2 drop-shadow-sm">
                    <AvatarImage src={avatar} alt="avatar" />
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                  <span className="user-name">Username</span>
                </div>
                <ul className="user-profile-menu-list">
                  <NavigationMenuItem>
                    <Link to="">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Profiel
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Settings
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Logout
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="mx-6 my-4 flex-grow flex-col bg-transparent">
        {children}
      </main>
      <footer className="mx-2 mb-2 flex items-center justify-between text-accent/40">
        <div className="copyright-section mx-4 flex gap-2">
          <Copyright size={24} />
          <span>2024 Alluca</span>
        </div>
        <NavigationMenu className="privacy-and-services-section">
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <Link to="">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Privacybeleid
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Servicevoorwaarden
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    </div>
  )
}

export default AppLayout
