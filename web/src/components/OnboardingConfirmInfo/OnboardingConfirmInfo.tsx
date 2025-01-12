import { useContext } from 'react'

import { ArrowLeft } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const OnboardingConfirmInfo = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)
  function handlePreviousClick() {
    setOnboardingStep('internalOrganization')
  }
  function handleNextClick() {
    setOnboardingStep('successMessage')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />

      <h1 className="text-2xl font-bold">Bevestig uw gegevens</h1>
      <div className="flex bg-gray-800 px-4 text-lg text-white">
        <div className="my-4 flex flex-grow flex-col gap-2">
          <div>
            <Label>Naam</Label>
            <div>{currentInformation.naam}</div>
          </div>
          <div>
            <Label>Adres</Label>
            <p>
              {currentInformation.adressen[0].straatnaam}{' '}
              {currentInformation.adressen[0].huisnummer}
            </p>
            <p>
              {currentInformation.adressen[0].plaats}{' '}
              {currentInformation.adressen[0].postcode}
            </p>
          </div>
          <div>
            <Label>KvK nummer</Label>
            <div>{currentInformation.kvkNummer}</div>
          </div>
          <div>
            <Label>Tekenbevoegde persoon</Label>
            <div>{currentInformation.signaturePerson.name}</div>
          </div>
          <div>
            <Label>Onderdeel branche</Label>
            <div>{currentInformation.branche.onderdeel}</div>
          </div>
          <div>
            <Label>Sector</Label>
            <div>{currentInformation.branche.sector}</div>
          </div>
          <div>
            <Label>BTW-nummer</Label>
            <div>{currentInformation.btwNummer}</div>
          </div>
          <div>
            <Label>Sector</Label>
            <div>{currentInformation.branche.sector}</div>
          </div>
          <div>
            <Label>Regio&apos;s</Label>
            <div>
              {currentInformation.regios.map((r) => (
                <span
                  key={r}
                  className="after:content-[',_'] last:after:content-none"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Label>Naam rekeninghouder</Label>
            <div>{currentInformation.signaturePerson.name}</div>
          </div>
        </div>
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

const Label = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-primary-foreground">{children}</h2>
}

const currentInformation = {
  kvkNummer: 123456789,
  naam: 'Werkforce Utrecht B.V.',
  adressen: [
    {
      straatnaam: 'Amstelplein',
      huisnummer: 123,
      postbusnummer: 123,
      postcode: '1234 AB',
      plaats: 'Teststad',
    },
  ],
  sbiActiviteiten: [
    {
      sbiCode: 1234,
      sbiOmschrijving: 'Test activiteit',
    },
  ],
  signaturePerson: {
    name: 'Maike Janssen',
    email: 'mjanssen@test.nl',
    phone: '0612345678',
  },
  branche: { naam: 'Uitzenden', onderdeel: 'uitzendbureaus', sector: 52 },
  btwNummer: '123456789',
  regios: ['Utrecht', 'Amsterdam'],
  rekeningnummer: {
    naam: 'Werkforce Utrecht B.V.',
  },
}

export default OnboardingConfirmInfo
