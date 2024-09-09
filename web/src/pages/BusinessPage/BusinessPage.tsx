import { Metadata } from '@redwoodjs/web'

import BusinessCard from 'src/components/BusinessCard/BusinessCard'

const BusinessPage = () => {
  return (
    <>
      <Metadata title="Business" description="Business page" />
      <div className="xs:container xs:max-w-3xl">
        <div className="relative -top-7 -mb-5">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Mijn Bedrijf
          </h1>
          <p className="font-thin">Beheer uw bedrijf</p>
        </div>
        <BusinessCard />
      </div>
    </>
  )
}

export default BusinessPage
