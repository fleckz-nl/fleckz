import { useContext, useState } from 'react'

import { ArrowLeft } from 'lucide-react'

import TextInput from 'src/components/TextInput/TextInput'
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
import { Label } from 'src/components/ui/label'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const AddBranch = () => {
  const { setOnboardingStep, role } = useContext(OnboardingContext)

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
  function handleNextClick() {
    if (role === 'TEMP_AGENCY_REP') return setOnboardingStep('addFinancialInfo')
    setOnboardingStep('internalOrganization')
  }
  function handlePreviousClick() {
    if (role === 'TEMP_AGENCY_REP')
      return setOnboardingStep('addAuthorizedSignatory')
    setOnboardingStep('addFinancialInfo')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold">Branche</h1>
      <div>
        <Label htmlFor="sector">Sector</Label>
        <TextInput id="sector" defaultValue={'Sector'} />
      </div>
      <div>
        <Label htmlFor="branch">Branche</Label>
        <TextInput id="branch" defaultValue={''} />
      </div>
      <div>
        <Label>Onderdeel Branche</Label>
        <TextInput defaultValue={''} />
      </div>
      <div>
        <Label>Regio&apos;s</Label>
        <div className="my-t flex flex-wrap gap-2">
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
        <Command className="my-2">
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
                        <div className="text-gray-700">
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
      {role === 'CLIENT' && (
        <div>
          <Label>CAO</Label>

          <SelectCao />
        </div>
      )}
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

function SelectCao() {
  const [commandOpen, setCommandOpen] = useState(false)
  const [caoInput, setCaoInput] = useState('')

  function handleOnSelect(value) {
    setCaoInput(value)
    setCommandOpen(false)
  }

  const caos = [
    {
      CAOID: 4289,
      Naam: 'Energie & Milieu',
      CAOType: 'Bedrijfstakcao',
      SZCode: 3401,
      SBI: 43,
      GegenereerdSBI: ['4323'],
      Sector: 'Energie en Technologie',
      Bedrijfstak: 'Energie',
      FNVID: '2145',
      Einddatum: null,
      Opgeheven: 'n.v.t.',
    },
    {
      CAOID: 3421,
      Naam: 'Gezondheid & Welzijn',
      CAOType: 'Bedrijfstakcao',
      SZCode: 3810,
      SBI: 38,
      GegenereerdSBI: ['3823'],
      Sector: 'Gezondheid en Sociale Zorg',
      Bedrijfstak: 'Gezondheidsdiensten',
      FNVID: '1904',
      Einddatum: null,
      Opgeheven: 'n.v.t.',
    },
    {
      CAOID: 4015,
      Naam: 'Informatica & Communicatie',
      CAOType: 'Bedrijfstakcao',
      SZCode: 3100,
      SBI: 31,
      GegenereerdSBI: ['3111', '3112'],
      Sector: 'Informatie en Communicatie',
      Bedrijfstak: 'Informatica',
      FNVID: '1917',
      Einddatum: null,
      Opgeheven: 'n.v.t.',
    },
    {
      CAOID: 4358,
      Naam: 'Logistiek & Transport',
      CAOType: 'Bedrijfstakcao',
      SZCode: 2400,
      SBI: 24,
      GegenereerdSBI: ['2411', '2412'],
      Sector: 'Logistiek en Transport',
      Bedrijfstak: 'Logistica',
      FNVID: '2073',
      Einddatum: null,
      Opgeheven: 'n.v.t.',
    },
    {
      CAOID: 4671,
      Naam: 'Openbare Omroepen en Media',
      CAOType: 'Bedrijfstakcao',
      SZCode: 4100,
      SBI: 41,
      GegenereerdSBI: ['4112'],
      Sector: 'Mediabedrijven',
      Bedrijfstak: 'Media en Communicatie',
      FNVID: '1929',
      Einddatum: null,
      Opgeheven: 'n.v.t.',
    },
  ]
  return (
    <Command className="my-2">
      <CommandInput
        className="my-2 text-lg"
        placeholder="Kies cao"
        onFocus={() => setCommandOpen(true)}
        value={caoInput}
        onChangeCapture={(v) => setCaoInput(v.currentTarget.value)}
      />
      {
        <CommandList className={commandOpen ? 'visible' : 'hidden'}>
          <CommandEmpty>Geen regio gevonden</CommandEmpty>
          <CommandGroup>
            {caos.map((cao) => {
              return (
                <CommandItem
                  key={cao.CAOID}
                  value={cao.Naam}
                  className="cursor-pointer"
                  onSelect={handleOnSelect}
                >
                  <div className="my-2 flex flex-col text-base">
                    <div className="text-gray-700">
                      {cao.Naam.split(new RegExp(`(${caoInput})`, 'i')).map(
                        (part, index) =>
                          index === 1 ? (
                            <mark
                              className="bg-inherit font-semibold text-black"
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
  )
}

export default AddBranch
