import { SortDesc } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AddJobProfileModal from 'src/components/AddJobProfileModal/AddJobProfileModal'
import JobProfileCell from 'src/components/JobProfilesCell'

const JobProfilesPage = () => {
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
          <AddJobProfileModal />
        </div>
      </div>
    </>
  )
}

export default JobProfilesPage
