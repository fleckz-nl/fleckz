import { useContext } from 'react'

import { ArrowLeft } from 'lucide-react'

import TextInput from 'src/components/TextInput/TextInput'
import { Button } from 'src/components/ui/button'
import { PercentageInput } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from 'src/components/ui/select'
import { SwitchWhite } from 'src/components/ui/switch'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const OnboardingFinancial = () => {
  const { setOnboardingStep, role } = useContext(OnboardingContext)

  function handlePreviousClick() {
    if (role === 'TEMP_AGENCY_REP') return setOnboardingStep('addBranch')
    setOnboardingStep('addAuthorizedSignatory')
  }
  function handleNextClick() {
    if (role === 'TEMP_AGENCY_REP') return setOnboardingStep('contactPerson')
    setOnboardingStep('addBranch')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold text-white">Financieel</h1>
      <div>
        <Label htmlFor="btw-reversed">BTW Verlegd</Label>
        <SwitchWhite id="btw-reversed" className="ml-8 align-middle" />
      </div>
      <div>
        <Label htmlFor="cost-center">Kostenplaats</Label>
        <SwitchWhite id="cost-center" className="ml-8 align-middle" />
      </div>
      <div>
        <Label>Factuur splitsen op</Label>
        <Select>
          <SelectTrigger className="bg-white text-black hover:bg-white">
            <SelectValue placeholder="Kies..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cost-center">Kostenplaats</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="candidate">Kandidaat</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="g-rekening">G-rekening nummer</Label>
        <TextInput id="g-rekening" />
      </div>
      <div className="flex items-center gap-4">
        <Label htmlFor="percentage">Percentage</Label>
        <PercentageInput
          id="percentage"
          className="max-w-20 bg-white text-black"
          defaultValue={0}
          onClick={(e) => e.currentTarget.select()}
        />
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

export default OnboardingFinancial
