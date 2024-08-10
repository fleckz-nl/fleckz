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
      <h1 className="md:ml-4auto sticky mb-6 flex items-center gap-1 text-xl font-bold text-white/90 sm:ml-auto lg:ml-40">
        Functieprofielen
        <SortDesc className="sort-icon text-primary-foreground/80 hover:text-muted-foreground" />
      </h1>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        <JobProfileCell />
        <div className="col-span-full flex items-center justify-center">
          <Button
            variant="default"
            onClick={() => addJobProfileRef.current.showModal()}
            className="col-span-3 mt-4 flex gap-1 px-16 py-8 text-lg font-bold transition-colors"
          >
            <CirclePlus size={30} className="text-accent" />
            Aanmaken
          </Button>
        </div>
        <dialog ref={addJobProfileRef} className="rounded-xl bg-black">
          <AddJobProfileModal dialogRef={addJobProfileRef} />
        </dialog>
      </div>
    </>
  )
}

export default JobProfilesPage
