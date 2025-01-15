import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import { Users } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'

import { cn } from 'src/lib/utils'

type WorkRequestsListItemProps = {
  request: WorkRequestsQuery['workRequests'][0]
  className?: string
}

const WorkRequestsListItem = ({
  request,
  className,
}: WorkRequestsListItemProps) => {
  const accentColor =
    request.status === 'CONFIRMED'
      ? 'secondary'
      : request.status === 'DONE'
        ? 'green-800'
        : 'red-800'
  function handleItemClick() {
    if (request.status === 'SUBMITTED')
      return navigate(
        routes.confirmWorkRequest({ request: JSON.stringify(request) })
      )
    navigate(`/requests/${request.id}`)
  }
  return (
    <div
      key={request.id}
      role="button"
      tabIndex={0}
      className={cn(
        `my-2 grid grid-cols-5 items-center gap-2 rounded-md bg-${accentColor} p-2 hover:cursor-pointer hover:bg-white/80 hover:text-${accentColor} xs:pl-6`,
        className
      )}
      onClick={handleItemClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/requests/${request.id}`)
        }
      }}
    >
      <div className="font-semibold">
        {format(request.startDate, 'd MMM yyyy', {
          locale: nl,
        })}
      </div>
      <div className="flex flex-wrap gap-0.5">
        {format(request.startDate, 'H:MM')}
        <span>-</span>
        {format(request.endDate, 'H:MM')}
      </div>
      <div className="center gap-1">
        {request.shifts.length}
        <Users className="size-4 flex-shrink-0" />
      </div>
      <div className="col-span-2">{request.jobProfile.name}</div>
      <div className="col-span-4 -mt-2 flex gap-6 text-xs font-thin">
        <span>#id</span>
        <span className="col-span-3">Updated __ hours ago</span>
      </div>
    </div>
  )
}

export default WorkRequestsListItem
