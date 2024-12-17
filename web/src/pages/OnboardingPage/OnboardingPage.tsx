import { useEffect, useState } from 'react'

import { navigate, useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AddAuthorizedSignatory from 'src/components/AddAuthorizedSignatory/AddAuthorizedSignatory'
import OnboardingAvatarAndName from 'src/components/OnboardingAvatarAndName/OnboardingAvatarAndName'
import OnboardingEmailAndPassword from 'src/components/OnboardingEmailAndPassword/OnboardingEmailAndPassword'
import OnboardingInternalOrganization from 'src/components/OnboardingInternalOrganization/OnboardingInternalOrganization'
import OnboardingSelectRole from 'src/components/OnboardingSelectRole/OnboardingSelectRole'
import OnboardingWelcomeMessage from 'src/components/OnboardingWelcomeMessage/OnboardingWelcomeMessage'
import SelectBusiness from 'src/components/SelectBusiness/SelectBusiness'

export type OnboardingStages =
  | 'welcomeMessage'
  | 'emailAndPassword'
  | 'avatarAndName'
  | 'selectRole'
  | 'addBusiness'
  | 'addAuthorizedSignatory'
  | 'internalOrganization'

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
          {onboardingStep === 'addBusiness' && (
            <SelectBusiness setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'addAuthorizedSignatory' && (
            <AddAuthorizedSignatory setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'internalOrganization' && (
            <OnboardingInternalOrganization
              setOnboardingStep={setOnboardingStep}
            />
          )}
        </main>
      </div>
    </>
  )
}

export default OnboardingPage
