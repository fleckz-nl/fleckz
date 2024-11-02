import { Dispatch, SetStateAction } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'src/components/ui/alert-dialog'

type DiscardChangesAlertProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onConfirm: () => void
}

const DiscardChangesAlert = ({
  open,
  setOpen,
  onConfirm,
}: DiscardChangesAlertProps) => {
  function handleConfirm() {
    setOpen(false)
    onConfirm()
  }
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(false)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ziet u ervan af?</AlertDialogTitle>
          <AlertDialogDescription>
            U heeft enkele wijzigingen aangebracht maar gaat nu weg van het
            formulier.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Terug</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Verlies wijzigingen
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DiscardChangesAlert
