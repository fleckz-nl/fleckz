import { ArrowLeft } from 'lucide-react'

import TextInput from 'src/components/TextInput/TextInput'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { SwitchWhite } from 'src/components/ui/switch'
import { Skill } from 'src/components/WorkerInfoCard/WorkerInfoCard'

type EditWorkerInfoProps = {
  worker: {
    id: number
    name: string
    jobFunction: string
    yearOfExp: number
    age: number
    hasCar: boolean
    livingPlace: string
    factor: number
    softSkills: Skill[]
  }
  setEditOpen: (open: boolean) => void
}

const EditWorkerInfo = ({ worker, setEditOpen }: EditWorkerInfoProps) => {
  const { id } = worker

  function handlePreviousClick() {
    setEditOpen(false)
  }

  function handleNextClick() {
    setEditOpen(false)
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 px-4">
      <ArrowLeft
        className="cursor-pointer text-white"
        onClick={handlePreviousClick}
      />
      <h1 className="text-2xl font-bold text-white">Gegevens aanpassen</h1>
      <Avatar className="size-16">
        <AvatarImage src={`https://avatar.iran.liara.run/public/${id}`} />
        <AvatarFallback>
          <img
            src={`https://avatar.iran.liara.run/public/${id}`}
            alt="Random avatar"
          />
        </AvatarFallback>
      </Avatar>
      <div>
        <Label htmlFor="first-name">Voornaam</Label>
        <TextInput id="first-name" className="align-middle" />
      </div>
      <div>
        <Label htmlFor="last-name">Achternaam</Label>
        <TextInput id="last-name" className="align-middle" />
      </div>
      <div>
        <Label htmlFor="phone">Telefoon</Label>
        <TextInput id="phone" className="align-middle" />
      </div>
      <div>
        <Label htmlFor="age">Leeftijd</Label>
        <TextInput id="age" className="align-middle" />
      </div>
      <div>
        <Label htmlFor="living-place">Woonplaats</Label>
        <TextInput id="living-place" className="align-middle" />
      </div>
      {checkBoxQuestions.map((question) => (
        <CheckBoxQuestion key={question.id} {...question} />
      ))}
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

const CheckBoxQuestion = ({ label, id }) => {
  return (
    <div className="flex items-center justify-between">
      <Label className="mr-8 text-xl" htmlFor={id}>
        {label}
      </Label>
      <SwitchWhite id={id} />
    </div>
  )
}

const checkBoxQuestions = [
  { label: 'Rijbewijs', id: 'drivingLicense' },
  { label: 'Eigen vervoer', id: 'ownTransport' },
  {
    label: 'Chronologisch werkervaring',
    id: 'chronologicalExperience',
  },
  {
    label: 'Geen tijdsgaten',
    id: 'noTimeGaps',
  },
]

export default EditWorkerInfo
