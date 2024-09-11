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
} from 'src/components/ui/alert-dialog'

type ConfirmRevertToConfirmed = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
}

const ConfirmRevertToConfirmed = ({
  onConfirm,
  error,
  loading,
}: ConfirmRevertToConfirmed) => {
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

export default ConfirmRevertToConfirmed
