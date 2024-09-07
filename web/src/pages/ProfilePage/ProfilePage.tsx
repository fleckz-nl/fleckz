import { ImageUp, User } from 'lucide-react'
import avatar from 'web/public/images/avatar.png'

import { Metadata } from '@redwoodjs/web'

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { Separator } from 'src/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs'

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
            <Card className="border-gray-600/40 bg-black text-white/70">
              <CardHeader>
                <CardTitle className="text-white">Account</CardTitle>
                <CardDescription className="text-white/60">
                  Bewerk hier uw account. Klik op opslaan als u klaar bent.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="mb-5 flex w-full flex-wrap items-center justify-between gap-4 space-y-1">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <Label htmlFor="fisrtName" className="font-semibold">
                          Voornaam
                        </Label>
                        <Input id="firstName" className="text-white" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-semibold">
                          Achternaam
                        </Label>
                        <Input id="lastName" className="text-white" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <Label htmlFor="username" className="font-semibold">
                        Gebruikersnaam
                      </Label>
                      <Input id="username" className="text-white" />
                    </div>
                    <Button
                      variant="outline"
                      className="mt-4 self-end bg-accent text-black"
                    >
                      Wijzigingen opslaan
                    </Button>
                  </div>
                  <div className="mx-auto">
                    <div className="relative my-4">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={avatar}></AvatarImage>
                        <AvatarFallback className="bg-secondary text-black">
                          <User className="size-28 stroke-1" />
                        </AvatarFallback>
                      </Avatar>
                      <ImageUp className="absolute bottom-2 right-[26] text-white shadow-sm shadow-accent" />
                    </div>
                  </div>
                </div>
                <Separator className="bg-white/10" />
                <div className="space-y-1 pb-4">
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-destructive/70">
                    Gevarenzone
                  </h3>
                  <p className="text-sm">
                    Verwijder uw Fleckz-account permanent.
                  </p>
                  <Button
                    variant="destructive"
                    className="relative top-2 bg-red-800"
                  >
                    Verwijder uw account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default ProfilePage
