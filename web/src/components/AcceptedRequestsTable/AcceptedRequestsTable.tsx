import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import { Users } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { navigate } from '@redwoodjs/router'

import { OverviewHeader } from 'src/components/OverviewSection'
import SearchInput from 'src/components/SearchInput/SearchInput'
import SortButton from 'src/components/SortButton/SortButton'

type AcceptedRequestsTableProps = {
  workRequests: WorkRequestsQuery['workRequests']
}
const AcceptedRequestsTable = ({
  workRequests,
}: AcceptedRequestsTableProps) => {
  const acceptedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')
  const pendingRequests = workRequests.filter((r) => r.status === 'SUBMITTED')
  const completedRequests = workRequests.filter((r) => r.status === 'DONE')
  return (
    <div className="flex flex-col gap-4 text-white">
      <OverviewHeader>Werklijst</OverviewHeader>
      <div className="flex justify-between gap-2">
        <SortButton />
        <SearchInput />
      </div>
      <div>
        <h3 className="font-medium">Nog niet volledig bevestigd</h3>
        {pendingRequests.map((request) => (
          <div
            key={request.id}
            role="button"
            tabIndex={0}
            className="my-2 grid grid-cols-4 items-center gap-2 rounded-md bg-red-800 py-2 pl-6 hover:cursor-pointer hover:bg-white/80 hover:text-red-800"
            onClick={() => navigate(`/requests/${request.id}`)}
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
            <div>{request.jobProfile.name}</div>
            <div className="center gap-1">
              {request.shifts.length}
              <Users className="size-4 flex-shrink-0" />
            </div>
            <div className="flex">
              {format(request.startDate, 'H:MM')}–
              {format(request.endDate, 'H:MM')}
            </div>
            <div className="col-span-4 -mt-2 flex gap-6 text-xs font-thin">
              <span>#id</span>
              <span className="col-span-3">Updated __ hours ago</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-medium">In te checken</h3>
        {acceptedRequests.map((request) => (
          <div
            key={request.id}
            role="button"
            tabIndex={0}
            className="my-2 grid grid-cols-4 items-center rounded-md bg-secondary py-2 pl-6 hover:cursor-pointer hover:bg-white/80 hover:text-secondary"
            onClick={() => navigate(`/requests/${request.id}`)}
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
            <div>{request.jobProfile.name}</div>
            <div className="center gap-1">
              {request.shifts.length}
              <Users className="size-4 flex-shrink-0" />
            </div>
            <div className="flex">
              {format(request.startDate, 'H:MM')}–
              {format(request.endDate, 'H:MM')}
            </div>
            <div className="col-span-4 flex gap-6 text-xs font-thin">
              <span>#id</span>
              <span className="col-span-3">Updated __ hours ago</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-medium">Afgerond</h3>
        {completedRequests.map((request) => (
          <div
            key={request.id}
            role="button"
            tabIndex={0}
            className="my-2 grid grid-cols-4 items-center rounded-md bg-green-800 py-2 pl-6 hover:cursor-pointer hover:bg-white/80 hover:text-green-800"
            onClick={() => navigate(`/requests/${request.id}`)}
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
            <div>{request.jobProfile.name}</div>
            <div className="center gap-1">
              {request.shifts.length}
              <Users className="size-4 flex-shrink-0" />
            </div>
            <div className="flex">
              {format(request.startDate, 'H:MM')}–
              {format(request.endDate, 'H:MM')}
            </div>
            <div className="col-span-4 flex gap-6 text-xs font-thin">
              <span>#id</span>
              <span className="col-span-3">Updated __ hours ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcceptedRequestsTable
