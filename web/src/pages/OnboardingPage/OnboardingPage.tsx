import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

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
        <main className="container"></main>
      </div>
    </>
  )
}

export default OnboardingPage
