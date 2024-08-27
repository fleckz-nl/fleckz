import { SortDesc } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AddJobProfileModal from 'src/components/AddJobProfileModal/AddJobProfileModal'
import JobProfileCell from 'src/components/JobProfilesCell'

const JobProfilesPage = () => {
  return (
    <>
      <Metadata title="JobProfiles" description="JobProfiles page" />
      <div className="mx-auto flex max-w-4xl flex-col justify-between">
        <h1 className="flex items-center gap-1 text-xl font-bold text-white/90">
          Functieprofielen
          <SortDesc className="sort-icon text-primary-foreground/80 hover:text-muted-foreground" />
        </h1>
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 pt-4 md:grid-cols-3">
          <JobProfileCell />
          <div className="col-span-full flex items-center justify-center">
            <AddJobProfileModal />
          </div>
        </div>
      </div>
    </>
  )
}

export default JobProfilesPage
