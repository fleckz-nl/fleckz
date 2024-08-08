import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'

import { Link } from '@redwoodjs/router'

import {
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu'

import notextlogo from './notextlogo.png'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <NavigationMenu className="flex w-full flex-row items-center justify-between">
        <NavigationMenuList className="mx-4 flex items-center">
          <NavigationMenuItem>
            <Link to="/">
              <img
                src={notextlogo}
                alt="logo"
                className=" mx-2 my-4 max-w-10 rounded-full transition-all hover:brightness-150"
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
          <NavigationMenuItem>
            <NavigationMenuTrigger>[User Info]</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <main className="flex-grow bg-transparent">{children}</main>
      <footer>[Footer]</footer>
    </div>
  )
}

export default AppLayout
