// import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import { Filter, workers } from 'src/components/CvsList/CvsList'
import SearchInput from 'src/components/SearchInput'
import WorkerInfoCard from 'src/components/WorkerInfoCard/WorkerInfoCard'

const CandidatesPage = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Metadata title="Candidates" description="Candidates page" />

      <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
        <h1 className="text-2xl font-bold text-white">Kandidaten</h1>
        <div className="flex justify-between">
          <Filter />
          <SearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="mb-8 space-y-8">
          {workers.map((worker) => (
            <WorkerInfoCard key={worker.id} worker={worker} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CandidatesPage
