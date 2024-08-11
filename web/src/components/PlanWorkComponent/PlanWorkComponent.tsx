import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Users } from 'lucide-react'
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Werk Uitzetten</DialogTitle>
          <DialogDescription>
            Vul de details in over uw werkaanvraag
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="bg-red-200 text-red-600">
            <FormError error={error} />
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="projectName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Projectnaam</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nieuwe project"
                      {...field}
                      className={fieldState.error && 'border-red-500'}
                    />
                  </FormControl>
                  <FormDescription>Hoe heet uw project?</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobProfileId"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Functieprofiel</FormLabel>
                  <SelectJobProfileCell
                    field={field}
                    form={form}
                    // TODO: Fix this typescript error
                    className={fieldState.error && 'border-red-500'}
                  />
                  <FormDescription>
                    Voor welk functieprofiel zoekt u werk? Geen profiel?{' '}
                    <Link to={routes.jobProfiles()} className="hover:underline">
                      Maak er een aan.
                    </Link>
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="addressId"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Locatie</FormLabel>
                  <SelectAddressCell
                    field={field}
                    form={form}
                    // TODO: Fix this typescript error
                    className={fieldState.error && 'border-red-500'}
                  />
                  <FormDescription>
                    Waar wilt u dat de werknemer werkt?
                  </FormDescription>
                </FormItem>
              )}
            />
            <fieldset className="flex flex-col items-center justify-between sm:flex-row">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Van</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="datetime-local"
                        className={`min-w-48 ${
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
                  <FormItem>
                    <FormLabel>Tot</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="datetime-local"
                        className={`min-w-48 ${
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
                  <FormLabel className="flex-grow">
                    Aantal medewerkers
                    <Users className="ml-2 inline" size={'1rem'} />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      type="number"
                      min={0}
                      className={fieldState.error && 'border-red-500'}
                    />
                  </FormControl>

                  <FormDescription>Hoeveel medewerkers nodig?</FormDescription>
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
