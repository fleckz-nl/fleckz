import { createContext } from 'react'

import { Role } from 'types/graphql'

import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

interface OnboardingContextProps {
  onboardingStep: OnboardingStages
  setOnboardingStep: (stage: OnboardingStages) => void
  role: Role
  setRole: (role: Role) => void
}

export const OnboardingContext = createContext<
  OnboardingContextProps | undefined
>(undefined)
