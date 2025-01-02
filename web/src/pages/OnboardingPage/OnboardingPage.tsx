import { useEffect, useState } from 'react'

import { navigate, useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AddAuthorizedSignatory from 'src/components/AddAuthorizedSignatory/AddAuthorizedSignatory'
import AddBranch from 'src/components/AddBranch/AddBranch'
import OnboardingAddJobProfile from 'src/components/OnboardingAddJobProfile/OnboardingAddJobProfile'
import OnboardingAvatarAndName from 'src/components/OnboardingAvatarAndName/OnboardingAvatarAndName'
import OnboardingContactPerson from 'src/components/OnboardingContactPerson/OnboardingContactPerson'
import OnboardingEmailAndPassword from 'src/components/OnboardingEmailAndPassword/OnboardingEmailAndPassword'
import OnboardingFinancial from 'src/components/OnboardingFinancial/OnboardingFinancial'
import OnboardingInternalOrganization from 'src/components/OnboardingInternalOrganization/OnboardingInternalOrganization'
import OnboardingPlanWork from 'src/components/OnboardingPlanWork/OnboardingPlanWork'
import OnboardingSelectRole from 'src/components/OnboardingSelectRole/OnboardingSelectRole'
import OnboardingSuccess from 'src/components/OnboardingSuccess/OnboardingSuccess'
import OnboardingWelcomeMessage from 'src/components/OnboardingWelcomeMessage/OnboardingWelcomeMessage'
import SelectBusiness from 'src/components/SelectBusiness/SelectBusiness'

export type OnboardingStages =
  | 'welcomeMessage'
  | 'emailAndPassword'
  | 'avatarAndName'
  | 'selectRole'
  | 'addBusiness'
  | 'addAuthorizedSignatory'
  | 'addBranch'
  | 'internalOrganization'
  | 'contactPerson'
  | 'addFinancialInfo'
  | 'successMessage'
  | 'addJobProfile'
  | 'planWork'

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
      <div className="flex min-h-screen flex-col bg-primary text-white">
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
          {onboardingStep === 'addFinancialInfo' && (
            <OnboardingFinancial setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'addBranch' && (
            <AddBranch setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'internalOrganization' && (
            <OnboardingInternalOrganization
              setOnboardingStep={setOnboardingStep}
            />
          )}
          {onboardingStep === 'contactPerson' && (
            <OnboardingContactPerson setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'successMessage' && (
            <OnboardingSuccess setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'addJobProfile' && (
            <OnboardingAddJobProfile setOnboardingStep={setOnboardingStep} />
          )}
          {onboardingStep === 'planWork' && (
            <OnboardingPlanWork setOnboardingStep={setOnboardingStep} />
          )}
        </main>
      </div>
    </>
  )
}

export default OnboardingPage
