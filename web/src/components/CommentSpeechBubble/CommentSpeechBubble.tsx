import { TooltipTrigger } from '@radix-ui/react-tooltip'
import { formatRelative } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import { UserCircle2 } from 'lucide-react'
import { FindWorkRequestQuery } from 'types/graphql'

import { formatDateTime } from 'src/lib/formatDateTime'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider } from '../ui/tooltip'

type CommentSpeechBubbleProps = {
  comment: FindWorkRequestQuery['workRequest']['comments'][0]
  ownComment?: boolean
}

const CommentSpeechBubble = ({
  comment,
  ownComment = false,
}: CommentSpeechBubbleProps) => {
  return (
    <div className={`flex items-center ${ownComment && 'justify-end'}`}>
      {ownComment || (
        <div className="mr-2 bg-transparent">
          <Avatar className="size-8">
            <AvatarImage src={comment?.commentedBy?.avatarUrl} />
            <AvatarFallback>
              <UserCircle2 />
            </AvatarFallback>
          </Avatar>
        </div>
      )}
      <div className="flex flex-col">
        {ownComment || (
          <div className="text-white">
            {comment.commentedBy.firstName} {comment.commentedBy.lastName}
          </div>
        )}
        <div
          className={`rounded-lg ${
            ownComment ? 'bg-secondary-foreground text-white' : 'bg-white'
          } px-4 py-2 text-primary`}
        >
          {comment.body}
          <div className="text-right text-sm text-secondary">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="hover:cursor-default">
                  {formatRelative(comment.createdAt, new Date(), {
                    locale: nl,
                  })}
                </TooltipTrigger>
                <TooltipContent>
                  {formatDateTime(comment.createdAt)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentSpeechBubble
