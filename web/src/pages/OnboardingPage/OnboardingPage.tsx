import { useEffect, useState } from 'react'

import { navigate, useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import OnboardingAvatarAndName from 'src/components/OnboardingAvatarAndName/OnboardingAvatarAndName'
import OnboardingEmailAndPassword from 'src/components/OnboardingEmailAndPassword/OnboardingEmailAndPassword'
import OnboardingSelectRole from 'src/components/OnboardingSelectRole/OnboardingSelectRole'
import OnboardingWelcomeMessage from 'src/components/OnboardingWelcomeMessage/OnboardingWelcomeMessage'

export type OnboardingStages =
  | 'welcomeMessage'
  | 'emailAndPassword'
  | 'avatarAndName'
  | 'selectRole'
  | 'addBusiness'
  | 'firstAction'

const OnboardingPage = () => {
  const urlParams = useParams()
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStages>(
    (urlParams.stage as OnboardingStages) || 'welcomeMessage'
  )

  useEffect(() => {
    navigate(`?stage=${onboardingStep}`, { replace: true })
  }, [onboardingStep])

  return (
    <>
      <Metadata title="Onboarding" description="Onboarding page" />
      <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
        <main className="container">
          {onboardingStep === 'welcomeMessage' && (
            <OnboardingWelcomeMessage setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'emailAndPassword' && (
            <OnboardingEmailAndPassword setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'avatarAndName' && (
            <OnboardingAvatarAndName setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'selectRole' && (
            <OnboardingSelectRole setOnboardingStep={setOnboardingStep} />
          )}
        </main>
      </div>
    </>
  )
}

export default OnboardingPage
