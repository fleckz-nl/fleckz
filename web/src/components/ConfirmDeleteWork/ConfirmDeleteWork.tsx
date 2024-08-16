import { ApolloError } from '@apollo/client/errors'

import { FormError } from '@redwoodjs/forms'

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

type ConfirmDeleteWorkProps = {
  onConfirm: () => void
  error: ApolloError
  loading: boolean
}

const ConfirmDeleteWork = ({
  onConfirm,
  error,
  loading,
}: ConfirmDeleteWorkProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" variant="destructive">
          Verwijderen
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Weet je het zeker?</AlertDialogTitle>
          <div className="bg-red-400">{error?.message}</div>
          <AlertDialogDescription>
            Deze actie kan niet ongedaan worden gemaakt. Dit zal uw werkverzoek
            permanent verwijderen.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              type="button"
              onClick={onConfirm}
              variant="destructive"
              disabled={loading}
            >
              Verwijderen
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDeleteWork
