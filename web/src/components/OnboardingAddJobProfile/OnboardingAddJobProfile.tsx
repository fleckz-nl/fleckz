import { Button } from 'src/components/ui/button'

const OnboardingAddJobProfile = () => {
  function handleNextClick() {}
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-center text-white">
      <h1 className="my-4 text-4xl">Gelukt!</h1>
      <div className="max-w-sm space-y-4 self-center text-left text-xl">
        <p>Dankjewel voor het aanmelden bij Fleckz!</p>
        <p>
          Wij nemen binnen 1 uur contact met u op om persoonlijk kennis te
          maken.
        </p>
      </div>
      <Button
        className="self-end bg-secondary py-4 text-lg"
        type="submit"
        onClick={handleNextClick}
      >
        Volgende
      </Button>
    </div>
  )
}

export default OnboardingAddJobProfile
