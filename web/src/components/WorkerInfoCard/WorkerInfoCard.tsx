import { AvatarImage } from '@radix-ui/react-avatar'

import { Avatar, AvatarFallback } from 'src/components/ui/avatar'

const WorkerInfoCard = () => {
  return (
    <div className="flex w-11/12 max-w-sm flex-col gap-4 text-white">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          {/* TODO: Get the photo of each temp agency worker for AvatarImage*/}
          <AvatarImage src={`https://avatar.iran.liara.run/public/`} />
          <AvatarFallback>
            <img
              src={`https://avatar.iran.liara.run/public/`}
              alt="Random avatar"
            />
          </AvatarFallback>
        </Avatar>
        <h2 className="font-semibold">Hans van Manus</h2>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-white/70">Functie</span>
        <span>Afwasser</span>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-white/70">Jaren werkervaring</span>
        <span>3</span>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-white/70">Leeftijd</span>
        <span>29</span>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-white/70">Auto beschikbaar</span>
        <span>Nee</span>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-white/70">Woonplaats</span>
        <span>&apos;s Hertogenbosch</span>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-white/70">Factor</span>
        <div className="w-14 border-2 border-primary-foreground bg-white p-0.5 text-center text-black">
          1,2
        </div>
      </div>
    </div>
  )
}

export default WorkerInfoCard
