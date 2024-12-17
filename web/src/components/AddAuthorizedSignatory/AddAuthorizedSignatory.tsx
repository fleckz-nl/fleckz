import { SetStateAction } from 'react'

import { ArrowLeft } from 'lucide-react'

import TextInput from 'src/components/TextInput/TextInput'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type AddAuthorizedSignatoryProps = {
  setOnboardingStep: React.Dispatch<SetStateAction<OnboardingStages>>
}

const AddAuthorizedSignatory = ({
  setOnboardingStep,
}: AddAuthorizedSignatoryProps) => {
  function handleNextClick() {
    // TODO: add the next step
    setOnboardingStep('selectRole')
  }

  function handlePreviousClick() {
    setOnboardingStep('addBusiness')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold">Tekenbevoegde persoon</h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label>Voornaam</Label>
          <TextInput defaultValue={authSignatoryData[0].voornaam} />
        </div>
        <div>
          <Label>Achternaam</Label>
          <TextInput defaultValue={authSignatoryData[0].achternaam} />
        </div>
      </div>
      <div>
        <Label>Email</Label>
        <TextInput defaultValue={authSignatoryData[0].emailadres} />
      </div>
      <div>
        <Label>Telefoon</Label>
        <TextInput defaultValue={authSignatoryData[0].telefoonnummer} />
      </div>
      <div>
        <Label>Emailadres facturatie</Label>
        <TextInput defaultValue={authSignatoryData[0].emailadresFacturatie} />
      </div>
      <div>
        <Label>Naam rekeninghouder</Label>
        <TextInput defaultValue={authSignatoryData[0].naamRekeninghouder} />
      </div>
      <div>
        <Label>Eigen IBAN</Label>
        <TextInput defaultValue={authSignatoryData[0].IBAN} />
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

const authSignatoryData = [
  {
    id: 1,
    voornaam: 'Pieter',
    achternaam: 'Pietersen',
    emailadres: 'pieter.pietersen@fwu.nl',
    telefoonnummer: '0987654321',
    emailadresFacturatie: 'factuur@flexwerk.nl',
    naamRekeninghouder: 'Pieter Pietersen',
    IBAN: 'NL00ABCD1234',
  },
  {
    id: 2,
    voornaam: 'Jan',
    achternaam: 'Doe',
    emailadres: 'jan.doe@example.com',
    telefoonnummer: '0123456789',
    emailadresFacturatie: 'factuur@exampel.nl',
    naamRekeninghouder: 'Jan Doe',
    IBAN: 'NL00ABCD5678',
  },
  {
    id: 3,
    voornaam: 'Sandra',
    achternaam: 'Leeuwen',
    emailadres: 'sandra.leeuwen@example.com',
    telefoonnummer: '0770123456',
    emailadresFacturatie: 'factuur@exampel.nl',
    naamRekeninghouder: 'Sandra Leeuwen',
    IBAN: 'NL00ABCD9012',
  },
]

export default AddAuthorizedSignatory
