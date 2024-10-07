import * as React from 'react'
import { Button } from 'web/src/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from 'web/src/components/ui/drawer'
const ShiftConfirmationDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button>Inchecken: Nu</Button>
      </DrawerTrigger>
      <DrawerContent className="container px-4">
      </DrawerContent>
    </Drawer>
  )
}

export default ShiftConfirmationDrawer
