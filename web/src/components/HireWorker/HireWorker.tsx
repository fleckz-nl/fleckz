import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type HireWorkerProps = {
  setOnboardingStep: React.Dispatch<React.SetStateAction<OnboardingStages>>
}

const HireWorker = ({ setOnboardingStep }: HireWorkerProps) => {
  function handlePreviousClick() {
    setOnboardingStep('planWork')
  }
  function handleNextClick() {
    // setOnboardingStep('')
  }
  return (
    <div>
      <h2>{'HireWorker'}</h2>
      <p>{'Find me in ./web/src/components/HireWorker/HireWorker.tsx'}</p>
    </div>
  )
}

export default HireWorker
