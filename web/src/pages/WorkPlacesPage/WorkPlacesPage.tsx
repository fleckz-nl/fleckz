import { Metadata } from '@redwoodjs/web'

const WorkPlacesPage = () => {
  return (
    <>
      <Metadata title="WorkPlaces" description="WorkPlaces page" />
      <div className="xs:container xs:max-w-3xl">
        <div className="relative -top-7 -mb-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Uw Werkplekken
          </h1>
          <p>Beheer uw werkplekken</p>
        </div>
      </div>
    </>
  )
}

export default WorkPlacesPage
