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

type ConfirmAcceptWorkRequestProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
  disabled?: boolean
}

const ConfirmAcceptWorkRequest = ({
  onConfirm,
  error,
  loading,
  disabled,
}: ConfirmAcceptWorkRequestProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" variant="default" disabled={disabled || loading}>
          {loading && <LoaderCircle className="absolute animate-spin" />}
          <span className={`${loading && 'invisible'}`}>Bevestig diensten</span>
        </Button>
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
