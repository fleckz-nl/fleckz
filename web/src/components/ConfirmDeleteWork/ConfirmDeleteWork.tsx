import { ApolloError } from '@apollo/client/errors'

import ButtonWithLoader from 'src/components/ButtonWithLoader/ButtonWithLoader'
import { buttonVariants } from 'src/components/ui/button'

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

type ConfirmDeleteWorkProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
}

const ConfirmDeleteWork = ({
  onConfirm,
  error,
  loading,
}: ConfirmDeleteWorkProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ButtonWithLoader type="button" variant="destructive" loading={loading}>
          Verwijderen
        </ButtonWithLoader>
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
