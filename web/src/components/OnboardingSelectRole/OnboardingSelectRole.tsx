import { Dispatch, SetStateAction } from 'react'

import { Role } from 'types/graphql'
import workersMarch from 'web/public/images/workers-march.png'

import { Button } from 'src/components/ui/button'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type OnboardingSelectRoleProps = {
  setOnboardingStep: Dispatch<SetStateAction<OnboardingStages>>
  setRole: Dispatch<SetStateAction<Role>>
}

const OnboardingSelectRole = ({
  setOnboardingStep,
  setRole,
}: OnboardingSelectRoleProps) => {
  return (
    <>
      <header className="center mx-auto mt-8 flex max-w-md flex-col">
        <img
          src="images/team-leader-teamwork-concept_9176886_6671.svg"
          alt="A team leader holding a telescope with four coworkers"
          className="-mb-8 self-center pb-4"
        />
        <span className="text-right text-xs text-gray-500">
          <a href="http://www.freepik.com">
            Image designed by pch.vector / Freepik
          </a>
        </span>
        <h3 className="mt-8 text-xl font-semibold">Wat wil je doen?</h3>
      </header>
      <div className="mx-auto mt-8 flex max-w-md flex-col gap-2">
        <Button
          className="h-36 bg-accent hover:bg-accent hover:brightness-110"
          onClick={() => {
            setOnboardingStep('addBusiness')
            setRole('CLIENT')
          }}
        >
          Ik wil uitzendkrachten
        </Button>
        <Button
          className="h-36 bg-blue-600 hover:bg-blue-600 hover:brightness-110"
          onClick={() => {
            setOnboardingStep('addBusiness')
            setRole('TEMP_AGENCY_REP')
          }}
        >
          Ik wil mijn <br /> uitzendkrachten aanbieden
        </Button>
      </div>
    </>
  )
}

export default OnboardingSelectRole
