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
import { Button, buttonVariants } from '../ui/button'

type ConfirmDeleteWorkProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
  disabled?: boolean
}

const ConfirmDeleteWork = ({
  onConfirm,
  error,
  loading,
  disabled,
}: ConfirmDeleteWorkProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          variant="destructive"
          disabled={disabled || loading}
        >
          {loading && <LoaderCircle className="absolute animate-spin" />}
          <span className={`${loading && 'invisible'}`}>Verwijderen</span>
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
          <AlertDialogAction
            className={buttonVariants({
              variant: 'destructive',
            })}
            onClick={onConfirm}
            disabled={loading}
          >
            Verwijderen
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDeleteWork
