import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import { CheckCircle2, Users } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { navigate } from '@redwoodjs/router'

import { OverviewHeader } from 'src/components/OverviewSection'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table'

type AcceptedRequestsTableProps = {
  workRequests: WorkRequestsQuery['workRequests']
}
const AcceptedRequestsTable = ({
  workRequests,
}: AcceptedRequestsTableProps) => {
  const acceptedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')
  return (
    <div className="flex flex-col">
      <OverviewHeader>
        <CheckCircle2 className="mr-1 inline" />
        Geaccepteerd
      </OverviewHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-400">Datum</TableHead>
            <TableHead className="text-gray-400">Functienaam</TableHead>
            <TableHead className="text-gray-400">Werknemers</TableHead>
            <TableHead className="text-gray-400">Werktijd</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {acceptedRequests.map((request) => (
            <TableRow
              key={request.id}
              className="bg-primary text-white hover:cursor-pointer hover:bg-white hover:text-secondary"
              onClick={() => navigate(`/requests/${request.id}`)}
            >
              <TableCell className="font-bold">
                {format(request.startDate, 'd MMMM, yyyy', {
                  locale: nl,
                })}
              </TableCell>
              <TableCell>{request.jobProfile.name}</TableCell>
              <TableCell className="pl-10">
                {request.shifts.length}
                <Users className="relative -top-0.5 ml-1 inline size-4" />
              </TableCell>
              <TableCell>
                {format(request.startDate, 'H:MM')}–
                {format(request.endDate, 'H:MM')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AcceptedRequestsTable
