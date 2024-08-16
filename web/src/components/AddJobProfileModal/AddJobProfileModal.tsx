import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { CirclePlus, MessageSquareWarningIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

import { Switch } from 'src/components/ui/switch'

import RatingStars from '../RatingStars/RatingStars'
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
import { CurrencyInput, Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const CREATE_JOB_PROFILE = gql`
  mutation CreateJobProfileMutation($input: CreateJobProfileInput!) {
    createJobProfile(input: $input) {
      name
      qualityNeeded
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

const AddJobProfileModal = () => {
  const [open, setOpen] = useState(false)
  const formSchema = z.object({
    name: z.string().min(1),
    qualityNeeded: z.coerce.number().min(1).max(5),
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      qualityNeeded: 3,
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
  })

  const DEFAULT_QUALITY_NEEDED = 3
  const [qualityNeeded, setQualityNeeded] = useState(DEFAULT_QUALITY_NEEDED)

  function onSubmit(data: z.infer<typeof formSchema>) {
    create({
      variables: {
        input: data,
      },
    })
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen((c) => !c)}>
      <Toaster />
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="flex gap-2 px-10 py-6 text-lg font-bold"
        >
          <CirclePlus size={30} className="text-accent" />
          Aanmaken
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="font-semibold text-primary/80">
            Functieprofielen Aanmaken
          </DialogTitle>
          <DialogDescription>Maak een functieprofiel aan</DialogDescription>
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
              name="qualityNeeded"
              render={({ field, fieldState }) => (
                <FormItem className="flex items-center justify-between gap-2">
                  <FormLabel className="mt-2 font-semibold">
                    Gewenste kwaliteit
                  </FormLabel>
                  <RatingStars
                    className="my-0 flex h-8 gap-2 text-accent/70 hover:text-accent/90"
                    value={qualityNeeded}
                    onChange={setQualityNeeded}
                  />
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      type="number"
                      min={1}
                      max={5}
                      className={`w-14 ${
                        fieldState.error && ' border-red-500'
                      }`}
                      value={qualityNeeded}
                      onChange={(e) => {
                        const coercedValue = Math.max(
                          1,
                          Math.min(5, parseInt(e.target.value) || 1)
                        )
                        setQualityNeeded(Number(coercedValue))
                      }}
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
              <div className="mt-2 flex items-center gap-1 md:mt-0">
                <FormField
                  control={form.control}
                  name="hourlyWageMin"
                  render={({ field, fieldState }) => (
                    <FormItem className="space-y-5">
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
                          className={`w-28 ${
                            fieldState.error && ' border-red-500'
                          }`}
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
                        <span className="text-lg text-primary/80 opacity-90">
                          €
                        </span>
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            min={0}
                            className={`w-28 ${
                              fieldState.error && ' border-red-500'
                            }`}
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
                    <span className="text-lg text-primary/80 opacity-90">
                      €
                    </span>
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
            <DialogFooter>
              <Button
                type="submit"
                disabled={loading}
                className="uppercase text-accent brightness-200 hover:brightness-100"
              >
                Aanmaken
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>

    // TODO: Check onchange react hook forms
    //           validation={{
    //             required: {
    //               value: true,
    //               message: 'Gewenste kwaliteit is verplicht',
    //             },
    //             min: { value: 1, message: 'Minimaal is 1' },
    //             max: { value: 5, message: 'Maximum is 5' },
    //           }}
    //           min={1}
    //           max={5}
    //           value={qualityNeeded}
    //           onChange={(e) => setQualityNeeded(Number(e.target.value))}
    //         />
  )
}

export default AddJobProfileModal
