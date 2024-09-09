import { Metadata } from '@redwoodjs/web'

const BusinessPage = () => {
  return (
    <>
      <Metadata title="WorkPlaces" description="WorkPlaces page" />
      <div className="xs:container xs:max-w-3xl">
        <div className="relative -top-7 -mb-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Mijn Bedrijf
          </h1>
          <p className="font-thin">Beheer uw bedrijf</p>
        </div>
      </div>
    </>
  )
}

export default BusinessPage
