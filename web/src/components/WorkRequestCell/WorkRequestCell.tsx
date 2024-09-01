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

import JobProfileDetailsTable from '../JobProfileDetailsTable/JobProfileDetailsTable'
import RequestStatusCard from '../RequestStatusCard/RequestStatusCard'
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
        qualityNeeded
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
    <div className="flex max-w-7xl flex-grow flex-wrap gap-4 bg-white">
      <div className="flex flex-col">
        <div className="bg-white py-4 pl-2 text-xl font-bold">
          <Link to={routes.overview()} className="flex items-center">
            <ArrowLeft className="mr-1 inline" /> Overzicht
          </Link>
        </div>
        <div className="ml-4 flex flex-col md:flex-row">
          <section>
            <RequestStatusCard request={workRequest} className={className} />
            <div className="mt-2 text-right">
              <h3>Op verzoek van:</h3>
              <p>Jos Janssen</p>
              <p>16 August 2024 02:00 pm</p>
            </div>
          </section>
          <JobProfileDetailsTable jobProfile={workRequest.jobProfile} />
        </div>
      </div>
      <WorkRequestCommentSection />
    </div>
  )
}
