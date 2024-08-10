import { Car, Edit } from 'lucide-react'
import type { JobProfilesQuery, JobProfilesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import RatingStars from '../RatingStars/RatingStars'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'

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

export const Loading = () => <div>Loading...</div>

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
        return (
            <CardHeader className="relative flex justify-between">
              <CardTitle className="w-4/5 break-words">{item.name}</CardTitle>
              <Edit className="absolute right-4 top-4 text-muted-foreground hover:cursor-pointer hover:text-accent/70" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  €{item.hourlyWageMin}–€{item.hourlyWageMax}
                </div>
                <div>{item.yearsOfExp} jaren+</div>
              </div>
              <RatingStars value={item.qualityNeeded}></RatingStars>
              <div className="flex justify-between"></div>
              <Separator className="my-4" />
              <div className="flex justify-between">
                <Car />
                <div className="flex gap-2">
                  {item.isCarAvailable && (
                    <Badge className={'bg-muted text-muted-foreground'}>
                      Auto
                    </Badge>
                  )}
                  {item.isTravelReimbursed && (
                    <Badge className="bg-muted text-muted-foreground">
                      Vergoed
                    </Badge>
                  )}
                </div>
              </div>
              {item.isTravelReimbursed}
              <div>
                <span className="text-primary-foreground">
                  Max. reisafstand:
                </span>{' '}
                {item.maxTravelDistance} km.
              </div>
              {item.kmAllowance && (
                <div>Km. vergoeding: €{item.kmAllowance}</div>
              )}
              <Separator className="my-4" />
              {item.totalBudgetPerHour && (
                <div>Budget {item.totalBudgetPerHour}/uur</div>
              )}
            </CardContent>

            <CardFooter className="text-sm">{item.comment}</CardFooter>
          </Card>
        )
      })}
    </>
  )
}
