import { LogOutIcon, LucideSettings, User } from 'lucide-react'
import avatar from 'web/public/images/avatar.png'
import noTextLogo from 'web/public/images/logo-no-text.png'

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
              <AvatarFallback className="bg-secondary/80">
                <User className="size-8 text-primary" />
              </AvatarFallback>
  )
}

export default Nav
