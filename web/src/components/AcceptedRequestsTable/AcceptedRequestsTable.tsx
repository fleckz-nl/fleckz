import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import { Users } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { navigate } from '@redwoodjs/router'

import { OverviewHeader } from 'src/components/OverviewSection'
import SearchInput from 'src/components/SearchInput/SearchInput'
import SortButton from 'src/components/SortButton/SortButton'

type AcceptedRequestsTableProps = {
  workRequests: WorkRequestsQuery['workRequests']
}
const AcceptedRequestsTable = ({
  workRequests,
}: AcceptedRequestsTableProps) => {
  const acceptedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')
  return (
    <div className="flex flex-col gap-4 text-white">
      <OverviewHeader>Werklijst</OverviewHeader>
      <div className="flex justify-between gap-2">
        <SortButton />
        <SearchInput />
      </div>
    </div>
  )
}

export default AcceptedRequestsTable
