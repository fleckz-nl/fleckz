import type {
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import IndividualWorkRequestSection from 'src/components/IndividualWorkRequestSection/IndividualWorkRequestSection'
import { Skeleton } from 'src/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table'

import EmptyStateImage from './cartoon-exhausted-woman-sitting-table-working.svg'

export const QUERY: TypedDocumentNode<
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables
> = gql`
  query WorkRequestsTodayQuery($date: DateTime) {
    workRequestsToday: workRequestsToday(date: $date) {
      id
      projectName
      startDate
      endDate
      jobProfile {
        id
        name
      }
      shifts {
        id
        createdAt
        updatedAt
        workerName
        checkedInAt
        checkedOutAt
        status
        tempAgency {
          id
          name
        }
      }
    }
  }
`

export const Loading = () =>
  Array.from({ length: 1 }).map((_, i) => {
    return (
      <div key={i}>
        <div className="mx-auto mt-4 flex w-full animate-pulse items-center justify-between">
          <Skeleton className="h-7 w-40 bg-primary-foreground/10" />
          <Skeleton className="h-7 w-40 bg-primary-foreground/10" />
        </div>
        <Skeleton className="mt-1 h-8 bg-secondary/10" />
        <div className="animate-pulse bg-black/50 grayscale">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody className="bg-black/50">
              <TableRow>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    )
  })

export const Empty = () => {
  return (
    <div className="center w-full flex-col">
      <div className="center mb-8 flex-col">
        <div className="relative">
          <img
            src={EmptyStateImage}
            alt="Cartoon exhausted woman sitting and table and working"
            className="h-48"
          />
          <div className="absolute bottom-0 right-0 text-xs opacity-40">
            <a href="http://www.freepik.com">
              Designed by pch.vector / Freepik
            </a>
          </div>
        </div>
        <span className="text-center text-lg italic">
          Vandaag geen werk, geen diensten.
        </span>
      </div>
    </div>
  )
}
export const Failure = ({
  error,
}: CellFailureProps<WorkRequestsTodayQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequestsToday,
}: CellSuccessProps<
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables
>) => {
  return workRequestsToday.map((request) => (
    <IndividualWorkRequestSection key={request.id} workRequest={request} />
  ))
}
