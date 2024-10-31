import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { MapPin, Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ClientBusinessesQuery as ClientBusinessesQueryType } from 'types/graphql'
import { z } from 'zod'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

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

const CREATE_WORKPLACE_GQL = gql`
  mutation createWorkplaceWithNewAddress(
    $clientBusinessId: String!
    $input: CreateWorkplaceWithNewAddress!
  ) {
    createWorkplaceWithNewAddress(
      clientBusinessId: $clientBusinessId
      input: $input
    ) {
      id
    }
  }
`

type AddWorkPlaceDialogProps = {
  clientBusiness: ClientBusinessesQueryType['clientBusinesses'][0]
}

const AddWorkplaceDialog = ({ clientBusiness }: AddWorkPlaceDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [
    createWorkplace,
    { loading: createWorkplaceLoading, error: createWorkplaceError },
  ] = useMutation(CREATE_WORKPLACE_GQL, {
    onCompleted: () => toast.success('Werkplek aangemaakt'),
    refetchQueries: [{ query: ClientBusinessesQuery }],
  })

  const dutchPostalCodeExp = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i

  const formSchema = z.object({
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
      street: '',
      houseNumber: '',
      houseNumberAddition: '',
      city: '',
      postalCode: '',
    },
  })

  function handleSubmit(data: z.infer<typeof formSchema>) {
    createWorkplace({
      variables: {
        clientBusinessId: clientBusiness.id,
        input: { address: data },
      },
      onCompleted: () => {
        toast.success('Een nieuw werkplek opgericht')
        setDialogOpen(false)
        form.reset()
      },
    })
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen((c) => !c)}>
      <DialogTrigger asChild>
        <Button className="center px-2 text-accent hover:bg-gray-600 hover:text-black">
          <Plus className="mr-1 size-4" />
          Adres toevoegen
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll bg-black py-10 text-white shadow-md shadow-accent/50">
        <DialogHeader className="center mt-4 flex-col">
          <MapPin className="size-10 " />
          <DialogTitle>Nieuw werkplek voor {clientBusiness.name}</DialogTitle>
          <DialogDescription>Voeg een nieuw werkplek toe.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col"
          >
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
                        <Input {...field} disabled={createWorkplaceLoading} />
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
                        <Input {...field} disabled={createWorkplaceLoading} />
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
                        <Input {...field} disabled={createWorkplaceLoading} />
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
                        <Input {...field} disabled={createWorkplaceLoading} />
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
                          disabled={createWorkplaceLoading}
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
              loading={createWorkplaceLoading}
            >
              Indienen
            </ButtonWithLoader>
            {createWorkplaceError && (
              <span className="text-red-400">
                {createWorkplaceError?.name}
                {': '}
                {createWorkplaceError?.message}
              </span>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddWorkplaceDialog
