import { zodResolver } from '@hookform/resolvers/zod'
import { CircleUserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Separator } from '../ui/separator'
import { Textarea } from '../ui/textarea'

const WorkRequestCommentSection = () => {
  const commentFormSchema = z.object({
    comment: z.string(),
  })

  const commentForm = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      comment: '',
    },
  })
  return (
    <section
      id="comments"
      className="flex min-w-fit flex-grow flex-col bg-secondary px-8 py-8"
    >
      <div className="mt-4 text-white">
        <div className="font-bold">Op verzoek van:</div>
        <div>
          <CircleUserRound className="mr-2 inline text-secondary-foreground" />
          <span>MR Janssen</span>
        </div>
      </div>
      <div className="mt-4">
        <Form {...commentForm}>
          <form
            onSubmit={commentForm.handleSubmit(() => console.log('submit'))}
          >
            <FormField
              control={commentForm.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">
                    <CircleUserRound className="my-2 mr-2 inline text-slate-300" />
                    <span>Voeg een opmerking toe</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="m-2 min-h-40 min-w-60 border-white bg-black text-lg text-gray-300 ring-0 ring-offset-8 ring-offset-black"
                      placeholder="Voeg hier uw opmerkingen toe..."
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="outline"
              className="float-end my-4 text-secondary-foreground"
            >
              Opmerken
            </Button>
          </form>
        </Form>
      </div>
      <Separator className="my-4" />
      <div className="flex gap-2 self-end">
        <Button variant="destructive">Afwijzen</Button>
        <Button variant="default">Bevestigen</Button>
      </div>
    </section>
  )
}

export default WorkRequestCommentSection
