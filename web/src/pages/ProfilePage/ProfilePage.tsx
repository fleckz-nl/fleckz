import { Metadata } from '@redwoodjs/web'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs'
import UpdateAccountCard from 'src/components/UpdateAccountCard/UpdateAccountCard'
import UpdateEmailCard from 'src/components/UpdateEmailCard/UpdateEmailCard'
import UpdatePasswordCard from 'src/components/UpdatePasswordCard/UpdatePasswordCard'

const ProfilePage = () => {
  return (
    <>
      <Metadata title="Profile" description="Profile page" />
      <div className="xs:container xs:max-w-3xl">
        <div className="relative -top-7 -mb-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Uw Profiel
          </h1>
          <p className="font-thin">Beheer uw profiel</p>
        </div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="email">E-mailadres</TabsTrigger>
            <TabsTrigger value="password">Wachtwoord</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <UpdateAccountCard />
          </TabsContent>
          <TabsContent value="email">
            <UpdateEmailCard />
          </TabsContent>
          <TabsContent value="password">
            <UpdatePasswordCard />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default ProfilePage
