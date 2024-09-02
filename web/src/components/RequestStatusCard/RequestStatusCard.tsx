import { format } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import { CalendarDays, Clock, Euro, MapPin, Users } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatAddress } from 'src/lib/formatAddress'
import { formatToEuros } from 'src/lib/formatToEuros'

import RatingStars from '../RatingStars/RatingStars'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

type RequestStatusCardProps = {
  request: WorkRequestsQuery['workRequests'][0]
  className?: string
}
const RequestStatusCard = ({ className, request }: RequestStatusCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="relative">
        <CardTitle>
          <Link to={routes.workRequest({ id: request.id })}>
            {request.jobProfile.name}
          </Link>
        </CardTitle>
        <RatingStars value={request.jobProfile.qualityNeeded} />
        <Badge className="absolute right-4 top-2">{request.status}</Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <CalendarDays className="inline" />{' '}
          {format(request.startDate, 'EEEE d MMMM, yyyy', {
            locale: nl,
          })}
        </div>
        <div>
          <Clock className="inline" /> {format(request.startDate, 'HH:mm')}
          &ndash;
          {format(request.endDate, 'HH:mm')}
        </div>
        <div>
          <MapPin className="inline" /> {formatAddress(request.location)}
        </div>
        <div>
          <Euro className="inline" />{' '}
          {formatToEuros(request.jobProfile.hourlyWageMin)}&ndash;
          {formatToEuros(request.jobProfile.hourlyWageMin)}/uur
        </div>
        <div>
          <Users className="inline" /> {request.numWorkers} medewerkers
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default RequestStatusCard
