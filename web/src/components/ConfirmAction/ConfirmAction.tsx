import { ReactNode } from 'react'

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
} from 'src/components/ui/alert-dialog'
import { buttonVariants } from 'src/components/ui/button'

type ConfirmActionProps = {
  children: ReactNode
  title: string
  description: string
  actionText?: string
  onConfirm: () => void
  error?: ApolloError
  loading?: boolean
}

const ConfirmAction = ({
  children,
  title,
  description,
  actionText,
  onConfirm,
  error,
  loading,
}: ConfirmActionProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <div className="bg-red-400">{error?.message}</div>
          <AlertDialogDescription>{description}</AlertDialogDescription>
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
            {actionText || 'Bevestigen'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmAction
