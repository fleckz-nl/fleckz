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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
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
    qualityNeeded: z.number().min(1),
    yearsOfExp: z.number().min(1),
    hourlyWageMin: z.number().min(1),
    hourlyWageMax: z.number().min(1),
    maxTravelDistance: z.number().min(1),
    isTravelReimbursed: z.boolean(),
    isCarAvailable: z.boolean(),
    kmAllowance: z.number().min(1),
    totalBudgetPerHour: z.number().min(1),
    comment: z.string().min(1),
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
        input: {
          ...data,
          status: 'SUBMITTED',
        },
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
        </DialogHeader>
        <Form {...form}>
          {error && (
            <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600 ">
              <MessageSquareWarningIcon className="" />
              <FormError error={error} />
            </div>
          )}
              name="totalBudgetPerHour"
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
