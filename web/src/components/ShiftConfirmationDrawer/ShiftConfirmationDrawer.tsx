import { useState } from 'react'

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

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckInTab from 'src/components/CheckInTab/CheckInTab'
import CheckOutTab from 'src/components/CheckOutTab/CheckOutTab'
import ShiftSummaryTab from 'src/components/ShiftSummaryTab/ShiftSummaryTab'
import { QUERY } from 'src/components/WorkRequestCell'

const UPDATE_SHIFT_GQL = gql`
  mutation CheckIn($id: String!, $input: UpdateShiftInput!) {
    updateShift(id: $id, input: $input) {
      id
    }
  }
`

type ShiftConfirmationDrawerProps = {
  shift: FindWorkRequestQuery['workRequest']['shifts'][0]
}

const ShiftConfirmationDrawer = ({ shift }: ShiftConfirmationDrawerProps) => {
  const [checkInAt, setCheckInAt] = useState(
    shift.checkedInAt ? new Date(shift.checkedInAt) : new Date()
  )

  const [checkOutAt, setCheckOutAt] = useState(
    shift.checkedOutAt ? new Date(shift.checkedOutAt) : new Date()
  )

  const [checkIn, { loading: checkInLoading }] = useMutation(UPDATE_SHIFT_GQL, {
    onCompleted: () => toast.success('Ingecheckt met succes'),
    onError: (e) => toast.error(e.message),
    refetchQueries: [QUERY],
  })

  const [checkOut, { loading: checkOutLoading }] = useMutation(
    UPDATE_SHIFT_GQL,
    {
      onCompleted: () => toast.success('Uitgecheckt met success'),
      onError: (e) => toast.error(e.message),
      refetchQueries: [QUERY],
    }
  )

  async function handleCheckIn() {
    await checkIn({
      variables: {
        id: shift.id,
        input: {
          checkedInAt: checkInAt,
        },
      },
    })
  }

  async function handleCheckOut() {
    await checkOut({
      variables: {
        id: shift.id,
        input: {
          checkedOutAt: checkOutAt,
        },
      },
    })
  }


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
            <CheckInTab
              checkInAt={checkInAt}
              setCheckInAt={setCheckInAt}
              loading={checkInLoading}
              handleCheckIn={handleCheckIn}
            />
          </TabsContent>
          <TabsContent value="shiftCheckOut">
            <CheckOutTab
              checkOutAt={checkOutAt}
              setCheckOutAt={setCheckOutAt}
              loading={checkOutLoading}
              handleCheckOut={handleCheckOut}
            />
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
