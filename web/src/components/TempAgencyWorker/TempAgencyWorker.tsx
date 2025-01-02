import { Badge } from 'web/src/components/ui/badge'

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
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
  const avatarId = Math.random() * 100
  return (
    <>
      <div className="flex items-center gap-8">
        <div className={cn('flex flex-col', className)}>
          <span className="font-semibold">
            {workerName || 'Achternaam Voornaam'}
          </span>
          <Badge className="w-fit bg-black text-primary-foreground/50">
            {tempAgencyName || 'Uitzendbureau'}
          </Badge>
        </div>
        <Avatar>
          {/* TODO: Get the photo of each temp agency worker for AvatarImage*/}
          <AvatarImage
            src={`https://avatar.iran.liara.run/public/${avatarId}`}
          />
          <AvatarFallback>
            <img
              src={`https://avatar.iran.liara.run/public/${avatarId}`}
              alt=""
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </>
  )
}

export default TempAgencyWorker
