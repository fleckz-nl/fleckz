import { Metadata } from '@redwoodjs/web'

import TempAgenciesCell from 'src/components/TempAgenciesCell'

const TempAgenciesPage = () => {
  return (
    <>
      <Metadata title="TempAgencies" description="TempAgencies page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <h1 className="text-xl font-bold text-white/90">Uitzendbureau</h1>
        <div className="mx-auto w-full max-w-4xl gap-4 pt-4 ">
          <TempAgenciesCell />
        </div>
      </div>
    </>
  )
}

export default TempAgenciesPage
