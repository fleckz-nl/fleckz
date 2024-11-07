import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, MessageSquareWarningIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { Button } from 'src/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import UpdateAvatar from 'src/components/UpdateAvatar/UpdateAvatar'

const UPDATE_ACCOUNT_INFO = gql`
  mutation UpdateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      firstName
      lastName
    }
  }
`
const OnboardingAvatarAndName = () => {
  const { currentUser, reauthenticate } = useAuth()

  const formSchema = z.object({
    id: z.string().cuid().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  })

  const defaultValues = useMemo<z.infer<typeof formSchema>>(
    () => ({
      id: currentUser.id,
      firstName: currentUser.firstName || '',
      lastName: currentUser.lastName || '',
    }),
    [currentUser]
  )

  const accountForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  async function onAccountFormSubmit(data) {
    const loadingToast = toast.loading('Laden...')
    const { id, ...restData } = data
    await updateAccount({
      variables: {
        id,
        input: {
          ...restData,
        },
      },
    })
    await reauthenticate()
    toast.dismiss(loadingToast)
  }
  const [
    updateAccount,
    { loading: updateAccountLoading, error: updateAccountError },
  ] = useMutation(UPDATE_ACCOUNT_INFO, {
    onCompleted: () => {
      toast.success('Accountgegevens bijgewerkt')
    },
  })

  return (
    <div className="rw-scaffold mx-auto my-40 flex max-w-md flex-col py-4">
      <div className="mx-auto">
        <UpdateAvatar />
      </div>
      <div className="rw-segment-main">
        <div className="rw-form-wrapper">
          <Form {...accountForm}>
            {updateAccountError && (
              <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
                <MessageSquareWarningIcon />
                <FormError error={updateAccountError} />
              </div>
            )}
            <form onSubmit={accountForm.handleSubmit(onAccountFormSubmit)}>
              <div className="center flex-col">
                <div className="flex w-full flex-col gap-6">
                  <FormField
                    name="firstName"
                    control={accountForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="firstName"
                          className="font-semibold text-white/80"
                        >
                          Voornaam
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="firstName"
                            name="firstName"
                            className="rw-input border-accent/40"
                            disabled={updateAccountLoading}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="lastName"
                    control={accountForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="lastName"
                          className="font-semibold text-white/80"
                        >
                          Achternaam
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="lastName"
                            className="rw-input border-accent/40"
                            disabled={updateAccountLoading}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="rw-button rw-button-accent relative mx-auto mt-8"
                >
                  {updateAccountLoading && (
                    <LoaderCircle className="absolute animate-spin" />
                  )}
                  <span className={`${updateAccountLoading && 'invisible'}`}>
                    Opslaan
                  </span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default OnboardingAvatarAndName
