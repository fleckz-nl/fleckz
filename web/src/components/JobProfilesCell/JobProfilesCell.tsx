import type { JobProfilesQuery, JobProfilesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import JobProfileCard from '../JobProfileCard/JobProfileCard'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'
import { Skeleton } from '../ui/skeleton'

export const QUERY: TypedDocumentNode<
  JobProfilesQuery,
  JobProfilesQueryVariables
> = gql`
  query JobProfilesQuery {
    jobProfiles {
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
  }
`

export const Loading = () =>
  Array.from({ length: 5 }).map((_, i) => {
    return (
      <Card key={i} className="border-transparent bg-white/40 shadow-accent/20">
        <CardHeader className="relative flex justify-between">
          <CardTitle className="w-3/5 break-words">
            <Skeleton className="h-4" />
          </CardTitle>
          <Skeleton className="absolute right-4 top-4 h-6 w-6" />
        </CardHeader>
        <CardContent>
          <div className="-mt-2 flex flex-wrap items-center justify-between">
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="mt-1 h-4 w-20" />
            </div>
            <div>
              <Skeleton className="-mr-2 h-6 w-20" />
            </div>
          </div>
          <Separator className="my-4 animate-pulse bg-primary/10" />
          <div className="flex flex-wrap items-center gap-2 pb-4">
            <Skeleton className="h-5 w-5" />
            <div className="flex flex-wrap items-center gap-2">
              <Skeleton className="h-5 w-16 animate-pulse rounded-3xl bg-primary/10" />
              <Skeleton className="h-5 w-16 animate-pulse rounded-3xl bg-primary/10" />
            </div>
          </div>
          <div>
            <Skeleton className="h-4 w-48" />
          </div>
          <div>
            <Skeleton className="mt-1 h-4 w-40" />
          </div>
          <Separator className="my-4 animate-pulse bg-primary/10 " />
          <div>
            <Skeleton className="h-4 w-28" />
          </div>
        </CardContent>
        <CardFooter className="-mt-2">
          <Skeleton className="h-8 w-full" />
        </CardFooter>
      </Card>
    )
  })

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  jobProfiles,
}: CellSuccessProps<JobProfilesQuery>) => {
  return (
    <>
      {jobProfiles.map((item) => {
        return <JobProfileCard key={item.id} item={item} />
      })}
    </>
  )
}
