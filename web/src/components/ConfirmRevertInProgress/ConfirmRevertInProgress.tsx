import { ApolloError } from '@apollo/client/errors'

import ButtonWithLoader from 'src/components/ButtonWithLoader/ButtonWithLoader'

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

type ConfirmRevertInProgressProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
}

const ConfirmRevertInProgress = ({
  onConfirm,
  error,
  loading,
}: ConfirmRevertInProgressProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ButtonWithLoader type="button" variant="outline" loading={loading}>
          Terugbrengen naar in uitvoering
        </ButtonWithLoader>
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
