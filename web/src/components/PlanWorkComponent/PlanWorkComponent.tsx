import { zodResolver } from '@hookform/resolvers/zod'
import { Users } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { routes } from '@redwoodjs/router'
import { Link } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

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
  const [create, { loading, error }] = useMutation(CREATE_WORK_REQUEST_GQL, {
    onCompleted: () => {
      toast.success('Success')
    },
  })
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
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
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
    <Dialog>
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

                  <div>
                    <SelectJobProfileCell
                      field={field}
                      form={form}
                      // TODO: Fix this typescript error
                      className={fieldState.error && 'border-red-500'}
                    />
                  </div>

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
                  <FormControl>
                    <Input
                      {...field}
                      className={fieldState.error && 'border-red-500'}
                    />
                  </FormControl>
                  <FormDescription>
                    Waar wilt u dat de werknemer werkt?
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Van</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        type="datetime-local"
                        className={fieldState.error && 'border-red-500'}
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
                        placeholder=""
                        {...field}
                        type="datetime-local"
                        className={fieldState.error && 'border-red-500'}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                  </FormItem>
                )}
              />
            </div>
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
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default PlanWorkComponent
