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

type ConfirmAcceptWorkRequestProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
}

const ConfirmAcceptWorkRequest = ({
  onConfirm,
  error,
  loading,
}: ConfirmAcceptWorkRequestProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ButtonWithLoader type="button" variant="default" loading={loading}>
          Bevestig diensten
        </ButtonWithLoader>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Verzoek accepteren</AlertDialogTitle>
          <div className="bg-red-400">{error?.message}</div>
          <AlertDialogDescription>
            Je gaat het huidige verzoek markeren als geaccepteerd.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuleren</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={loading}>
            Accepteer het huidige verzoek
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmAcceptWorkRequest
