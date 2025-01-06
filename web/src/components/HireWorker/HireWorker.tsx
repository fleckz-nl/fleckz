import { ArrowLeft, Filter } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import { Separator } from 'src/components/ui/separator'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type HireWorkerProps = {
  setOnboardingStep: React.Dispatch<React.SetStateAction<OnboardingStages>>
}

const HireWorker = ({ setOnboardingStep }: HireWorkerProps) => {
  function handlePreviousClick() {
    setOnboardingStep('planWork')
  }
  function handleNextClick() {
    // setOnboardingStep('')
  }

  return (
    <div className="mx-auto my-8 flex max-w-xl flex-col gap-6 text-white">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-center text-2xl font-bold text-white">
        Medewerkers inlenen
      </h1>
      <p>
        Hieronder staan de kandidaten die beschikbaar zijn op het geselecteerde
        profiel en de geselecteerde datum en tijd.
      </p>
      <div className="mb-16 space-y-6">
        <div>Functieprofiel: Afwasser</div>
        <div>
          <Filter className="mr-2 inline" />
          Filteren
        </div>
        {workers.map((worker) => (
          <>
            <WorkerProfile key={worker.id} worker={worker} />
            <Separator />
          </>
        ))}
      </div>
      <Button
        className="self-end bg-secondary py-4 text-lg"
        type="submit"
        onClick={handleNextClick}
      >
        Volgende
      </Button>
    </div>
  )
}

type WorkerProfileProps = {
  worker: {
    id: number
    avatarId: number
    softSkills: number
    hardSkills: number
    brutoloon: number
  }
}
const WorkerProfile = ({
  worker: { avatarId, softSkills, hardSkills, brutoloon },
}: WorkerProfileProps) => {
  console.log(hardSkills * 100)
  return (
    <div>
      <div className="flex space-x-4">
        <Avatar className="size-24">
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
        <div className="w-full *:flex *:items-center">
          <div className="grid grid-cols-2 space-x-2">
            <div className="w-28">Soft skills</div>
            <div className="w-full">
              <div
                className={`h-4 bg-cyan-300 hover:bg-cyan-700`}
                style={{ width: `${Math.round(softSkills * 100)}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-2">
            <div className="w-28">Hard skills</div>
            <div className="w-full">
              <div
                className={`h-4 bg-cyan-300 hover:bg-cyan-700`}
                style={{ width: `${Math.round(hardSkills * 100)}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-2">
            <div className="w-28">Brutoloon</div>
            <div className="w-full">
              <div
                className="h-4 bg-cyan-300 hover:bg-cyan-700"
                style={{ width: `${Math.round(brutoloon * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="ml-4">€ 27, 00</div>
        <Button variant="secondary" className="bg-accent py-4 text-primary">
          Inlenen
        </Button>
      </div>
    </div>
  )
}

const workers = [
  {
    id: 1,
    avatarId: 5,
    softSkills: 0.6,
    hardSkills: 1,
    brutoloon: 0.5,
  },
  {
    id: 2,
    avatarId: 52,
    softSkills: 0.8,
    hardSkills: 0.7,
    brutoloon: 0.6,
  },
  {
    id: 3,
    avatarId: 83,
    softSkills: 0.9,
    hardSkills: 0.9,
    brutoloon: 0.7,
  },
]

export default HireWorker
