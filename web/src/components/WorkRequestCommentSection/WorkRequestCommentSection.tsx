import { Fragment } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { format, isSameDay, startOfDay } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import { SendHorizontal } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { FindWorkRequestQuery } from 'types/graphql'
import { z } from 'zod'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

import ButtonWithLoader from '../ButtonWithLoader/ButtonWithLoader'
import CommentSpeechBubble from '../CommentSpeechBubble/CommentSpeechBubble'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { QUERY } from '../WorkRequestCell'

const CREATE_COMMENT_GQL = gql`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

type WorkRequestCommentSectionProps = {
  workRequest: FindWorkRequestQuery['workRequest']
}

const WorkRequestCommentSection = ({
  workRequest,
}: WorkRequestCommentSectionProps) => {
  const { currentUser } = useAuth()
  const commentFormSchema = z.object({
    comment: z.string().min(1),
  })

  const commentForm = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      comment: '',
    },
  })

  const [create, { loading, error }] = useMutation(CREATE_COMMENT_GQL, {
    onCompleted: () => {
      toast.success('Opmerking toegevoegd')
      commentForm.reset()
    },
    refetchQueries: [{ query: QUERY, variables: { id: workRequest.id } }],
  })

  function onSubmit(data: z.infer<typeof commentFormSchema>) {
    create({
      variables: {
        input: {
          body: data.comment,
          userId: currentUser.id,
          workRequestId: workRequest.id,
        },
      },
    })
  }
  return (
    <section
      id="comments"
      className="flex min-w-fit flex-grow flex-col bg-secondary px-8 py-8"
    >
      <h2 className="mb-4 text-xl text-white">Opmerkingen</h2>
      <div className="flex flex-col gap-4">
        {workRequest?.comments?.map((c, i, arr) => {
          const isSameDate = isSameDay(
            startOfDay(arr[i - 1]?.createdAt),
            startOfDay(c.createdAt)
          )

          return (
            <Fragment key={c.id}>
              {!isSameDate && (
                <div className="text-center text-foreground">
                  {format(c.createdAt, 'dd MMMM yyyy', { locale: nl })}
                </div>
              )}
              <CommentSpeechBubble
                comment={c}
                ownComment={c.commentedBy.id === currentUser.id}
              />
            </Fragment>
          )
        })}
      </div>
      <div className="mt-4">
        <Form {...commentForm}>
          <form onSubmit={commentForm.handleSubmit(onSubmit)}>
            <FormField
              control={commentForm.control}
              name="comment"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="invisible mb-4 flex items-center text-lg text-white">
                    <span>Voeg een opmerking toe</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="m-2 min-h-40 min-w-60 border-white bg-black text-lg text-gray-300 ring-0 ring-offset-8 ring-offset-black"
                      placeholder="Voeg hier uw opmerkingen toe..."
                    />
                  </FormControl>
                  <div className="mt-6 text-red-500">
                    {fieldState?.error?.message}
                  </div>
                </FormItem>
              )}
            />
            {error && (
              <div
                className="bg-red-400 px-4 py-2 text-foreground
              "
              >
                {error.name}: {error.message}
              </div>
            )}
            <ButtonWithLoader
              loading={loading}
              type="submit"
              variant="outline"
              className="float-end my-4 flex py-4 text-secondary-foreground"
            >
              Opmerken
              <SendHorizontal className="ml-2 inline" />
            </ButtonWithLoader>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default WorkRequestCommentSection
