import { Edit, Mail, MapPin, Phone } from 'lucide-react'
import { TempAgenciesQuery } from 'types/graphql'

import { useAuth } from 'src/auth'
import { formatAddress } from 'src/lib/formatAddress'
import { cn } from 'src/lib/utils'

import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type TempAgencyProps = {
  item: TempAgenciesQuery['tempAgencies'][0]
  className?: string
}

const TempAgencyCard = ({ className, item }: TempAgencyProps) => {
  // const { currentUser } = useAuth()
  return (
    <Card className={cn('bg-black text-primary-foreground', className)}>
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <CardTitle className="max-w-2/3 font-semibold text-accent">
          {item.name}
        </CardTitle>
        {/* {currentUser.roles.includes('CLIENT') && ( */}
        <Button variant="secondary" className="relative -top-2 left-2 p-1 ">
          <Edit className="text-primary-foreground/60" />
        </Button>
        {/* )} */}
      </CardHeader>
      <CardContent>
        <ul className="flex w-full flex-col space-y-2">
          <li className="flex items-center gap-2">
            <MapPin className="size-5" /> {formatAddress(item.address)}
          </li>
          <li className="flex items-center gap-2">
            <Phone className="size-5" /> {item.phone}
          </li>
          <li className="flex items-center gap-2">
            <Mail className="size-5" /> {item.email}
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default TempAgencyCard
