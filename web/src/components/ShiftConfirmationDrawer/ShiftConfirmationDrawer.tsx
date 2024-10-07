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

const ShiftConfirmationDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button>Inchecken: Nu</Button>
      </DrawerTrigger>
      <DrawerContent className="container px-4">
        <Tabs defaultValue="shiftCheckIn">
          <TabsList className="mx-auto mt-2 grid grid-cols-3 gap-2">
            <TabsTrigger value="shiftCheckIn">Inchecken</TabsTrigger>
            <TabsTrigger value="shiftCheckOut">Uitchecken</TabsTrigger>
            <TabsTrigger value="shiftSummary">Samenvatting</TabsTrigger>
          </TabsList>
          <TabsContent
            value="shiftCheckIn"
            className="flex w-full flex-col pb-4"
          >
            <h3 className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-semibold">Achternaam Voornaam</span>
                <Badge className="w-fit">Uitzendbureau</Badge>
              </div>
              <Button>Nu</Button>
            </h3>
            <div className="mx-auto flex items-center justify-center gap-5 py-10">
              <span className="mx-auto text-2xl">DD MMM YYYY</span>
              <input
                type="time"
                className="rounded-sm bg-black px-2 text-center text-2xl text-white"
              />
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
