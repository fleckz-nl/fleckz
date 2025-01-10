import { useEffect, useState } from 'react'

import { Role } from 'types/graphql'

import { navigate, useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AddAuthorizedSignatory from 'src/components/AddAuthorizedSignatory/AddAuthorizedSignatory'
import AddBranch from 'src/components/AddBranch/AddBranch'
import HireWorker from 'src/components/HireWorker/HireWorker'
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
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

export type OnboardingStages =
  | 'welcomeMessage'
  | 'emailAndPassword'
  | 'avatarAndName'
  | 'selectRole'
  | ClientOnboardingStages
  | TempAgencyRepOnboardingStages

type ClientOnboardingStages =
  | 'addBusiness'
  | 'addAuthorizedSignatory'
  | 'addBranch'
  | 'internalOrganization'
  | 'contactPerson'
  | 'addFinancialInfo'
  | 'successMessage'
  | 'addJobProfile'
  | 'planWork'
  | 'hireWorker'

type TempAgencyRepOnboardingStages =
  | 'addBusiness'
  | 'addAuthorizedSignatory'
  | 'addBranch'
  | 'addFinancialInfo'
  | 'contactPerson'
  | 'certificates'
  | 'internalOrganization'
  | 'confirmInformation'
  | 'successMessage'
  | 'cvUpload'
  | 'cvsList'

const OnboardingPage = () => {
  const urlParams = useParams()
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStages>(
    (urlParams.stage as OnboardingStages) || 'welcomeMessage'
  )

  const [role, setRole] = useState<Role>(null)

  useEffect(() => {
    navigate(`?stage=${onboardingStep}`, { replace: true })
  }, [onboardingStep])

  return (
    <OnboardingContext.Provider
      value={{ onboardingStep, setOnboardingStep, role, setRole }}
    >
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
            <OnboardingSelectRole
              setOnboardingStep={setOnboardingStep}
              setRole={setRole}
            />
          )}
          {role === 'CLIENT' && (
            <ClientOnboarding
              onboardingStep={onboardingStep}
              setOnboardingStep={setOnboardingStep}
            />
          )}
          {role === 'TEMP_AGENCY_REP' && (
            <TempAgencyRepOnboarding
              onboardingStep={onboardingStep}
              setOnboardingStep={setOnboardingStep}
            />
          )}
        </main>
      </div>
    </OnboardingContext.Provider>
  )
}

type ClientOnboardingProps = {
  onboardingStep: OnboardingStages
  setOnboardingStep: (step: OnboardingStages) => void
}
const ClientOnboarding = ({
  onboardingStep,
  setOnboardingStep,
}: ClientOnboardingProps) => {
  return (
    <>
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
        <OnboardingInternalOrganization setOnboardingStep={setOnboardingStep} />
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
      {onboardingStep === 'hireWorker' && (
        <HireWorker setOnboardingStep={setOnboardingStep} />
      )}
    </>
  )
}

type TempAgencyRepOnboardingProps = {
  onboardingStep: OnboardingStages
  setOnboardingStep: (step: OnboardingStages) => void
}

const TempAgencyRepOnboarding = ({
  onboardingStep,
  setOnboardingStep,
}: TempAgencyRepOnboardingProps) => {
  return <></>
}

export default OnboardingPage
