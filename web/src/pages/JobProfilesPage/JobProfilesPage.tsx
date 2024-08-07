import { useRef } from 'react'

import { CirclePlus } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AddJobProfileModal from 'src/components/AddJobProfileModal/AddJobProfileModal'
const JobProfilesPage = () => {
  const addJobProfileRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <Metadata title="JobProfiles" description="JobProfiles page" />

      <h1 className="font-bold text-white">Functieprofielen</h1>
      <div className="flex justify-center">
        <button
          onClick={() => addJobProfileRef.current.showModal()}
          className="font-bold"
        >
          <div className="flex">
            <CirclePlus />
            Aanmaken
          </div>
        </button>
        <dialog ref={addJobProfileRef} className="rounded-xl bg-black">
          <AddJobProfileModal dialogRef={addJobProfileRef} />
        </dialog>
      </div>
    </>
  )
}

export default JobProfilesPage
