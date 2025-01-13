import { useState } from 'react'

import { Badge } from 'src/components/ui/badge'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/ui/command'
import { Label } from 'src/components/ui/label'

const ChooseSoftSkills = () => {
  const [commandOpen, setCommandOpen] = useState(false)
  const [skillInput, setSkillInput] = useState('')
  const [selectedSkills, setSelectedSkills] = useState([])

  function handleOnSelectSkill(value: string) {
    setSelectedSkills((currentCultures) => {
      if (currentCultures == null) return [value]
      if (currentCultures.includes(value))
        return currentCultures.filter((culture) => culture !== value)

      return [...currentCultures, value]
    })
    setCommandOpen(false)
  }

  return (
    <div className="space-y-2">
      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map((culture) => (
            <Badge
              key={culture}
              className="w-fit cursor-pointer rounded-3xl border border-secondary bg-accent/80 px-4 py-2 text-base text-white"
              onClick={() =>
                setSelectedSkills((current) =>
                  current.filter((c) => c !== culture)
                )
              }
            >
              {culture}
            </Badge>
          ))}
        </div>
      )}
      <div>
        <Command className="bg-white">
          <CommandInput
            className="my-2 text-lg"
            placeholder="Voeg soft skills toe"
            onFocus={() => setCommandOpen(true)}
            value={skillInput}
            onChangeCapture={(v) => setSkillInput(v.currentTarget.value)}
          />
          {commandOpen && (
            <CommandList>
              <CommandEmpty>Geen soft skills gevonden</CommandEmpty>
              <CommandGroup>
                {softSkills.map((skill) => {
                  if (selectedSkills.find((c) => skill.name === c)) return
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
    </div>
  )
}

const softSkills = [
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

export default ChooseSoftSkills
