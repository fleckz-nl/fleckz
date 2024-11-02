import { formatDate } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import { ArrowLeft } from 'lucide-react'
import type {
  FindWorkRequestQuery,
  FindWorkRequestQueryVariables,
} from 'types/graphql'

import { back } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ShiftTableCell from 'src/components/ShiftTableCell'
import { formatDateTime } from 'src/lib/formatDateTime'
import { cn } from 'src/lib/utils'

import IndividualWorkRequestActions from '../IndividualWorkRequestActions/IndividualWorkRequestActions'
import JobProfileDetailsTable from '../JobProfileDetailsTable/JobProfileDetailsTable'
import RequestStatusCard from '../RequestStatusCard/RequestStatusCard'
import { Separator } from '../ui/separator'
import WorkRequestCommentSection from '../WorkRequestCommentSection/WorkRequestCommentSection'

export const QUERY: TypedDocumentNode<
  FindWorkRequestQuery,
  FindWorkRequestQueryVariables
> = gql`
  query FindWorkRequestQuery($id: String!) {
    workRequest: workRequest(id: $id) {
      id
      createdAt
      projectName
      startDate
      endDate
      status
      numWorkers
      location {
        id
        street
        houseNumber
        city
        province
        country
        postalCode
      }
      jobProfile {
        id
        name
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
      createdBy {
        id
        firstName
        lastName
      }
      shifts {
        id
        name
        status
        rating
        workerName
        checkedInAt
        checkedOutAt
        tempAgency {
          id
          name
          email
          phone
          address {
            street
            houseNumber
            houseNumberAddition
            postalCode
            city
          }
        }
      }
      comments {
        id
        body
        createdAt
        commentedBy {
          id
          firstName
          lastName
          avatarUrl
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWorkRequestQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

type SuccessProps = {
  className?: string
}

export const Success = ({
  workRequest,
  className,
}: CellSuccessProps<FindWorkRequestQuery, FindWorkRequestQueryVariables> &
  SuccessProps) => {
  return (
    <div className="flex min-h-screen w-full flex-wrap justify-between md:grid md:grid-cols-3">
      <div className="flex w-10/12 flex-grow flex-wrap justify-center bg-white xs:w-full md:col-span-2">
        <div className="w-full bg-white pl-2 pt-4 text-xl font-bold hover:text-accent xs:mb-4 xs:pl-8">
          <button onClick={() => back()}>
            <ArrowLeft className="mr-1 inline" /> Overzicht
          </button>
        </div>
        <div className="container flex max-w-5xl flex-col items-center gap-8 pt-4 xs:pt-0 ">
          <div className="flex w-full flex-wrap items-center justify-center gap-4 xs:justify-between">
            <section className="px-0 xs:mx-auto">
              <RequestStatusCard
                request={workRequest}
                className={cn('max-w-[340px]', className)}
              />
              <div className="my-2 text-left text-sm xs:my-0">
                <h3 className="font-semibold">Op verzoek van:</h3>
                <p>
                  {workRequest?.createdBy?.firstName}{' '}
                  {workRequest?.createdBy?.lastName}
                </p>
                <p>{formatDateTime(workRequest.createdAt)}</p>
              </div>
            </section>
            <Separator className="lg:hidden" />
            <div className="mx-auto">
              <JobProfileDetailsTable jobProfile={workRequest.jobProfile} />
            </div>
          </div>
          <Separator className="lg:hidden" />
          <div className="mb-20 flex w-full max-w-4xl flex-col gap-2 lg:mt-10">
            <h3 className="text-lg font-semibold text-primary ">
              Diensten toewijzen
            </h3>
            <span className="-mt-2 text-lg font-semibold text-secondary">
              {formatDate(workRequest.startDate, 'd MMMM, yyyy', {
                locale: nl,
              })}
              - {formatDate(workRequest.startDate, 'HH:mm')}-
              {formatDate(workRequest.endDate, 'HH:mm')}
            </span>
            <div className="flex w-full flex-col xs:mx-auto ">
              <ShiftTableCell request={workRequest} />
              <Separator className="my-6" />
              <IndividualWorkRequestActions workRequest={workRequest} />
            </div>
          </div>
        </div>
      </div>
      <WorkRequestCommentSection workRequest={workRequest} />
    </div>
  )
}
