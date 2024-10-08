import * as React from 'react'

import { Badge } from 'web/src/components/ui/badge'
import { Button } from 'web/src/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from 'web/src/components/ui/drawer'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'web/src/components/ui/tabs'

type ShiftConfirmationDrawerProps = {
  time: string
}

const ShiftConfirmationDrawer = ({ time }: ShiftConfirmationDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
          Inchecken: Nu
        </Button>
      </DrawerTrigger>
      <DrawerContent className="container border-secondary/10 bg-gray-950 px-4 text-white/70">
        <Tabs defaultValue="shiftCheckIn">
          <TabsList className="mx-auto mt-2 grid grid-cols-3 gap-2">
            <TabsTrigger
              value="shiftCheckIn"
              className="text-primary-foreground/30 data-[state=active]:bg-black/30 data-[state=active]:text-secondary"
            >
              Inchecken
            </TabsTrigger>
            <TabsTrigger
              value="shiftCheckOut"
              className=" text-primary-foreground/30 data-[state=active]:bg-black/30 data-[state=active]:text-secondary"
            >
              Uitchecken
            </TabsTrigger>
            <TabsTrigger
              value="shiftSummary"
              className="text-primary-foreground/30 data-[state=active]:bg-black/30 data-[state=active]:text-secondary"
            >
              Samenvatting
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="shiftCheckIn"
            className="flex w-full flex-col pb-4"
          >
            <h3 className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-semibold">Achternaam Voornaam</span>
                <Badge className="w-fit bg-black text-primary-foreground/50">
                  Uitzendbureau
                </Badge>
              </div>
              <Button className="bg-black text-accent">Nu</Button>
            </h3>
            <div className="mx-auto flex items-center justify-center gap-5 py-10">
              <span className="mx-auto text-2xl text-white">DD MMM YYYY</span>
              <input
                type="time"
                value={time}
                className="rounded-sm bg-white px-2 text-center text-2xl text-primary"
              />
            </div>
            <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
              Bevestingen
            </Button>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
