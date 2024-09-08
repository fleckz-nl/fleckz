import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, MessageSquareWarningIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

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

const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($id: String!, $newPassword: String!) {
    updatePassword(id: $id, newPassword: $newPassword) {
      id
    }
  }
`

const UpdatePasswordCard = () => {
  const { currentUser, reauthenticate } = useAuth()
  const formSchema = z
    .object({
      id: z.string().cuid(),
      newPassword: z.string().min(8),
      confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: 'Wachtwoorden komen niet overeen.',
      path: ['confirmPassword'],
    })

  const defaultValues = useMemo<z.infer<typeof formSchema>>(
    () => ({
      id: currentUser.id,
      newPassword: '',
      confirmPassword: '',
    }),
    [currentUser]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const [update, { loading, error }] = useMutation(UPDATE_PASSWORD, {
    onCompleted: () => {
      toast.success('Password bijgewerkt')
    },
  })

  async function onSubmit(data) {
    const loadingToast = toast.loading('Laden...')
    await update({
      variables: {
        id: currentUser.id,
        newPassword: data.newPassword,
      },
    })
    await reauthenticate()
    toast.dismiss(loadingToast)
  }
  return (
    <Card className="border-gray-600/40 bg-black text-white/70">
      <CardHeader>
        <CardTitle className="text-white">Password</CardTitle>
        <CardDescription className="text-white/60">
          Werk uw password bij.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {error && (
              <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
                <MessageSquareWarningIcon />
                <FormError error={error} />
              </div>
            )}
            <div className="flex flex-col gap-4">
              <FormField
                name="newPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="newPassword"
                      className="font-semibold text-primary-foreground"
                    >
                      Nieuw wachtwoord
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="newPassword"
                        name="newPassword"
                        disabled={loading}
                        type="password"
                        className={`relative text-white ${
                          fieldState.error && ' border-red-500'
                        }`}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <span className="text-red-500">
                      {fieldState?.error?.message}
                    </span>
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="confirmPassword"
                      className="font-semibold text-primary-foreground"
                    >
                      Bevestig wachtwoord
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="confirmPassword"
                        name="confirmPassword"
                        disabled={loading}
                        type="password"
                        className={`relative text-white ${
                          fieldState.error && ' border-red-500'
                        }`}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <span className="text-red-500">
                      {fieldState?.error?.message}
                    </span>
                  </FormItem>
                )}
              />
            </div>
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

export default UpdatePasswordCard
