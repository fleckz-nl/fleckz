import { useContext } from 'react'

import Confetti from 'src/components/Confetti/Confetti'
import { Button } from 'src/components/ui/button'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const OnboardingSuccess = () => {
  const { setOnboardingStep, role } = useContext(OnboardingContext)

  function handleNextClick() {
    if (role === 'TEMP_AGENCY_REP') return setOnboardingStep('cvUpload')
    setOnboardingStep('addJobProfile')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-center text-white">
      <Confetti />
      <img
        src="images/gold-cup.png"
        alt="Gold cup"
        width={'100px'}
        className="mr-6 self-center"
      />
      <h1 className="my-4 text-4xl">Gelukt!</h1>
      <div className="max-w-sm space-y-4 self-center text-left text-xl">
        <p>Dankjewel voor het aanmelden bij Fleckz!</p>
        <p>
          Wij nemen binnen 1 uur contact met u op om persoonlijk kennis te
          maken.
        </p>
        {role === 'TEMP_AGENCY_REP' && (
          <p>
            Je kunt wel alvast CV&apos;s uploaden, zodat je straks direct aan de
            slag kunt.
          </p>
        )}
      </div>
      <Button
        className="self-end bg-secondary py-4 text-lg"
        type="submit"
        onClick={handleNextClick}
      >
        {role === 'TEMP_AGENCY_REP' ? "CV's uploaden" : 'Volgende'}
      </Button>
    </div>
  )
}

export default OnboardingSuccess
