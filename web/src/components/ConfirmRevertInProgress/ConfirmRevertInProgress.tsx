import { ApolloError } from '@apollo/client/errors'

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
} from '../ui/alert-dialog'
import { Button } from '../ui/button'

type ConfirmRevertInProgressProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
  disabled?: boolean
}

const ConfirmRevertInProgress = ({
  onConfirm,
  error,
  loading,
  disabled,
}: ConfirmRevertInProgressProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" variant="outline" disabled={disabled}>
          Terugbrengen naar in uitvoering
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Bevestig terugkeer naar status in uitvoering
          </AlertDialogTitle>
          <div className="bg-red-400">{error?.message}</div>
          <AlertDialogDescription>
            Je gaat de status terugbrengen naar in uitvoering
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuleren</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={loading}>
            Terugbrengen naar in uitvoering
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmRevertInProgress
