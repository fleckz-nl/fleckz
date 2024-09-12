import { ArrowLeft } from 'lucide-react'
import type {
  FindWorkRequestQuery,
  FindWorkRequestQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ShiftTableCell from 'src/components/ShiftTableCell'
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
        # TODO: Get user names
      }
      shifts {
        id
        name
        status
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
    <div className="flex min-h-screen w-full flex-wrap justify-between">
      <div className="flex w-full flex-grow flex-wrap justify-center bg-white">
        <div className="w-full bg-white pl-2 pt-4 text-xl font-bold hover:text-accent xs:mb-4 xs:pl-8">
          <Link to={routes.overview()} className="flex items-center">
            <ArrowLeft className="mr-1 inline" /> Overzicht
          </Link>
        </div>
        <div className="container flex max-w-5xl flex-col items-center gap-8 pt-4 xs:pt-0">
          <div className="flex w-full flex-wrap items-center justify-center gap-4 xs:justify-between">
            <section className="px-0 xs:mx-auto">
              <RequestStatusCard
                request={workRequest}
                className={cn('max-w-[340px]', className)}
              />
              <div className="my-2 text-left text-sm xs:my-0">
                <h3 className="font-semibold">Op verzoek van:</h3>
                <p>Jos Janssen</p>
                <p>16 August 2024 02:00 pm</p>
              </div>
            </section>
            <Separator className="xs:hidden" />
            <JobProfileDetailsTable jobProfile={workRequest.jobProfile} />
          </div>
          <Separator className="xs:hidden" />
          <div className="mb-20 flex w-full flex-col gap-2 xs:py-4">
            <h3 className="relative w-max text-lg font-semibold text-primary xs:left-28">
              Ploegendienst toewijzen
            </h3>
            <div className="flex w-full flex-col xs:mx-auto xs:max-w-3xl xs:p-4">
              <ShiftTableCell request={workRequest} />
              <Separator className="my-4" />
              <IndividualWorkRequestActions workRequest={workRequest} />
            </div>
          </div>
        </div>
      </div>
      <WorkRequestCommentSection />
    </div>
  )
}
