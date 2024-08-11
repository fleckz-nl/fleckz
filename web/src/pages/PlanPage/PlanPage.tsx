import { Metadata } from '@redwoodjs/web'

import PlanWorkComponent from 'src/components/PlanWorkComponent/PlanWorkComponent'

const PlanPage = () => {
  return (
    <>
      <Metadata title="Plan" description="Plan page" />
      <div>
        <h1 className="text-xl font-bold text-white/90 lg:mb-12 lg:ml-36 lg:mt-6">
          Wanneer wil je dat er iemand komt?
        </h1>
        <p>Klik in de agenda en plan het werk in</p>
      </div>
      <PlanWorkComponent />
    </>
  )
}

export default PlanPage
