import { Badge } from 'web/src/components/ui/badge'

import { cn } from 'src/lib/utils'

type TempAgencyWorkerProps = {
  className?: string
  workerName?: string
  tempAgencyName?: string
}

const TempAgencyWorker = ({
  className,
  workerName,
  tempAgencyName,
}: TempAgencyWorkerProps) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="font-semibold">
        {workerName || 'Achternaam Voornaam'}
      </span>
      <Badge className="w-fit bg-black text-primary-foreground/50">
        {tempAgencyName || 'Uitzendbureau'}
      </Badge>
    </div>
  )
}

export default TempAgencyWorker
