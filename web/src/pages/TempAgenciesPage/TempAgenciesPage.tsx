import { Metadata } from '@redwoodjs/web'

import TempAgencyCard from 'src/components/TempAgencyCard/TempAgencyCard'

const TempAgenciesPage = () => {
  return (
    <>
      <Metadata title="TempAgencies" description="TempAgencies page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <h1 className="text-xl font-bold text-white/90">Uitzendbureau</h1>
        <div className="w-full pt-4 ">
          <TempAgencyCard />
        </div>
      </div>
    </>
  )
}

export default TempAgenciesPage
