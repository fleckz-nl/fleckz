import * as React from 'react'

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

import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TimePicker from 'src/components/TimePicker'

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
          <TabsContent value="shiftCheckIn">
            <div className="flex flex-col">
              <h3 className="flex items-center justify-between">
                <TempAgencyWorker />
                <Button className="bg-black text-accent">Nu</Button>
              </h3>
              <TimePicker time={time} />
              <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
                Bevestingen
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="shiftCheckOut">
            <div className="flex flex-col">
              <h3 className="flex items-center justify-between">
                <TempAgencyWorker />
                <Button className="bg-black text-accent">Nu</Button>
              </h3>
              <TimePicker time={time} />
              <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
                Bevestingen
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
