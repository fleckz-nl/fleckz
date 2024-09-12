import { useEffect, useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { formatDate } from 'date-fns'
import {
  LoaderCircle,
  MessageSquareWarningIcon,
  Trash2,
  Users,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { CreateWorkRequestInput } from 'types/graphql'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { routes, Link } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

import SelectAddressCell from 'src/components/SelectAddressCell'
import SelectJobProfileCell from 'src/components/SelectJobProfileCell'
import { Button } from 'src/components/ui/button'
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from 'src/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import { QUERY as WorkSchedularQuery } from 'src/components/WorkSchedularCell'

import ButtonWithLoader from '../ButtonWithLoader/ButtonWithLoader'
import ConfirmDeleteWork from '../ConfirmDeleteWork/ConfirmDeleteWork'
import { loading } from '../JobProfilesCell/JobProfilesCell.stories'

const CREATE_WORK_REQUEST_GQL = gql`
  mutation CreateWorkRequestInput($input: CreateWorkRequestInput!) {
    createWorkRequest(input: $input) {
      projectName
      jobProfileId
      startDate
      endDate
      numWorkers
      addressId
      status
    }
  }
`

const UPDATE_WORK_REQUEST_GQL = gql`
  mutation UpdateWorkRequest($id: String!, $input: UpdateWorkRequestInput!) {
    updateWorkRequest(id: $id, input: $input) {
      projectName
      jobProfileId
      startDate
      endDate
      numWorkers
      addressId
      status
    }
  }
`

const DELETE_WORK_REQUEST_GQL = gql`
  mutation DeleteWorkRequest($id: String!) {
    deleteWorkRequest(id: $id) {
      id
    }
  }
`

type PlanWorkComponentProps = {
  defaultValues?: Partial<CreateWorkRequestInput & { id: string }>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  hideTrigger?: boolean
}

function formatToDatetimeLocal(date: Date | string) {
  if (date == null) return
  return formatDate(date, "yyyy-MM-dd'T'HH:mm")
}

const PlanWorkComponent = ({
  defaultValues,
  open,
  setOpen,
  hideTrigger,
}: PlanWorkComponentProps) => {
  const isEditing = useMemo(() => !!defaultValues?.id, [defaultValues])

  const formSchema = z.object({
    id: z.string().cuid().optional(),
    projectName: z.string().min(1),
    startDate: z.string().min(1),
    endDate: z.string().min(1),
    jobProfileId: z.string().min(1),
    addressId: z.string().min(1),
    numWorkers: z.coerce.number().min(1),
  })

  const currentDefaultValues = useMemo<z.infer<typeof formSchema>>(
    () => ({
      id: defaultValues?.id,
      projectName: defaultValues?.projectName || '',
      startDate: formatToDatetimeLocal(defaultValues?.startDate) || '',
      endDate: formatToDatetimeLocal(defaultValues?.endDate) || '',
      jobProfileId: defaultValues?.jobProfileId || '',
      addressId: defaultValues?.addressId || '',
      numWorkers: defaultValues?.numWorkers || 1,
    }),
    [defaultValues]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: currentDefaultValues,
  })

  const [create, { loading: createLoading, error }] = useMutation(
    CREATE_WORK_REQUEST_GQL,
    {
      onCompleted: () => {
        toast.success('Verzoek aangemaakt')
        form.reset()
        setOpen(false)
      },
      refetchQueries: [{ query: WorkSchedularQuery }],
    }
  )

  const [update, { loading: updateLoading, error: updateError }] = useMutation(
    UPDATE_WORK_REQUEST_GQL,
    {
      onCompleted: () => {
        toast.success('Updated')
        form.reset()
        setOpen(false)
      },
      refetchQueries: [{ query: WorkSchedularQuery }],
    }
  )

  const [deleteRequest, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_WORK_REQUEST_GQL, {
      onCompleted: () => {
        toast('Verwijderd', {
          icon: <Trash2 className="size-4 text-destructive" />,
          duration: 2000,
        })
        form.reset()
        setOpen(false)
      },
      refetchQueries: [{ query: WorkSchedularQuery }],
    })

  function onSubmit(data: z.infer<typeof formSchema>) {
    const loadingToast = toast.loading('Laden...')

    if (isEditing) {
      const { id, ...restData } = data
      update({
        variables: {
          id,
          input: {
            ...restData,
            startDate: new Date(data.startDate),
            endDate: new Date(data.endDate),
          },
        },
      }).finally(() => toast.dismiss(loadingToast))
    } else {
      create({
        variables: {
          input: {
            ...data,
            startDate: new Date(data.startDate),
            endDate: new Date(data.endDate),
            status: 'SUBMITTED',
          },
        },
      }).finally(() => toast.dismiss(loadingToast))
    }
  }

  const anyLoading = useMemo(
    () => createLoading || updateLoading || deleteLoading,
    [createLoading, updateLoading, deleteLoading]
  )

  function handleDelete(id: string) {
    deleteRequest({
      variables: { id },
    })
    setOpen(false)
  }

  useEffect(() => {
    form.reset(currentDefaultValues)
  }, [form, currentDefaultValues])

  return (
    <Dialog open={open} onOpenChange={() => setOpen((c) => !c)}>
      <Toaster />
      <DialogTrigger asChild>
        {!hideTrigger && (
          <Button
            variant="outline"
            className="mb-4 mt-2 p-4 text-lg text-white/80"
          >
            Werk Uitzetten
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="font-bold text-primary/80">
            Werk Uitzetten
          </DialogTitle>
          <DialogDescription>
            Vul de details in over uw werkaanvraag
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          {(error || updateError) && (
            <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
              <MessageSquareWarningIcon className="" />
              <FormError error={error || updateError} />
            </div>
          )}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <fieldset disabled={anyLoading}>
              <FormField
                control={form.control}
                name="projectName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary/90">
                      Projectnaam
                    </FormLabel>
                    <FormDescription>Hoe heet uw project?</FormDescription>
                    <FormControl>
                      <Input
                        placeholder="Nieuw project"
                        {...field}
                        className={`relative -top-4 ${
                          fieldState.error && ' border-red-500'
                        }`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobProfileId"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary/90">
                      Functieprofiel
                    </FormLabel>
                    <FormDescription>
                      Voor welk functieprofiel zoekt u werk? Geen profiel?{' '}
                      <Link
                        to={routes.jobProfiles()}
                        className="text-primary/90 hover:text-accent hover:underline"
                      >
                        Maak er een aan.
                      </Link>
                    </FormDescription>
                    <SelectJobProfileCell
                      field={field}
                      form={form}
                      // TODO: Fix this typescript error
                      className={`relative -top-4 py-4 pl-3 ${
                        fieldState.error && ' border-red-500'
                      }`}
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addressId"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary/90">
                      Locatie
                    </FormLabel>
                    <FormDescription>
                      Waar wilt u dat de werknemer werkt?
                    </FormDescription>
                    <SelectAddressCell
                      field={field}
                      form={form}
                      // TODO: Fix this typescript error
                      className={`relative -top-4 py-4 pl-3 ${
                        fieldState.error && ' border-red-500'
                      }`}
                    />
                  </FormItem>
                )}
              />
              <fieldset className="flex flex-col items-center justify-between sm:flex-row">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field, fieldState }) => (
                    <FormItem className="-mt-1 mb-2">
                      <FormLabel className="font-semibold text-primary/90">
                        Van
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="datetime-local"
                          className={`relative -top-2 min-w-48 ${
                            fieldState.error && 'border-red-500'
                          }`}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field, fieldState }) => (
                    <FormItem className="-mt-1 mb-2">
                      <FormLabel className="font-semibold text-primary/90">
                        Tot
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="datetime-local"
                          className={`relative -top-2 min-w-48 ${
                            fieldState.error && 'border-red-500'
                          }`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </fieldset>
              <FormField
                control={form.control}
                name="numWorkers"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="flex flex-grow items-center font-semibold text-primary/90">
                      Aantal medewerkers
                      <Users className="ml-2 inline" size={'1rem'} />
                    </FormLabel>
                    <FormDescription>
                      Hoeveel medewerkers nodig?
                    </FormDescription>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        min={0}
                        className={`relative -top-4 ${
                          fieldState.error && ' border-red-500'
                        }`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter className="gap-1">
                {!isEditing && (
                  <ButtonWithLoader
                    variant="outline"
                    type="button"
                    loading={false}
                    disabled={anyLoading}
                  >
                    Opslaan als concept
                  </ButtonWithLoader>
                )}
                {isEditing && (
                  <ConfirmDeleteWork
                    onConfirm={() => handleDelete(form.getValues('id'))}
                    error={deleteError}
                    loading={deleteLoading}
                    disabled={anyLoading}
                  />
                )}
                <Button
                  type="submit"
                  disabled={anyLoading}
                  className="relative text-accent brightness-200 hover:brightness-100"
                >
                  {anyLoading && (
                    <LoaderCircle className="absolute animate-spin" />
                  )}
                  <span className={`${anyLoading && 'invisible'}`}>
                    {isEditing ? 'Update' : 'Indienen'}
                  </span>
                </Button>
              </DialogFooter>
            </fieldset>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default PlanWorkComponent
