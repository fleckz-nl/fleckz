import { SetStateAction, useState } from 'react'

import { ArrowLeft, RotateCw } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/ui/command'
import { Separator } from 'src/components/ui/separator'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type SelectBusinessProps = {
  setOnboardingStep: React.Dispatch<SetStateAction<OnboardingStages>>
}

const SelectBusiness = ({ setOnboardingStep }: SelectBusinessProps) => {
  const [kvkNumber, setKvkNumber] = useState('')
  const [commandOpen, setCommandOpen] = useState(kvkNumber || false)
  const [showCard, setShowCard] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState('')
  const [enableNext, setEnableNext] = useState(false)

  function onSelectBusiness(v: string) {
    setSelectedBusiness(v)
    setKvkNumber(v)
    setShowCard(true)
    setEnableNext(true)
  }

  function handleResetClick() {
    setShowCard(false)
    setEnableNext(false)
  }

  function handleNextClick() {
    setOnboardingStep('addAuthorizedSignatory')
  }

  function handlePreviousClick() {
    setOnboardingStep('selectRole')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      {showCard || (
        <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      )}
      <h1 className="text-2xl font-bold">Algemeen</h1>
      <div className="flex max-w-2xl flex-col">
        <h2 className="mb-2 font-bold">
          {showCard ? 'Uw bedrijf' : 'Vul uw KVK nummer in'}
        </h2>
        {showCard ? (
          SelectedBusinessCard(
            kvkData.find((b) => b.kvkNummer === selectedBusiness),
            handleResetClick
          )
        ) : (
          <Command className="bg-foreground bg-white">
            <CommandInput
              className="my-4 text-lg"
              placeholder="12345678"
              value={kvkNumber}
              onValueChange={(v) => {
                setKvkNumber(v)
                setCommandOpen(true)
              }}
            />
            {commandOpen && (
              <CommandList>
                <CommandEmpty>Geen bedrijf gevonden</CommandEmpty>
                <CommandGroup>
                  {kvkData.map((business) => (
                    <CommandItem
                      key={business.kvkNummer}
                      value={business.kvkNummer}
                      className="cursor-pointer"
                      onSelect={onSelectBusiness}
                    >
                      <div className="my-4 flex flex-col text-base">
                        <div className="mb-2 text-gray-500">
                          {business.kvkNummer
                            .split(new RegExp(`(${kvkNumber})`))
                            .map((part, index) =>
                              index === 1 ? (
                                <mark
                                  className="bg-inherit text-black"
                                  key={index}
                                >
                                  {part}
                                </mark>
                              ) : (
                                part
                              )
                            )}
                        </div>
                        <div className="font-bold">{business.naam}</div>
                        <div>
                          {business.adressen[0].straatnaam}{' '}
                          {business.adressen[0].huisnummer}
                        </div>
                        <div>
                          {business.adressen[0].postbusnummer}{' '}
                          {business.adressen[0].postcode}{' '}
                          {business.adressen[0].plaats}
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        )}
      </div>
      <Button
        className="self-end bg-secondary py-4 text-lg"
        type="submit"
        disabled={enableNext ? false : true}
        onClick={handleNextClick}
      >
        Volgende
      </Button>
    </div>
  )
}

const SelectedBusinessCard = (
  business: (typeof kvkData)[0],
  handleResetClick: () => void
) => {
  return (
    <div className="flex bg-gray-800 px-4 text-lg text-white">
      <div className="my-4 flex flex-grow flex-col gap-2">
        <div className="mb-2">{business.kvkNummer}</div>
        <div className="font-bold">{business.naam}</div>
        <div>
          {business.adressen[0].straatnaam} {business.adressen[0].huisnummer}
        </div>
        <div>
          {business.adressen[0].postbusnummer} {business.adressen[0].postcode}{' '}
          {business.adressen[0].plaats}
        </div>
        <h3 className="mt-4">SBI Codes</h3>
        <ul>
          {business.sbiActiviteiten.map((a) => (
            <li key={a.sbiCode}>
              {a.sbiCode}: {a.sbiOmschrijving}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-12 ml-8 mr-2 flex-shrink">
        <Separator className="bg-gray-500" orientation="vertical" />
      </div>
      <div className="my-auto flex min-w-20 justify-center">
        <RotateCw
          className="size-10 cursor-pointer"
          onClick={handleResetClick}
        />
      </div>
    </div>
  )
}

const kvkData = [
  {
    kvkNummer: '1234567890',
    indNonMailing: 'true',
    naam: 'ABC Business Solutions',
    formeleRegistratiedatum: '15-01-2023',
    materieleRegistratie: {
      startDate: '10-09-2022',
      endDate: null,
    },
    statutaireNaam: 'ABC Business Solutions bv',
    handelsnamen: ['ABC Business Services', 'ABC Consulting'],
    sbiActiviteiten: [
      {
        sbiCode: 63100,
        sbiOmschrijving: 'Bedrijfsadviseurschap en raadplegingsservices',
        indHoofdactiviteit: true,
      },
      {
        sbiCode: 72200,
        sbiOmschrijving: 'Marketing- en advertentieagenturen',
        indHoofdactiviteit: false,
      },
    ],
    adressen: [
      {
        type: 'Woonadres',
        IndAfgeschermd: 'Nee',
        volledigAdres: 'Prinsengracht 333, 1016 GV, Amsterdam',
        straatnaam: 'Prinsengracht',
        huisnummer: '333',
        huisnummerToevoeging: 'A',
        huisletter: '',
        toevoegingAdres:
          'Locatie op een tweede verdieping in een historisch gebouw',
        postcode: '1016 GV',
        postbusnummer: 1234,
        plaats: 'Amsterdam',
        straatHuisnummer: 'Prinsengracht 333',
        postcodeWoonplaats: '1016 GV Amsterdam',
        regio: 'Noord-Holland',
        land: 'Nederland',
        geoData: {
          'BAG ID': '1112223333',
          latitude: 52.3702,
          longitude: 4.8948,
        },
      },
    ],
  },
  {
    kvkNummer: '9876543210',
    indNonMailing: 'false',
    naam: 'XYZ Retail Ltd.',
    formeleRegistratiedatum: '20-06-2022',
    materieleRegistratie: {
      startDate: '30-12-2021',
      endDate: null,
    },
    statutaireNaam: 'XYZ Retail Ltd.',
    handelsnamen: ['XYZ Superstore', 'XYZ Online Shop'],
    sbiActiviteiten: [
      {
        sbiCode: 47100,
        sbiOmschrijving: 'Retailhandel - algemene waren',
        indHoofdactiviteit: true,
      },
    ],
    adressen: [
      {
        type: 'Bedrijfsadres',
        IndAfgeschermd: 'Ja',
        volledigAdres: 'Kanaalweg 1, 5656 AB, Eindhoven',
        straatnaam: 'Kanaalweg',
        huisnummer: '1',
        huisnummerToevoeging: '',
        huisletter: '',
        toevoegingAdres:
          'Locatie in een bedrijvencomplex met meerdere verdiepingen en kamer',
        postcode: '5656 AB',
        postbusnummer: 200,
        plaats: 'Eindhoven',
        straatHuisnummer: 'Kanaalweg 1',
        postcodeWoonplaats: '5656 AB Eindhoven',
        regio: 'Noord-Brabant',
        land: 'Nederland',
        geoData: {
          'BAG ID': '9876543210',
          latitude: 51.4694,
          longitude: 5.3456,
        },
      },
    ],
  },
  {
    kvkNummer: '5432109876',
    indNonMailing: 'true',
    naam: 'QRS Technology Solutions',
    formeleRegistratiedatum: '15-08-2023',
    materieleRegistratie: {
      startDate: '01-05-2022',
      endDate: null,
    },
    statutaireNaam: 'QRS Technology Solutions bv',
    handelsnamen: ['QRS IT Services', 'QRS Software Development'],
    sbiActiviteiten: [
      {
        sbiCode: 59100,
        sbiOmschrijving:
          'IT-services (met inbegrip van het ontwikkelen van computer-software)',
        indHoofdactiviteit: true,
      },
    ],
    adressen: [
      {
        type: 'Straat en huisnummer',
        IndAfgeschermd: 'Nee',
        volledigAdres: 'Westerweg 12, 1234 AB, Utrecht',
        straatnaam: 'Westerweg',
        huisnummer: '12',
        huisnummerToevoeging: '',
        huisletter: '',
        toevoegingAdres: 'Locatie in gebouw met meerdere verdiepingen en kamer',
        postcode: '1234 AB',
        postbusnummer: 101,
        plaats: 'Utrecht',
        straatHuisnummer: 'Westerweg 12',
        postcodeWoonplaats: '1234 AB Utrecht',
        regio: 'Noord-Holland',
        land: 'Nederland',
        geoData: {
          'BAG ID': '1234567890',
          latitude: 52.3702,
          longitude: 4.8948,
        },
      },
    ],
  },
]

export default SelectBusiness
