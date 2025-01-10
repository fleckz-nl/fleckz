import { useContext } from 'react'

import logo from 'web/public/images/logo-white-text.png'

import { Button } from 'src/components/ui/button'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const OnboardingWelcomeMessage = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)

  return (
    <div className="center mx-auto flex-col gap-4 py-40">
      <img src={logo} alt="logo" className="w-56" />
      <span className="text-center text-xl italic">
        De zoekmachine voor uitzendkrachten
      </span>
      <Button
        onClick={() => setOnboardingStep('emailAndPassword')}
        className="my-20 bg-accent py-4 text-lg text-primary hover:bg-black hover:text-accent"
      >
        Begginen
      </Button>
    </div>
  )
}

export default OnboardingWelcomeMessage
