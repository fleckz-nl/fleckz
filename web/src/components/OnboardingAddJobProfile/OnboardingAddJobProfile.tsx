import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'

import { ArrowLeft, CirclePlus } from 'lucide-react'

import ChooseSoftSkills from 'src/components/ChooseSoftSkills/ChooseSoftSkills'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/ui/command'
import { CurrencyInput, Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { SwitchWhite } from 'src/components/ui/switch'
import { Textarea } from 'src/components/ui/textarea'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type OnboardingAddJobProfileProps = {
  setOnboardingStep: Dispatch<SetStateAction<OnboardingStages>>
}

const OnboardingAddJobProfile = ({
  setOnboardingStep,
}: OnboardingAddJobProfileProps) => {
  const [showProfileForm, setShowProfileForm] = useState(false)
  function handleMakeProfile() {
    setShowProfileForm(true)
  }

  function handlePreviousClick() {
    setOnboardingStep('successMessage')
  }

  function handleNextClick() {
    setOnboardingStep('planWork')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-xl text-white">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      {!showProfileForm && <EmptyState handleMakeProfile={handleMakeProfile} />}
      {showProfileForm && (
        <>
          <AddProfileForm />
          <Button
            className="self-end bg-secondary py-4 text-lg"
            type="submit"
            onClick={handleNextClick}
          >
            Volgende
          </Button>
        </>
      )}
    </div>
  )
}

type EmptyStateProps = {
  handleMakeProfile: MouseEventHandler<HTMLButtonElement>
}
const EmptyState = ({ handleMakeProfile }: EmptyStateProps) => {
  return (
    <>
      <h1 className="my-4 text-center font-bold">
        Welk functieprofiel zoekt u?
      </h1>
      <div className="max-w-sm space-y-4 self-center text-center text-xl">
        <p>
          Er zijn nog geen functieprofielen aangemaakt. Welk profiel zoekt u?
        </p>
      </div>
      <img
        src="images/active-tourist-hiking-mountain-man-wearing-backpack-enjoying-trekking-looking-snowcapped-peaks.svg"
        alt="A man with a backpack in mountains"
        width={300}
        className="self-center pb-2"
      />
      <span className="-mt-6 text-center text-xs text-gray-500">
        <a href="http://www.freepik.com">
          Image designed by pch.vector / Freepik
        </a>
      </span>
      <Button
        className="mb-4 mt-12 flex gap-1 self-center bg-black p-5 text-lg text-accent shadow-md shadow-accent/20 hover:bg-accent hover:text-white"
        type="submit"
        onClick={handleMakeProfile}
      >
        <CirclePlus className="mr-2" size={20} />
        <span className="text-white">Aanmaken</span>
      </Button>
    </>
  )
}

const AddProfileForm = () => {
  return (
    <div className="space-y-8">
      <h1 className="my-4 text-center font-bold">Functieprofiel aanmaken</h1>
      <p>
        De uurlonen, kilometer vergoeding en andere emolumenten worden
        automatisch opgehaald vanuit de CAO.
      </p>
      <JobFunctionCombobox />
      <div className="flex items-center gap-4">
        <Label htmlFor="percentage" className="text-xl">
          Jaren werkervaring
        </Label>
        <Input
          id="percentage"
          type="number"
          max={99}
          min={0}
          className="max-w-20 bg-white text-black"
          defaultValue={0}
          onClick={(e) => e.currentTarget.select()}
        />{' '}
        jaar
      </div>
      <div className="flex items-center gap-4">
        <Label htmlFor="percentage" className="text-xl">
          Budget per uur bruto{' '}
          <span className="text-base">(regulier dagloon)</span>
        </Label>
        <CurrencyInput
          id="percentage"
          min={0}
          className="max-w-40 bg-white text-black"
          defaultValue={0}
          onClick={(e) => e.currentTarget.select()}
        />
      </div>
      <div>
        <Label htmlFor="isCarAvailable" className="text-xl">
          Auto beschikbaar
        </Label>
        <SwitchWhite id="isCarAvailable" className="ml-8 align-middle" />
      </div>
      <ChooseSoftSkills />
      <div className="space-y-2">
        <Label htmlFor="notes" className="text-xl">
          Notities
        </Label>
        <Textarea className="bg-white text-black" />
      </div>
    </div>
  )
}

const JobFunctionCombobox = () => {
  const [commandOpen, setCommandOpen] = useState(false)
  const [jobFunctionInput, setJobFunctionInput] = useState('')
  const [selectedFunctions, setSelectedFunctions] = useState<
    (typeof jobFunctions)[0][]
  >([])

  function handleOnSelect(v: (typeof jobFunctions)[0]) {
    setSelectedFunctions((currentFunctions) => [...currentFunctions, v])
    setCommandOpen(false)
  }

  return (
    <div>
      <Label className="text-xl">Functie titel</Label>

      <div className="my-4 space-x-2 space-y-2">
        {selectedFunctions.map((currentJobFunction) => (
          <Badge
            key={currentJobFunction.ID}
            className="w-fit cursor-pointer rounded-3xl border border-secondary bg-accent/80 px-4 py-2 text-base text-white"
            onClick={() =>
              setSelectedFunctions((current) =>
                current.filter((r) => r.ID !== currentJobFunction.ID)
              )
            }
          >
            {currentJobFunction.Naam}
          </Badge>
        ))}
      </div>

      <Command>
        <CommandInput
          className="my-2 text-lg"
          placeholder="Voeg functie toe"
          onFocus={() => setCommandOpen(true)}
          value={jobFunctionInput}
          onChangeCapture={(v) => setJobFunctionInput(v.currentTarget.value)}
        />
        {
          <CommandList className={commandOpen ? 'visible' : 'hidden'}>
            <CommandEmpty>Geen regio gevonden</CommandEmpty>
            <CommandGroup>
              {jobFunctions.map((jobFunction) => {
                if (selectedFunctions.find((c) => jobFunction.ID === c.ID))
                  return
                return (
                  <CommandItem
                    key={jobFunction.ID}
                    value={jobFunction.Naam}
                    className="cursor-pointer"
                    onSelect={() => handleOnSelect(jobFunction)}
                  >
                    <div className="my-2 flex flex-col text-base">
                      <div className="mb-2 text-gray-700">
                        {jobFunction.Naam.split(
                          new RegExp(`(${jobFunctionInput})`)
                        ).map((part, index) =>
                          index === 1 ? (
                            <mark
                              className="bg-inherit font-bold text-black"
                              key={index}
                            >
                              {part}
                            </mark>
                          ) : (
                            part
                          )
                        )}
                      </div>
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        }
      </Command>
    </div>
  )
}

const jobFunctions = [
  {
    ID: 123456,
    Naam: '(HO) Hoofdredactie',
    Type: 'Functie',
    FunctieschaalID: [
      434961, 434963, 434962, 434964, 434965, 434843, 434960, 434966, 434770,
      434771, 434959,
    ],
  },
  {
    ID: 789012,
    Naam: '(DR) Drukker',
    Type: 'Functie',
    FunctieschaalID: [
      434961, 434963, 434962, 434964, 434965, 434772, 434960, 434966, 434770,
      434771, 434959,
    ],
  },
  {
    ID: 345678,
    Naam: '(VR) Verslaggever',
    Type: 'Functie',
    FunctieschaalID: [
      434961, 434963, 434962, 434964, 434965, 434843, 434960, 434966, 434770,
      434771, 434959,
    ],
  },
  {
    ID: 901234,
    Naam: '(AB) Afdelingsleider',
    Type: 'Functie',
    FunctieschaalID: [
      434961, 434963, 434962, 434964, 434965, 434772, 434960, 434966, 434770,
      434771, 434959,
    ],
  },
]

export default OnboardingAddJobProfile
