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
import TempAgencyWorker from 'src/components/TempAgencyWorker'

type ShiftConfirmationDrawerProps = {
  time: string
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
            <div className="my-4 flex h-[250px] flex-col justify-between">
              <div>
                <h3 className="flex flex-wrap items-center justify-between">
                  <TempAgencyWorker />
                </h3>
                <div className="my-4 flex flex-col items-center">
                  <span className="mx-auto text-xl text-muted/50">
                    12 Okt 2024
                  </span>
                  <div className="container my-4 grid grid-cols-3 place-items-center gap-20 text-white/80 xs:gap-0">
                    <div className="center flex-col">
                      <span className="font-extralight text-white/50">
                        Inchecken
                      </span>
                      <span className="text-3xl">00:00</span>
                    </div>
                    <div className="center flex-col">
                      <span className="text-4xl font-semibold">5:24</span>
                      <span className="font-extralight text-white/50">
                        uren
                      </span>
                    </div>
                    <div className="center flex-col">
                      <span className="font-extralight text-white/50">
                        Uitchecken
                      </span>
                      <span className="text-3xl">00:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto">
                Bevestigen
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
