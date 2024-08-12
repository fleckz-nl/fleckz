import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { MessageSquareWarningIcon, Users } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormError } from '@redwoodjs/forms'
import { routes } from '@redwoodjs/router'
import { Link } from '@redwoodjs/router'
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

const PlanWorkComponent = () => {
  const [open, setOpen] = useState(false)
  const formSchema = z.object({
    projectName: z.string().min(1),
    startDate: z.string().min(1),
    endDate: z.string().min(1),
    jobProfileId: z.string().min(1),
    addressId: z.string().min(1),
    numWorkers: z.number().min(1),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      startDate: '',
      endDate: '',
      jobProfileId: '',
      addressId: '',
      numWorkers: 1,
    },
  })
  const [create, { loading, error }] = useMutation(CREATE_WORK_REQUEST_GQL, {
    onCompleted: () => {
      toast.success('Success')
      form.reset()
      setOpen(false)
    },
  })
  function onSubmit(data: z.infer<typeof formSchema>) {
    create({
      variables: {
        input: {
          ...data,
          startDate: new Date(data.startDate),
          endDate: new Date(data.endDate),
          status: 'SUBMITTED',
        },
      },
    })
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen((c) => !c)}>
      <Toaster />
      <DialogTrigger asChild>
        <Button variant="outline">Werk Uitzetten</Button>
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
          {error && (
            <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
              <MessageSquareWarningIcon className="" />
              <FormError error={error} />
            </div>
          )}
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                      placeholder="Nieuwe project"
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
                    <Link to={routes.jobProfiles()} className="hover:underline">
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
                    <FormDescription></FormDescription>
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
                  <FormDescription>Hoeveel medewerkers nodig?</FormDescription>
                  <FormControl>
                    <Input
                      placeholder=""
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
            <DialogFooter>
              <Button type="submit" disabled={loading}>
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default PlanWorkComponent