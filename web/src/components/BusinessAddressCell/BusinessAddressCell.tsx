import { MapPin, X } from 'lucide-react'

import { Button } from '../ui/button'

const BusinessAddressCell = () => {
  return (
    <div className="ml-7 flex w-11/12 flex-wrap items-center justify-between text-muted/70">
      <div className="flex w-3/4 items-center gap-1 xs:w-2/3">
        <MapPin className="size-4" />
        {'Oude Gracht 42, 3511AB Utrecht'}
      </div>
      <Button className="text-gray-500 hover:bg-black hover:text-destructive">
        <X className="relative right-3 size-4" />
      </Button>
    </div>
  )
}

export default BusinessAddressCell
