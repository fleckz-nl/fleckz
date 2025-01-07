import { useState } from 'react'

import { ArrowLeft, Filter, UserRound, UserRoundCheck } from 'lucide-react'

import Confetti from 'src/components/Confetti/Confetti'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import { Separator } from 'src/components/ui/separator'
import { formatToEuros } from 'src/lib/formatToEuros'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type HireWorkerProps = {
  setOnboardingStep: React.Dispatch<React.SetStateAction<OnboardingStages>>
}

const HireWorker = ({ setOnboardingStep }: HireWorkerProps) => {
  const [stage, setStage] = useState<
    'selectWorker' | 'pendingConfirmation' | 'Confirmed'
  >('selectWorker')
  function handlePreviousClick() {
    setOnboardingStep('planWork')
  }
  function handleNextClick() {
    setStage((currentStage) =>
      currentStage === 'selectWorker' ? 'pendingConfirmation' : 'Confirmed'
    )
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
      {stage === 'selectWorker' && <SelectWorker />}
      {stage === 'pendingConfirmation' && <PendingConfirmation />}
      {stage === 'Confirmed' && <Confirmed />}
      <Button
        className="self-end bg-secondary py-4 text-lg"
        type="submit"
        onClick={handleNextClick}
      >
        Volgende
      </Button>
      {stage === 'Confirmed' && <Confetti />}
    </div>
  )
}

const SelectWorker = () => {
  return (
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
  )
}

const PendingConfirmation = () => {
  const percentConfirmed =
    (workers.filter((worker) => worker.status === 'confirmed').length /
      workers.length) *
    100
  return (
    <div className="mb-16 space-y-6">
      <div className="mx-4 mb-8 flex items-center">
        <div className="mr-4">Status</div>
        <div className="w-full border p-1">
          <div
            className="h-7 bg-secondary"
            style={{ width: percentConfirmed + '%' }}
          ></div>
        </div>
      </div>
      {workers.map((worker) => (
        <div key={worker.id}>
          <WorkerConfirmationStatus worker={worker} />
          {worker.status === 'pending' && (
            <div className="flex justify-center">
              <Button className="bg-secondary">
                Andere medewerker inlenen
              </Button>
            </div>
          )}
          <Separator className="mt-6" />
        </div>
      ))}
    </div>
  )
}

type WorkerProfileProps = {
  worker: Worker
}
const WorkerProfile = ({
  worker: { avatarId, softSkills, hardSkills, brutoloon, hourlyWage },
}: WorkerProfileProps) => {
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
        <div className="ml-4">{formatToEuros(hourlyWage)}</div>
        <Button variant="secondary" className="bg-accent py-4 text-primary">
          Inlenen
        </Button>
      </div>
    </div>
  )
}

type WorkerConfirmationStatusProps = {
  worker: Worker
}

const WorkerConfirmationStatus = ({
  worker: { avatarId, hourlyWage, tempAgency, status },
}: WorkerConfirmationStatusProps) => {
  return (
    <div>
      <div className="flex space-x-4">
        <Avatar className="size-24">
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
        <div className="flex w-full flex-row items-center">
          <div className="mx-auto flex-col text-nowrap">
            <div className="font-bold">{tempAgency.name}</div>
            <div>
              {(status === 'pending' && (
                <span className="text-red-400">Niet bevestigd</span>
              )) ||
                (status === 'confirmed' && (
                  <span className="text-green-300">Bevestigd</span>
                ))}
            </div>
          </div>
          <div className="ml-auto mr-6 flex items-center justify-center rounded-full border border-secondary p-4 *:size-11">
            {status === 'pending' && <UserRound className="text-red-400" />}
            {status === 'confirmed' && (
              <UserRoundCheck className="text-green-400" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="ml-4">{formatToEuros(hourlyWage)}</div>
      </div>
    </div>
  )
}

const Confirmed = () => {
  const confirmedWorkers = workers.map((worker) => ({
    ...worker,
    status: 'confirmed',
  }))

  return (
    <div className="mb-16 space-y-6">
      <div className="text-center text-xl font-bold">
        Alle medewerkers zijn bevestigd!
      </div>
      {confirmedWorkers.map((confirmedWorker) => (
        <>
          <WorkerConfirmationStatus
            key={confirmedWorker.id}
            worker={confirmedWorker}
          />
          <Separator />
        </>
      ))}
    </div>
  )
}

type Worker = {
  id: number
  avatarId: number
  softSkills: number
  hardSkills: number
  brutoloon: number
  hourlyWage: number
  tempAgency: {
    id: number
    name: string
  }
  status: 'pending' | 'confirmed'
}

const workers: Worker[] = [
  {
    id: 1,
    avatarId: 5,
    softSkills: 0.6,
    hardSkills: 1,
    brutoloon: 0.5,
    hourlyWage: 27,
    tempAgency: {
      id: 1,
      name: 'Flexi Work B.V.',
    },
    status: 'pending',
  },
  {
    id: 2,
    avatarId: 52,
    softSkills: 0.8,
    hardSkills: 0.7,
    brutoloon: 0.6,
    hourlyWage: 30,
    tempAgency: {
      id: 2,
      name: 'TempMasters B.V.',
    },
    status: 'confirmed',
  },
  {
    id: 3,
    avatarId: 83,
    softSkills: 0.9,
    hardSkills: 0.9,
    brutoloon: 0.7,
    hourlyWage: 33,
    tempAgency: {
      id: 3,
      name: 'TempoGroup B.V.',
    },
    status: 'confirmed',
  },
]

export default HireWorker
