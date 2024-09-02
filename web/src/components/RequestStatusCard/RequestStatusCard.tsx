import { format } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import { Building2, CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatAddress } from 'src/lib/formatAddress'

import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Separator } from '../ui/separator'

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
        <div className="font-semibold">
          <CalendarDays className="inline" />{' '}
          {format(request.startDate, 'EEEE d MMMM, yyyy', {
            locale: nl,
          })}
        </div>
        <div className="font-semibold">
          <Clock className="inline" /> {format(request.startDate, 'HH:mm')}
          &ndash;
          {format(request.endDate, 'HH:mm')}
        </div>
        <Separator className="opacity-40" />
        <div>
          <Building2 className="inline" /> {request.projectName}
        </div>
        <div>
          <MapPin className="inline" /> {formatAddress(request.location)}
        </div>
        <Separator className="opacity-40" />
        <div>
          <Users className="inline" /> {request.numWorkers} medewerkers
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default RequestStatusCard
