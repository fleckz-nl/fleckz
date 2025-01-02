import { ArrowLeft } from 'lucide-react'

import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'
type OnboardingPlanWorkProps = {
  setOnboardingStep: React.Dispatch<React.SetStateAction<OnboardingStages>>
}
const OnboardingPlanWork = ({ setOnboardingStep }: OnboardingPlanWorkProps) => {
  function handlePreviousClick() {
    setOnboardingStep('addJobProfile')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-6 text-white">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold text-white">
        Wanneer zijn er medewerkers nodig?
      </h1>
      <p>Klik in de agenda of klik op werk plaatsen.</p>
    </div>
  )
}

export default OnboardingPlanWork
