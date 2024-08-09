import { useRef } from 'react'

import { CirclePlus, SortDesc } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AddJobProfileModal from 'src/components/AddJobProfileModal/AddJobProfileModal'
import JobProfileCell from 'src/components/JobProfilesCell'
import { Button } from 'src/components/ui/button'
const JobProfilesPage = () => {
  const addJobProfileRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <Metadata title="JobProfiles" description="JobProfiles page" />
      <h1 className="ml-6 flex items-center gap-1 text-xl font-bold text-white/90 lg:mb-12 lg:ml-36 lg:mt-6">
        Functieprofielen
        <SortDesc className="sort-icon text-primary-foreground/80 hover:text-muted-foreground" />
      </h1>
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
        <JobProfileCell />
        <Button
          variant="default"
          onClick={() => addJobProfileRef.current.showModal()}
          className="mt-8 flex gap-1 py-6 text-lg font-bold transition-colors"
        >
          <CirclePlus size={30} className="text-accent" />
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
