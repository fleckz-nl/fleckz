import { ApolloError } from '@apollo/client/errors'
import { LoaderCircle } from 'lucide-react'

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
        <Button type="button" variant="outline" disabled={disabled || loading}>
          {loading && <LoaderCircle className="absolute animate-spin" />}
          <span className={`${loading && 'invisible'}`}>
            Terugbrengen naar in uitvoering
          </span>
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
