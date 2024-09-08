import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  ImageUp,
  LoaderCircle,
  MessageSquareWarningIcon,
  User,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import avatar from 'web/public/images/avatar.png'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import { Separator } from 'src/components/ui/separator'

const UPDATE_ACCOUNT_INFO = gql`
  mutation UpdateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      firstName
      lastName
    }
  }
`

const UpdateAccountCard = () => {
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
    <Card className="border-gray-600/40 bg-black text-white/70">
      <CardHeader>
        <CardTitle className="text-white">Account</CardTitle>
        <CardDescription className="text-white/60">
          Bewerk hier uw account. Klik op opslaan als u klaar bent.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="mb-5 flex w-full flex-wrap items-center justify-between gap-4 space-y-1">
          <div className="flex flex-col items-start">
            <Form {...accountForm}>
              {updateAccountError && (
                <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
                  <MessageSquareWarningIcon />
                  <FormError error={updateAccountError} />
                </div>
              )}
              <form onSubmit={accountForm.handleSubmit(onAccountFormSubmit)}>
                <div className="flex flex-wrap gap-4">
                  <FormField
                    name="firstName"
                    control={accountForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="firstName"
                          className="font-semibold text-primary-foreground"
                        >
                          Voornaam
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="firstName"
                            name="firstName"
                            className="text-white"
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
                          className="font-semibold text-primary-foreground"
                        >
                          Achternaam
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="lastName"
                            className="text-white"
                            disabled={updateAccountLoading}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  variant="outline"
                  type="submit"
                  className="relative mt-4 self-end bg-accent text-black"
                >
                  {updateAccountLoading && (
                    <LoaderCircle className="absolute animate-spin" />
                  )}
                  <span className={`${updateAccountLoading && 'invisible'}`}>
                    Wijzigingen opslaan
                  </span>
                </Button>
              </form>
            </Form>
          </div>
          <div className="mx-auto">
            <div className="relative my-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={avatar}></AvatarImage>
                <AvatarFallback className="bg-secondary text-black">
                  <User className="size-28 stroke-1" />
                </AvatarFallback>
              </Avatar>
              <ImageUp className="absolute bottom-2 right-[26] text-white shadow-sm shadow-accent" />
            </div>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="space-y-1 pb-4">
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-destructive/70">
            Gevarenzone
          </h3>
          <p className="text-sm">Verwijder uw Fleckz-account permanent.</p>
          <Button variant="destructive" className="relative top-2 bg-red-800">
            Verwijder uw account
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default UpdateAccountCard
