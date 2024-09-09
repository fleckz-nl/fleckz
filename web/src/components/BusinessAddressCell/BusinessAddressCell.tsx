import { MapPin, X } from 'lucide-react'

import { Button } from '../ui/button'

const BusinessAddressCell = () => {
  return (
    <div className="ml-7 flex flex-wrap items-center justify-between text-muted/70 md:w-11/12">
      <div className="flex items-center gap-1 xs:w-2/3">
        <MapPin className="size-4" />
        {'Oude Gracht 42, 3511AB Utrecht'}
      </div>
      <Button className="text-gray-500 hover:bg-black hover:text-destructive">
        <X className="size-4" />
      </Button>
    </div>
  )
}

export default BusinessAddressCell
