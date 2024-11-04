import { ReactNode, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { CirclePlus, MessageSquareWarningIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {
  JobProfilesQuery as JobProfilesQueryType,
  UpdateJobProfileMutation,
} from 'types/graphql'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ButtonWithLoader from 'src/components/ButtonWithLoader'
import ConfirmAction from 'src/components/ConfirmAction/ConfirmAction'
import { QUERY as JobProfilesQuery } from 'src/components/JobProfilesCell'
import { Button } from 'src/components/ui/button'
import { Switch } from 'src/components/ui/switch'

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
import { CurrencyInput, Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const CREATE_JOB_PROFILE = gql`
  mutation CreateJobProfileMutation($input: CreateJobProfileInput!) {
    createJobProfile(input: $input) {
      name
      yearsOfExp
      hourlyWageMin
      hourlyWageMax
      maxTravelDistance
      isTravelReimbursed
      isCarAvailable
      kmAllowance
      totalBudgetPerHour
      comment
    }
  }
`

const UPDATE_JOB_PROFILE = gql`
  mutation UpdateJobProfileMutation(
    $id: String!
    $input: UpdateJobProfileInput!
  ) {
    updateJobProfile(id: $id, input: $input) {
      id
      name
    }
  }
`

const DELETE_JOB_PROFILE = gql`
  mutation DeleteJobProfileMutation($id: String!) {
    deleteJobProfile(id: $id) {
      id
    }
  }
`

type AddJobProfileModalProps = {
  currentJobProfile?: JobProfilesQueryType['jobProfiles'][0]
  trigger?: ReactNode
}
const AddJobProfileModal = ({
  currentJobProfile,
  trigger,
}: AddJobProfileModalProps) => {
  const [open, setOpen] = useState(false)
  const formSchema = z
    .object({
      name: z.string().min(1),
      yearsOfExp: z.coerce.number().min(1),
      hourlyWageMin: z.coerce.number().min(1),
      hourlyWageMax: z.coerce.number().min(1),
      maxTravelDistance: z.coerce.number(),
      isTravelReimbursed: z.boolean(),
      isCarAvailable: z.boolean(),
      kmAllowance: z.coerce.number(),
      totalBudgetPerHour: z.coerce.number(),
      comment: z.string(),
    })
    .refine((data) => data.hourlyWageMin <= data.hourlyWageMax, {
      message:
        'Het minimumuurloon moet lager zijn dan of gelijk zijn aan het maximumuurloon',
      path: ['hourlyWageMin'],
    })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: currentJobProfile || {
      name: '',
      yearsOfExp: 0,
      hourlyWageMin: 0,
      hourlyWageMax: 0,
      maxTravelDistance: 0,
      isTravelReimbursed: false,
      isCarAvailable: false,
      kmAllowance: 0,
      totalBudgetPerHour: 0,
      comment: '',
    },
    mode: 'onChange',
  })
  const [create, { loading, error }] = useMutation(CREATE_JOB_PROFILE, {
    onCompleted: () => {
      toast.success('Success')
      form.reset()
      setOpen(false)
    },
    refetchQueries: [{ query: JobProfilesQuery }],
  })

  const [update, { loading: updateLoading }] = useMutation(UPDATE_JOB_PROFILE, {
    onCompleted: (data: UpdateJobProfileMutation) => {
      toast.success(
        <>
          Bijgewerkt: <b>{data.updateJobProfile.name}</b>
        </>
      )
      form.reset()
      setOpen(false)
    },
    onError: (e) => {
      toast.error(e.message)
    },
    refetchQueries: [{ query: JobProfilesQuery }],
  })

  const [deleteProfile, { loading: deleteLoading }] = useMutation(
    DELETE_JOB_PROFILE,
    {
      onCompleted: () => {
        toast.success('Verwijderd')
      },
      onError: (e) => {
        toast.error(e.message)
      },
      refetchQueries: [{ query: JobProfilesQuery }],
    }
  )

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (currentJobProfile) {
      return update({
        variables: {
          id: currentJobProfile.id,
          input: data,
        },
      })
    }
    create({
      variables: {
        input: data,
      },
    })
  }

  function handleDeleteProfile() {
    deleteProfile({ variables: { id: currentJobProfile.id } })
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen((c) => !c)}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="mb-4 mt-12 flex gap-1 bg-black p-5 text-lg text-accent shadow-md shadow-accent/20 hover:bg-accent hover:text-white">
            <CirclePlus size={20} />
            <span className="text-white">Aanmaken</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-semibold text-primary/80">
            {currentJobProfile
              ? 'Functieprofiel Bewerken'
              : 'Functieprofiel Aanmaken'}
          </DialogTitle>
          <DialogDescription>
            {currentJobProfile
              ? 'Bewerk de functieprofiel '
              : 'Maak een functieprofiel aan'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          {error && (
            <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
              <MessageSquareWarningIcon className="" />
              <FormError error={error} />
            </div>
          )}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem className="space-y-5">
                  <FormLabel className="font-semibold">Functienaam</FormLabel>
                  <FormControl>
                    <Input
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
              name="yearsOfExp"
              render={({ field, fieldState }) => (
                <FormItem className="mt-2 flex items-center justify-between gap-2">
                  <FormLabel className="mt-1 font-semibold">
                    Aantal jaar werkervaring
                  </FormLabel>
                  <div className="flex items-center gap-1">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=""
                        type="number"
                        min={0}
                        className={`w-28 ${
                          fieldState.error && ' border-red-500'
                        }`}
                      />
                    </FormControl>
                    <div className="flex text-primary/80">
                      <span>jaren</span>
                      <span className="relative -top-1">+</span>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <div className="mt-4 flex flex-wrap items-center justify-between">
              <FormLabel className="mt-1 font-semibold">
                Salaris indicatie
              </FormLabel>
              <div className="mt-4 flex w-full items-center justify-center gap-1">
                <FormField
                  control={form.control}
                  name="hourlyWageMin"
                  render={({ field, fieldState }) => (
                    <FormItem className="space-y-5">
                      <FormControl>
                        <CurrencyInput
                          className={`${fieldState.error && ' border-red-500'}`}
                          onValueChange={({ floatValue }) =>
                            field.onChange(floatValue)
                          }
                          value={field.value}
                          ref={field.ref}
                          onFocusCapture={(e) => e.target.select()}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <span className="text-accent">—</span>
                <FormField
                  control={form.control}
                  name="hourlyWageMax"
                  render={({ field, fieldState }) => (
                    <FormItem className="space-y-5">
                      <FormControl>
                        <CurrencyInput
                          className={`${fieldState.error && ' border-red-500'}`}
                          onValueChange={({ floatValue }) =>
                            field.onChange(floatValue)
                          }
                          value={field.value}
                          ref={field.ref}
                          onFocusCapture={(e) => e.target.select()}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col rounded-md border border-primary-foreground bg-muted-foreground/30 sm:w-full">
              <div className="flex items-center px-2">
                <FormField
                  control={form.control}
                  name="maxTravelDistance"
                  render={({ field, fieldState }) => (
                    <FormItem className="mt-2 flex items-center justify-between gap-2">
                      <FormLabel className="mt-1 font-semibold">
                        Maximale reisafstand
                      </FormLabel>
                      <div className="flex items-center gap-1">
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            type="number"
                            min={0}
                            className={`w-28 ${
                              fieldState.error && ' border-red-500'
                            }`}
                          />
                        </FormControl>
                        <span className="text-primary/80">km</span>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-wrap justify-between px-2">
                <FormField
                  control={form.control}
                  name="isTravelReimbursed"
                  render={({ field, fieldState }) => (
                    <FormItem className="mt-2 flex items-center gap-2">
                      <FormLabel className="mt-1 font-semibold">
                        Reiskosten vergoeding
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className={` ${
                            fieldState.error && ' border-red-500'
                          }`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isCarAvailable"
                  render={({ field, fieldState }) => (
                    <FormItem className="mt-2 flex items-center gap-2">
                      <FormLabel className="mt-1 font-semibold">
                        Auto beschikbaar
                      </FormLabel>
                      <FormControl>
                        <Switch
                          name="isCarAvailable"
                          className={` ${
                            fieldState.error && ' border-red-500'
                          }`}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center px-2 pb-4">
                <FormField
                  control={form.control}
                  name="kmAllowance"
                  render={({ field, fieldState }) => (
                    <FormItem className="mt-2 flex items-center justify-between gap-2">
                      <FormLabel className="mt-1 flex flex-wrap font-semibold">
                        Kilometervergoeding
                      </FormLabel>
                      <div className="flex items-center gap-1">
                        <FormControl>
                          <CurrencyInput
                            className={`w-28 ${
                              fieldState.error && ' border-red-500'
                            }`}
                            onValueChange={({ floatValue }) =>
                              field.onChange(floatValue)
                            }
                            value={field.value}
                            ref={field.ref}
                            onFocusCapture={(e) => e.target.select()}
                            disabled={!form.getValues('isTravelReimbursed')}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="totalBudgetPerHour"
              render={({ field, fieldState }) => (
                <FormItem className="mt-2 flex items-center justify-between gap-2">
                  <FormLabel className="mt-1 font-semibold">
                    Budget bruto per uur
                  </FormLabel>
                  <div className="flex items-center gap-1">
                    <FormControl>
                      <CurrencyInput
                        className={`${fieldState.error && ' border-red-500'}`}
                        onValueChange={({ floatValue }) =>
                          field.onChange(floatValue)
                        }
                        value={field.value}
                        ref={field.ref}
                        onFocusCapture={(e) => e.target.select()}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field, fieldState }) => (
                <FormItem className="mt-2 space-y-5">
                  <FormLabel className="font-semibold">
                    Eventueel standaardbericht voor uitzendbureaus
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className={`relative -top-4 border-muted-foreground focus:border-accent ${
                        fieldState.error && ' border-red-500'
                      }`}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="gap-1">
              <ConfirmAction
                onConfirm={handleDeleteProfile}
                title="Verwijderen profiel?"
                description="U gaat het functieprofiel verwijderen"
                actionText="Verwijderen"
                loading={deleteLoading}
              >
                Verwijderen
              </ConfirmAction>
              <Button
                variant="outline"
                type="button"
                onClick={() => setOpen(false)}
                disabled={deleteLoading}
              >
                Annuleren
              </Button>
              <ButtonWithLoader
                type="submit"
                loading={loading || updateLoading}
                className="text-accent brightness-200 hover:brightness-100"
                disabled={deleteLoading}
              >
                {currentJobProfile ? 'Bijwerken' : 'Aanmaken'}
              </ButtonWithLoader>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddJobProfileModal
