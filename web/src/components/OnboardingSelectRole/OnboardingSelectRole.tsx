import workersMarch from 'web/public/images/workers-march.png'

import { Button } from 'src/components/ui/button'

const OnboardingSelectRole = () => {
  return (
    <>
      <header className="center mx-auto mt-8 flex max-w-md flex-col">
        <img
          src={workersMarch}
          alt="Workers marching forward"
          className="max-h-60 p-4"
        />
        <h3 className="font-semibold">Wat wil je doen?</h3>
      </header>
      <div className="mx-auto mt-8 flex max-w-md flex-col gap-2">
        <Button className="h-36 bg-accent hover:bg-accent hover:brightness-110">
          Ik wil uitzendkrachten
        </Button>
        <Button className="h-36 bg-blue-600 hover:bg-blue-600 hover:brightness-110">
          Ik wil mijn <br /> uitzendkrachten aanbieden
        </Button>
      </div>
    </>
  )
}

export default OnboardingSelectRole
