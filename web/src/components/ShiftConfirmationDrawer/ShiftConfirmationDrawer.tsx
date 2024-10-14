import { FindWorkRequestQuery } from 'types/graphql'
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

import CheckInTab from 'src/components/CheckInTab/CheckInTab'
import CheckOutTab from 'src/components/CheckOutTab/CheckOutTab'
import ShiftSummaryTab from 'src/components/ShiftSummaryTab/ShiftSummaryTab'

type ShiftConfirmationDrawerProps = {
  shift: FindWorkRequestQuery['workRequest']['shifts'][0]
}

const ShiftConfirmationDrawer = ({ shift }: ShiftConfirmationDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black">
          Inchecken: Nu
        </Button>
      </DrawerTrigger>
      <DrawerContent className="container max-w-lg border-secondary/10 bg-gray-950 px-6 text-white/70">
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
            <CheckInTab shift={shift} />
          </TabsContent>
          <TabsContent value="shiftCheckOut">
            <CheckOutTab shift={shift} />
          </TabsContent>
          <TabsContent value="shiftSummary">
            <ShiftSummaryTab shift={shift} />
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
