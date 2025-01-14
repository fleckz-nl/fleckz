import { useState } from 'react'

import { AvatarImage } from '@radix-ui/react-avatar'

import { Worker } from 'src/components/CvsList/CvsList'
import EditWorkerInfo from 'src/components/EditWorkerInfo/EditWorkerInfo'
import { Avatar, AvatarFallback } from 'src/components/ui/avatar'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/ui/popover'

type WorkerInfoCardProps = {
  worker: Worker
}

const WorkerInfoCard = ({ worker }: WorkerInfoCardProps) => {
  const {
    id,
    firstName,
    lastName,
    jobFunction,
    yearOfExp,
    age,
    hasCar,
    livingPlace,
    factor,
    softSkills: defaultSoftSkills,
  } = worker
  const [editOpen, setEditOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [skillInput, setSkillInput] = useState('')
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    defaultSoftSkills || ['Flexibiliteit', 'Creativiteit']
  )

  function handleOnSelectSkill(value: string) {
    setSelectedSkills((currentSkills) => {
      if (currentSkills == null) return [value]
      if (currentSkills.includes(value))
        return currentSkills.filter((skill) => skill !== value)

      return [...currentSkills, value]
    })
    setCommandOpen(false)
  }

  function handleEditClick() {
    setEditOpen(true)
  }

  return (
    <>
      {editOpen ? (
        <dialog
          className="fixed inset-0 z-20 h-full w-full overflow-y-auto bg-primary py-8"
          open
        >
          <EditWorkerInfo worker={worker} setEditOpen={setEditOpen} />
        </dialog>
      ) : (
        <div className="container flex max-w-md flex-col gap-4 break-words bg-black/70  p-2 text-white">
          <div className="flex items-center gap-4">
            <Avatar className="size-16">
              {/* TODO: Get the photo of each temp agency worker for AvatarImage*/}
              <AvatarImage src={`https://avatar.iran.liara.run/public/${id}`} />
              <AvatarFallback>
                <img
                  src={`https://avatar.iran.liara.run/public/${id}`}
                  alt="Random avatar"
                />
              </AvatarFallback>
            </Avatar>
            <h2 className="font-semibold">
              {firstName} {lastName}
            </h2>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-white/70">Functie</span>
            <span>{jobFunction}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-white/70">Jaren werkervaring</span>
            <span>{yearOfExp}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-white/70">Leeftijd</span>
            <span>{age}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-white/70">Auto beschikbaar</span>
            <span>{hasCar ? 'Ja' : 'Nee'}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-white/70">Woonplaats</span>
            <span>{livingPlace}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-white/70">Factor</span>
            <div className="w-14 border-2 border-primary-foreground bg-white p-0.5 text-center text-black">
              {factor}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {selectedSkills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="w-fit cursor-pointer rounded-3xl border border-secondary bg-accent/80  text-white"
                    onClick={() =>
                      setSelectedSkills((current) =>
                        current.filter((c) => c !== skill)
                      )
                    }
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="mx-auto flex flex-wrap justify-center gap-4">
            <Popover>
              <PopoverTrigger>
                <Button variant="accent" className="text-md text-primary">
                  Soft skills toevoegen
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <div>
                  <Command className="bg-white">
                    <CommandInput
                      className="my-2"
                      placeholder="Voeg soft skills toe"
                      onFocus={() => setCommandOpen(true)}
                      value={skillInput}
                      onChangeCapture={(v) =>
                        setSkillInput(v.currentTarget.value)
                      }
                    />
                    {commandOpen && (
                      <CommandList>
                        <CommandGroup>
                          {softSkills.map((skill) => {
                            if (selectedSkills.find((c) => skill.name === c))
                              return
                            return (
                              <CommandItem
                                key={skill.id}
                                value={skill.name}
                                className="cursor-pointer"
                                onSelect={handleOnSelectSkill}
                              >
                                <div className="my-2 flex flex-col text-base">
                                  <div className="mb-2 text-gray-700">
                                    {skill.name
                                      .split(new RegExp(`(${skillInput})`))
                                      .map((part, index) =>
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
                    )}
                  </Command>
                </div>
              </PopoverContent>
            </Popover>
            <Button
              variant="accent"
              className="text-md"
              onClick={handleEditClick}
            >
              Aanpassen
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export type Skill =
  | 'Flexibiliteit'
  | 'Collectiviteit'
  | 'Resultaatgerichtheid'
  | 'Innovatie'
  | 'Toewijding'
  | 'Diversiteit'
  | 'Transparantie'
  | 'Leren'
  | 'Creativiteit'
  | 'Teamwerk'

export type SoftSkill = {
  id: string
  name: Skill
}

export const softSkills: SoftSkill[] = [
  {
    id: 'Q2K3M4N5L6O7P8',
    name: 'Flexibiliteit',
  },
  {
    id: 'T9G8F7E6D5C4B3A2',
    name: 'Collectiviteit',
  },
  {
    id: 'V1U0T9R8Q7P6O5N4M3L2',
    name: 'Resultaatgerichtheid',
  },
  {
    id: 'B8Y7X6W5V4U3T2S1R0',
    name: 'Innovatie',
  },
  {
    id: 'F6E5D4C3B2A1Z0Y9X8',
    name: 'Toewijding',
  },
  {
    id: 'G5H4F3E2D1C0B9A8',
    name: 'Diversiteit',
  },
  {
    id: 'P1Q0O9N8M7L6K5J4I3H2G1',
    name: 'Transparantie',
  },
  {
    id: 'X7Z6W5V4T3S2R1Q0P9',
    name: 'Leren',
  },
  {
    id: 'Y8F7E6D5C4B3A2O1N0M9',
    name: 'Creativiteit',
  },
  {
    id: 'Z9T8S7R6Q5P4O3N2L1K0J9',
    name: 'Teamwerk',
  },
]

export default WorkerInfoCard
