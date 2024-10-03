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

type ConfirmDeleteAgencyProps = {
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
}
const ConfirmDeleteAgency = ({
  onConfirm,
  error,
  loading,
}: ConfirmDeleteAgencyProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ButtonWithLoader type="button" variant="destructive" loading={loading}>
          Verwijderen
        </ButtonWithLoader>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Uitzendbureau verwijderen?</AlertDialogTitle>
          <div className="bg-red-400">{error?.message}</div>
          <AlertDialogDescription>
            Deze actie kan niet ongedaan worden gemaakt. Dit zal deze
            uitzendbureau permanent verwijderen.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuleer</AlertDialogCancel>
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

export default ConfirmDeleteAgency
