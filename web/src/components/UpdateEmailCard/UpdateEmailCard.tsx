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

const UPDATE_USER_EMAIL = gql`
  mutation UpdateEmail($id: String!, $newEmail: String!) {
    updateUserEmail(id: $id, newEmail: $newEmail) {
      id
    }
  }
`

const UpdateEmailCard = () => {
  const { currentUser, reauthenticate } = useAuth()

  const formSchema = z.object({
    id: z.string().cuid(),
    email: z.string().email(),
  })

  const defaultValues = useMemo<z.infer<typeof formSchema>>(
    () => ({
      id: currentUser.id,
      email: currentUser.email,
    }),
    [currentUser]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  async function onSubmit(data) {
    const loadingToast = toast.loading('Laden...')
    await update({
      variables: {
        id: currentUser.id,
        newEmail: data.email,
      },
    })
    await reauthenticate()
    toast.dismiss(loadingToast)
  }

  const [update, { loading, error }] = useMutation(UPDATE_USER_EMAIL, {
    onCompleted: () => {
      toast.success('E-mail bijgewerkt')
    },
  })

  return (
    <Card className="border-gray-600/40 bg-black text-white/70">
      <CardHeader>
        <CardTitle className="text-white">E-mailadres</CardTitle>
        <CardDescription className="text-white/60">
          Werk uw e-mailadres bij.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          {error && (
            <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
              <MessageSquareWarningIcon />
              <FormError error={error} />
            </div>
          )}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="firstName"
                    className="font-semibold text-primary-foreground"
                  >
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      name="email"
                      disabled={loading}
                      className={`relative text-white ${
                        fieldState.error && ' border-red-500'
                      }`}
                    />
                  </FormControl>
                  {fieldState?.error?.message}
                </FormItem>
              )}
            />
            <Button
              variant="outline"
              type="submit"
              className="relative mt-4 self-end bg-accent text-black"
            >
              {loading && <LoaderCircle className="absolute animate-spin" />}
              <span className={`${loading && 'invisible'}`}>
                Wijzigingen opslaan
              </span>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UpdateEmailCard
