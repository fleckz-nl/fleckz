import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FindWorkRequestQuery } from 'types/graphql'
import { Button } from 'web/src/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'web/src/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from 'web/src/components/ui/form'
import { Input } from 'web/src/components/ui/input'
import { z } from 'zod'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ButtonWithLoader from 'src/components/ButtonWithLoader/ButtonWithLoader'
import { QUERY as WORK_REQUEST_CELL_QUERY } from 'src/components/WorkRequestCell'

const ASSIGN_WORKER_GQL = gql`
  mutation assignWorker($id: String!, $input: UpdateShiftInput!) {
    updateShift(id: $id, input: $input) {
      id
      workerName
    }
  }
`

type AssignShiftWorkerDialogProps = {
  shift: FindWorkRequestQuery['workRequest']['shifts'][0]
}

const AssignShiftWorkerDialog = ({ shift }: AssignShiftWorkerDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [assignWorker, { loading }] = useMutation(ASSIGN_WORKER_GQL, {
    refetchQueries: [WORK_REQUEST_CELL_QUERY],
  })

  const formSchema = z.object({
    workerName: z.string().min(1),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workerName: shift.workerName || '',
    },
  })

  function handleSubmit(data: z.infer<typeof formSchema>) {
    assignWorker({
      variables: {
        id: shift.id,
        input: {
          workerName: data.workerName,
        },
      },
      onCompleted: () => {
        toast.success(
          shift.workerName ? 'Werknemer gewijzigd' : 'Werknemer toegewezen'
        )
        setDialogOpen(false)
      },
    })
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-secondary/70 text-lg text-white hover:bg-secondary/30 hover:text-primary/80">
          {shift.workerName || 'Vul een dienst in'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-bold text-primary/80">
            {shift.workerName ? 'Wijzig werknemer naam' : 'Vul een dienst in'}
          </DialogTitle>
          <DialogDescription>Vul de naam van de werknemer</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col"
          >
            <FormField
              name="workerName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground">
                    Naam Werknemer
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <ButtonWithLoader loading={loading} className="my-2 self-end">
              Indienen
            </ButtonWithLoader>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AssignShiftWorkerDialog
