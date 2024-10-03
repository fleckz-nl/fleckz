import { useEffect, useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'
import { TempAgenciesQuery } from 'types/graphql'
import { z } from 'zod'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ButtonWithLoader from '../ButtonWithLoader/ButtonWithLoader'
import { QUERY as TempAgenciesCellQuery } from '../TempAgenciesCell'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const CREATE_TEMP_AGENCY_GQL = gql`
  mutation CreateTempAgencyInput($input: CreateTempAgencyInput!) {
    createTempAgency(input: $input) {
      id
    }
  }
`

const UPDATE_TEMP_AGENCY_GQL = gql`
  mutation UpdateTempAgencyAndAddress(
    $agencyId: String!
    $agencyInput: UpdateTempAgencyInput!
    $addressId: String!
    $addressInput: UpdateAddressInput!
  ) {
    updateTempAgencyAndAddress(
      agencyId: $agencyId
      agencyInput: $agencyInput
      addressId: $addressId
      addressInput: $addressInput
    ) {
      id
    }
  }
`

const DELETE_TEMP_AGENCY_GQL = gql`
  mutation DeleteTempAgency($id: String!) {
    deleteTempAgency(id: $id) {
      id
    }
  }
`
type AddTempAgencyDialogProps = {
  defaultValues?: Partial<TempAgenciesQuery['tempAgencies'][0] & { id: string }>
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  hideTrigger?: boolean
}

const AddTempAgencyDialog = ({
  defaultValues,
  open,
  setOpen,
  hideTrigger,
}: AddTempAgencyDialogProps) => {
  const isEditing = useMemo(() => !!defaultValues?.id, [defaultValues])

  const dutchPostalCodeExp = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i

  const formSchema = z.object({
    tempAgencyName: z.string().min(1),
    phone: z
      .string()
      .refine((v) => isValidPhoneNumber(v, { defaultCountry: 'NL' }), {
        message: 'Niet een telefoon nummer',
      })
      .transform((v) => parsePhoneNumber(v, 'NL').formatInternational())
      .or(z.literal('')),
    email: z.string().email().min(1),
    street: z.string().min(1),
    houseNumber: z.string().min(1),
    houseNumberAddition: z.string().optional(),
    city: z.string().min(1),
    postalCode: z
      .string()
      .regex(dutchPostalCodeExp, 'Ongeldige postcode')
      .toUpperCase(),
  })

  const currentDefaultValues = useMemo<z.infer<typeof formSchema>>(
    () => ({
      tempAgencyName: defaultValues?.name || '',
      phone: defaultValues?.phone || '',
      email: defaultValues?.email || '',
      street: defaultValues?.address.street || '',
      houseNumber: defaultValues?.address.houseNumber || '',
      houseNumberAddition: defaultValues?.address.houseNumberAddition || '',
      city: defaultValues?.address.city || '',
      postalCode: defaultValues?.address.postalCode || '',
    }),
    [defaultValues]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: currentDefaultValues,
    mode: 'onChange',
  })

  const [createTempAgency, { loading: createTempAgencyLoading }] = useMutation(
    CREATE_TEMP_AGENCY_GQL,
    {
      onCompleted: () => {
        toast.success('Uitzendbureau aangemaakt')
        form.reset()
        setOpen(false)
      },
      onError: (e) => toast.error(e.message),
      refetchQueries: [{ query: TempAgenciesCellQuery }],
    }
  )

  const [updateTempAgency, { loading: updateTempAgencyLoading }] = useMutation(
    UPDATE_TEMP_AGENCY_GQL,
    {
      onCompleted: () => {
        toast.success('Opslaan')
        form.reset()
        setOpen(false)
      },
      onError: (e) => toast.error(e.message),
      refetchQueries: [{ query: TempAgenciesCellQuery }],
    }
  )

  const [deleteTempAgency, { loading: deleteTempAgencyLoading }] = useMutation(
    DELETE_TEMP_AGENCY_GQL,
    {
      onCompleted: () => {
        toast('Verwijderd', {
          icon: <Trash2 className="size-4 text-destructive" />,
          duration: 2000,
        })
        form.reset()
        setOpen(false)
      },
      onError: (e) => toast.error(e.message),
      refetchQueries: [{ query: TempAgenciesCellQuery }],
    }
  )

  function handleSubmit(data: z.infer<typeof formSchema>) {
    const loadingToast = toast.loading('Laden...')
    const { tempAgencyName, phone, email, ...addressInfo } = data

    if (isEditing) {
      updateTempAgency({
        variables: {
          agencyId: defaultValues.id,
          agencyInput: {
            name: tempAgencyName,
            phone,
            email,
          },
          addressId: defaultValues.address.id,
          addressInput: {
            ...addressInfo,
          },
        },
      }).finally(() => toast.dismiss(loadingToast))
    } else {
      createTempAgency({
        variables: {
          input: {
            name: tempAgencyName,
            phone,
            email,
            address: {
              ...addressInfo,
            },
          },
        },
      }).finally(() => toast.dismiss(loadingToast))
    }
  }

  const anyLoading = useMemo(
    () =>
      createTempAgencyLoading ||
      updateTempAgencyLoading ||
      deleteTempAgencyLoading,
    [createTempAgencyLoading, updateTempAgencyLoading, deleteTempAgencyLoading]
  )

  function handleDelete(id: string) {
    deleteTempAgency({
      variables: { id },
    })
    setOpen(false)
  }

  useEffect(() => {
    form.reset(currentDefaultValues)
  }, [form, currentDefaultValues, open])

  return (
    <Dialog open={open} onOpenChange={() => setOpen((c) => !c)}>
      <DialogTrigger asChild>
        {!hideTrigger && (
          <Button className="mb-4 mt-12 flex w-fit gap-1 bg-black p-5 text-lg text-accent shadow-md shadow-accent/20 hover:bg-accent hover:text-white">
            Uitzendbureau toevoegen
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll bg-black py-10 text-white shadow-md shadow-accent/50">
        <DialogHeader className="center">
          <DialogTitle>
            {isEditing ? 'Bewerken uitzendbureau' : 'Nieuw Uitzendbureau'}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Bewerk een bestaand uitzendbureau.'
              : 'Voeg een nieuw uitzendbureau toe.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col"
          >
            <fieldset disabled={anyLoading}>
              <FormField
                name="tempAgencyName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground">
                      Uitzendbureaunaam
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={
                          fieldState.error &&
                          'border-red-500 focus:border-red-500'
                        }
                        disabled={createTempAgencyLoading}
                      />
                    </FormControl>
                    <span className="text-sm text-red-500">
                      {fieldState.error && fieldState.error.message}
                    </span>
                  </FormItem>
                )}
              />
              <Separator className="my-6 bg-white/10" />
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
                            disabled={createTempAgencyLoading}
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
                            disabled={createTempAgencyLoading}
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
                            disabled={createTempAgencyLoading}
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
                            disabled={createTempAgencyLoading}
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
                            disabled={createTempAgencyLoading}
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
              <Separator className="mb-4 mt-6 bg-white/10" />
              <FormField
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground">
                      Telefoonnummer
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={`placeholder:text-primary-foreground/50 ${
                          fieldState.error &&
                          'border-red-500 focus:border-red-500'
                        }`}
                        disabled={createTempAgencyLoading}
                        type="tel"
                        placeholder="+31123456789"
                      />
                    </FormControl>
                    <span className="text-sm text-red-500">
                      {fieldState.error && fieldState.error.message}
                    </span>
                  </FormItem>
                )}
              />
              <Separator className="mb-4 mt-6 bg-white/10" />
              <FormField
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground">
                      Emailadres
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={
                          fieldState.error &&
                          'border-red-500 focus:border-red-500'
                        }
                        disabled={createTempAgencyLoading}
                        type="email"
                      />
                    </FormControl>
                    <span className="text-sm text-red-500">
                      {fieldState.error && fieldState.error.message}
                    </span>
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-8">
                <ButtonWithLoader
                  onClick={form.handleSubmit(handleSubmit)}
                  type="submit"
                  loading={anyLoading}
                  className="relative bg-gray-600/20 text-accent brightness-200 hover:brightness-100"
                >
                  {isEditing ? 'Opslaan' : 'Indienen'}
                </ButtonWithLoader>
              </DialogFooter>
            </fieldset>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddTempAgencyDialog
