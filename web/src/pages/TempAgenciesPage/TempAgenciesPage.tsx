import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import AddTempAgencyDialog from 'src/components/AddTempAgencyDialog/AddTempAgencyDialog'
import TempAgenciesCell from 'src/components/TempAgenciesCell'

const TempAgenciesPage = () => {
  const [addAgencyDialogOpen, setAddAgencyDialogOpen] = useState(false)
  return (
    <>
      <Metadata title="TempAgencies" description="TempAgencies page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <h1 className="text-xl font-bold text-white/90">Uitzendbureaus</h1>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 pt-4">
          <TempAgenciesCell />
          <AddTempAgencyDialog
            open={addAgencyDialogOpen}
            setOpen={setAddAgencyDialogOpen}
          />
        </div>
      </div>
    </>
  )
}

export default TempAgenciesPage
