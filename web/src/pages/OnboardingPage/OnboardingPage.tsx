import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import OnboardingEmailAndPassword from 'src/components/OnboardingEmailAndPassword/OnboardingEmailAndPassword'
import OnboardingWelcomeMessage from 'src/components/OnboardingWelcomeMessage/OnboardingWelcomeMessage'

export type OnboardingStages =
  | 'welcomeMessage'
  | 'emailAndPassword'
  | 'avatarAndName'
  | 'selectRole'
  | 'addBusiness'
  | 'firstAction'

const OnboardingPage = () => {
  const [onboardingStep, setOnboardingStep] =
    useState<OnboardingStages>('welcomeMessage')
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
          {onboardingStep === 'avatarAndName' && <></>}
        </main>
      </div>
    </>
  )
}

export default OnboardingPage
