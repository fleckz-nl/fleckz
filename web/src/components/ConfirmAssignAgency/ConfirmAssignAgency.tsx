import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'src/components/ui/alert-dialog'

type ConfirmAssignAgencyProps = {
  open?: boolean
  onOpenChange?: () => void
  hideTrigger?: boolean
  onConfirm: () => void
  onCancel: () => void
  newAgency: string
}

const ConfirmAssignAgency = ({
  open,
  onOpenChange,
  hideTrigger,
  onConfirm,
  onCancel,
  newAgency,
}: ConfirmAssignAgencyProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger hidden={hideTrigger}>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Bevestig toewijzing uitzendbureau</AlertDialogTitle>
          <AlertDialogDescription>
            {newAgency ? (
              <>
                Bevestig dat u het uitzendbureau wilt wijzigen naar{' '}
                <span className="font-bold text-primary">{newAgency}</span>.
              </>
            ) : (
              'Bevestig het opheffen van de toewijzing van het uitzendbureau'
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Annuleren</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Bevestigen</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmAssignAgency
