import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Building2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import ButtonWithLoader from '../ButtonWithLoader/ButtonWithLoader'
import { QUERY as ClientBusinessesQuery } from '../ClientBusinessesCell'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const CREATE_CLIENT_BUSINESS_WITH_WORKPLACE = gql`
  mutation createClientBusinessWithWorkplace(
    $input: CreateClientBusinessWithWorkplaceInput!
  ) {
    createClientBusinessWithWorkplace(input: $input) {
      id
    }
  }
`

const AddBusinessDialog = () => {
  const { currentUser } = useAuth()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [
    createClientBusiness,
    { loading: createClientBusinessLoading, error: createClientBusinessError },
  ] = useMutation(CREATE_CLIENT_BUSINESS_WITH_WORKPLACE, {
    onCompleted: () => toast.success('Bedrijf aangemaakt'),
    refetchQueries: [{ query: ClientBusinessesQuery }],
  })

  const dutchPostalCodeExp = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i

  const formSchema = z.object({
    businessName: z.string().min(1),
    street: z.string().min(1),
    houseNumber: z.string().min(1),
    houseNumberAddition: z.string().optional(),
    city: z.string().min(1),
    postalCode: z
      .string()
      .regex(dutchPostalCodeExp, 'Ongeldige postcode')
      .toUpperCase(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      street: '',
      houseNumber: '',
      houseNumberAddition: '',
      city: '',
      postalCode: '',
    },
  })

  function handleSubmit(data: z.infer<typeof formSchema>) {
    createClientBusiness({
      variables: {
        input: { userId: currentUser.id, ...data },
      },
      onCompleted: () => {
        toast.success('Een nieuw bedrijf opgericht')
        setDialogOpen(false)
        form.reset()
      },
    })
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen((c) => !c)}>
      <DialogTrigger asChild>
        <Button className="mx-auto bg-white/20 p-6 text-lg text-white hover:bg-white/20 hover:text-accent">
          Bedrijf toevoegen
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto bg-black py-10 text-white shadow-md shadow-accent/50">
        <DialogHeader className="center mt-4 flex-col">
          <Building2 className="size-10 " />
          <DialogTitle>Nieuw Bedrijf</DialogTitle>
          <DialogDescription>Voeg een nieuw bedrijf toe.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col"
          >
            <FormField
              name="businessName"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground">
                    Bedrijfsnaam
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={
                        fieldState.error &&
                        'border-red-500 focus:border-red-500'
                      }
                      disabled={createClientBusinessLoading}
                    />
                  </FormControl>
                  <span className="text-sm text-red-500">
                    {fieldState.error && fieldState.error.message}
                  </span>
                </FormItem>
              )}
            />
            <Separator className="mb-4 mt-2 bg-white/10" />
            <div className="-mt-4 space-y-4">
              <h3 className="text-center text-muted">Adres</h3>
              <div className="grid grid-cols-2 gap-2 xs:gap-4">
                <FormField
                  name="street"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground">
                        Straat
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={createClientBusinessLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="houseNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground">
                        Huisnummer
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={createClientBusinessLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="houseNumberAddition"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground">
                        Toevoeging (optioneel)
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={createClientBusinessLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 xs:gap-4">
                <FormField
                  name="city"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground">
                        Stad
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={createClientBusinessLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="postalCode"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground">
                        Postcode
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={
                            fieldState.error &&
                            'border-red-500 focus:border-red-500'
                          }
                          disabled={createClientBusinessLoading}
                        />
                      </FormControl>
                      <span className="text-sm text-red-500">
                        {fieldState.error && fieldState.error.message}
                      </span>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <ButtonWithLoader
              type="submit"
              className="my-4 bg-gray-600/70 text-accent"
              loading={createClientBusinessLoading}
            >
              Indienen
            </ButtonWithLoader>
            {createClientBusinessError && (
              <span className="text-red-400">
                {createClientBusinessError?.name}
                {': '}
                {createClientBusinessError?.message}
              </span>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddBusinessDialog
