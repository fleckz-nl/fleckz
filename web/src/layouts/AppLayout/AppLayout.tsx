import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'

import { Link } from '@redwoodjs/router'

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
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
        <NavigationMenu className="flex w-full flex-wrap items-center justify-between">
          <NavigationMenuList className="mx-4 flex  items-center">
            <NavigationMenuItem>
              <Link to="/">
                <img
                  src={notextlogo}
                  alt="logo"
                  className="my-4 max-w-10 rounded-full transition-all hover:brightness-150"
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
          <NavigationMenuList className="mx-4 flex items-center">
            <Avatar className="mx-2">
              <AvatarImage src={avatar} alt="avatar" />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Username</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="row-span-3 bg-card-foreground p-4 text-card md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="flex flex-row items-center">
                    <Avatar className="mx-2">
                      <AvatarImage src={avatar} alt="avatar" />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    <span>Username</span>
                  </div>
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
      <main className="flex-grow bg-transparent">{children}</main>
      <footer>[Footer]</footer>
    </div>
  )
}

export default AppLayout
