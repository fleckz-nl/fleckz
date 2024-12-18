import { useState } from 'react'

import TextInput from 'src/components/TextInput/TextInput'
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
import { Separator } from 'src/components/ui/separator'

const ContactPersonForm = () => {
  const [regionInput, setRegionInput] = useState('')
  const [selectedRegions, setSelectedRegions] = useState([])
  const [commandOpen, setCommandOpen] = useState(false)

  function handleOnSelectRegion(value: string) {
    setSelectedRegions((currentRegions) => {
      console.log(value)
      if (currentRegions == null) return [value]
      if (currentRegions.includes(value))
        return currentRegions.filter((region) => region !== value)

      return [...currentRegions, value]
    })
    setCommandOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label>Voornaam</Label>
          <TextInput />
        </div>
        <div>
          <Label>Achternaam</Label>
          <TextInput />
        </div>
      </div>
      <div>
        <Label>Functie</Label>
        <TextInput />
      </div>
      <div>
        <Label>Email</Label>
        <TextInput />
      </div>
      <div>
        <Label>Telefoon</Label>
        <TextInput />
      </div>
      <div className="my-4 flex flex-wrap gap-2">
        {selectedRegions.map((region) => (
          <Badge
            key={region}
            className="w-fit cursor-pointer rounded-3xl border border-secondary bg-accent/80 px-4 py-2 text-base text-white"
            onClick={() =>
              setSelectedRegions((current) =>
                current.filter((r) => r !== region)
              )
            }
          >
            {region}
          </Badge>
        ))}
      </div>
      <div>
        <Label>Regio&apos;s</Label>
        <Command>
          <CommandInput
            className="my-2 text-lg"
            placeholder="Voeg regio toe"
            onFocus={() => setCommandOpen(true)}
            value={regionInput}
            onChangeCapture={(v) => setRegionInput(v.currentTarget.value)}
          />
          {commandOpen && (
            <CommandList>
              <CommandEmpty>Geen regio gevonden</CommandEmpty>
              <CommandGroup>
                {regions.map((region) => {
                  if (selectedRegions.find((r) => region.regionName === r))
                    return
                  return (
                    <CommandItem
                      key={region.id}
                      value={region.regionName}
                      className="cursor-pointer"
                      onSelect={handleOnSelectRegion}
                    >
                      <div className="my-2 flex flex-col text-base">
                        <div className="mb-2 text-gray-700">
                          {region.regionName
                            .split(new RegExp(`(${regionInput})`))
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
      <Separator className="mb-4 mt-6 h-0.5 w-full bg-primary-foreground/30" />
    </>
  )
}

const regions = [
  {
    id: 1,
    regionName: 'North Holland (Noord-Holland)',
    code: 'NH',
    parent_id: null,
  },
  {
    id: 2,
    regionName: 'Flevoland',
    code: 'FL',
    parent_id: 1,
  },
  {
    id: 3,
    regionName: 'Groningen (Groningen)',
    code: 'GR',
    parent_id: 1,
  },
  {
    id: 4,
    regionName: 'Drenthe',
    code: 'DR',
    parent_id: 1,
  },
  {
    id: 5,
    regionName: 'Overijssel',
    code: 'OV',
    parent_id: 1,
  },
  {
    id: 6,
    regionName: 'Friesland (Fryslân)',
    code: 'FR',
    parent_id: 1,
  },
  {
    id: 7,
    regionName: 'North Brabant (Noord-Brabant)',
    code: 'NB',
    parent_id: 1,
  },
  {
    id: 8,
    regionName: 'Limburg (Limburg)',
    code: 'LM',
    parent_id: 7,
  },
  {
    id: 9,
    regionName: 'Noord-Brabantse Eilanden (Zuid-Plaatse)',
    code: 'NBE',
    parent_id: 7,
  },
  {
    id: 10,
    regionName: 'Zeeland (Zeeuwen)',
    code: 'ZE',
    parent_id: 1,
  },
  {
    id: 11,
    regionName: 'South Holland (Zuid-Holland)',
    code: 'SH',
    parent_id: 7,
  },
  {
    id: 12,
    regionName: 'Utrechtse Eilanden (Zuidoostplaatse)',
    code: 'UE',
    parent_id: 11,
  },
  {
    id: 13,
    regionName: 'Groningen Zuidoost (Grone Zuidoost)',
    code: 'GZ',
    parent_id: 3,
  },
]

export default ContactPersonForm
