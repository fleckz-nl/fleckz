import { PopoverContent } from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import {
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  Edit,
  Mail,
  MapPin,
  MousePointerClick,
  Phone,
  Users,
} from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatAddress } from 'src/lib/formatAddress'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Popover, PopoverTrigger } from '../ui/popover'
import { Progress } from '../ui/progress'
import { Separator } from '../ui/separator'

type RequestStatusCardProps = {
  request: WorkRequestsQuery['workRequests'][0]
  className?: string
}
const RequestStatusCard = ({ className, request }: RequestStatusCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="relative">
        <CardTitle className="hyphens-auto sm:w-2/3">
          <Link
            className="hover:text-accent"
            to={routes.workRequest({ id: request.id })}
          >
            {request.jobProfile.name}
            <MousePointerClick className="relative -top-1 ml-1 inline size-5 text-accent" />
          </Link>
        </CardTitle>
        <Badge className="absolute right-4 top-2">{request.status}</Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-1 font-semibold">
          <CalendarDays />
          {format(request.startDate, 'EEEE d MMMM, yyyy', {
            locale: nl,
          })}
        </div>
        <div className="flex items-center gap-1 font-semibold">
          <Clock /> {format(request.startDate, 'HH:mm')}
          &ndash;
          {format(request.endDate, 'HH:mm')}
        </div>
        <Separator className="opacity-40" />
        <div className="flex items-center gap-1">
          <BriefcaseBusiness /> {request.projectName}
        </div>
        <div className="flex items-center gap-1">
          <MapPin /> {formatAddress(request.location)}
        </div>
        <Separator className="opacity-40" />
        <div>
          <span>Gevraagde medewerkers</span>
          <div className="flex items-center gap-1 font-semibold">
            <span className="pl-7">Aantal:</span>
            {request.numWorkers}
          </div>
        </div>
        {request.status === 'SUBMITTED' && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">UitzendbureauNaam</Button>
                </PopoverTrigger>
                <PopoverContent className="my-1 min-w-fit rounded-md bg-gray-900 px-4 py-2 text-sm text-primary-foreground">
                  <div className="flex flex-col gap-1">
                    <h3 className="mb-1 text-accent">UitzendbureauNaam</h3>
                    <div className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {/* Uitzendbureau adres */}
                      {formatAddress(request.location)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="size-4" />
                      06 89 6478
                      {/* Uitzenbureau telefoon nummer */}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="size-4" />
                      Uitzendbureau@mail.comment
                      {/* Uitzendbureau mail */}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button className="text-accent">Voeg een recencie</Button>
              {/* This button will open a form that will add ratings after shifts are fulfilled. Form should have the number of hours fufilled and then the rating stars */}
        )}
      </CardContent>
    </Card>
  )
}

export default RequestStatusCard
