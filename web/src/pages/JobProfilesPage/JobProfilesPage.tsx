import { useRef } from 'react'

import { CirclePlus, SortDesc } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AddJobProfileModal from 'src/components/AddJobProfileModal/AddJobProfileModal'
import { Button } from 'src/components/ui/button'
const JobProfilesPage = () => {
  const addJobProfileRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <Metadata title="JobProfiles" description="JobProfiles page" />
      <h1 className="ml-8 text-xl font-bold text-white/90">Functieprofielen</h1>
      <div className="flex justify-center">
        <Button
          variant="default"
          onClick={() => addJobProfileRef.current.showModal()}
          className="mt-8 flex gap-1 py-6 text-lg font-bold"
        >
          <CirclePlus size={30} className="text-accent hover:text-accent/30" />
          Aanmaken
        </Button>
        <dialog ref={addJobProfileRef} className="rounded-xl bg-black">
          <AddJobProfileModal dialogRef={addJobProfileRef} />
        </dialog>
      </div>
    </>
  )
}

export default JobProfilesPage
