import { ArrowLeft } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import WorkSchedularCell from 'src/components/WorkSchedularCell'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'
type OnboardingPlanWorkProps = {
  setOnboardingStep: React.Dispatch<React.SetStateAction<OnboardingStages>>
}
const OnboardingPlanWork = ({ setOnboardingStep }: OnboardingPlanWorkProps) => {
  function handlePreviousClick() {
    setOnboardingStep('addJobProfile')
  }
  function handleNextClick() {
    setOnboardingStep('hireWorker')
  }
  return (
    <div className="mx-auto my-8 flex max-w-xl flex-col gap-6 text-white">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold text-white">
        Wanneer zijn er medewerkers nodig?
      </h1>
      <p>Klik in de agenda of klik op werk plaatsen.</p>
      <div className="mb-16">
        <WorkSchedularCell />
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

export default OnboardingPlanWork
