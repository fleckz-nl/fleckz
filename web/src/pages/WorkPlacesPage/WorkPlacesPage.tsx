import { Metadata } from '@redwoodjs/web'

import WorkPlacesCard from 'src/components/WorkPlacesCard/WorkPlacesCard'

const WorkPlacesPage = () => {
  return (
    <>
      <Metadata title="WorkPlaces" description="WorkPlaces page" />
      <div className="xs:container xs:max-w-3xl">
        <div className="relative -top-7 -mb-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Uw Werkplekken
          </h1>
          <p className="font-thin">Beheer uw werkplekken</p>
        </div>
        <WorkPlacesCard />
      </div>
    </>
  )
}

export default WorkPlacesPage
