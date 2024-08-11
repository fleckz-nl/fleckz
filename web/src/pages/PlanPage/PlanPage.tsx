import { Metadata } from '@redwoodjs/web'

import PlanWorkComponent from 'src/components/PlanWorkComponent/PlanWorkComponent'

const PlanPage = () => {
  return (
    <>
      <Metadata title="Plan" description="Plan page" />
      <div className="mx-auto flex max-w-4xl flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-white/90">
            Wanneer wil je dat er iemand komt?
          </h1>
          <p>Klik in de agenda en plan het werk in</p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <PlanWorkComponent />
        </div>
      </div>
    </>
  )
}

export default PlanPage
