import { Metadata } from '@redwoodjs/web'
  Tabs,
  TabsList,

const ProfilePage = () => {
  return (
    <>
      <Metadata title="Profile" description="Profile page" />
      <div className="container max-w-3xl bg-black">
        <div className="relative -top-7">
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
        </Tabs>
      </div>
    </>
  )
}

export default ProfilePage
