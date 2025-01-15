import { WorkRequestsQuery } from 'types/graphql'

import { OverviewHeader } from 'src/components/OverviewSection'
import SearchInput from 'src/components/SearchInput/SearchInput'
import SortButton from 'src/components/SortButton/SortButton'
import WorkRequestsListItem from 'src/components/WorkRequestsListItem/WorkRequestsListItem'

type WorkRequestsListProps = {
  workRequests: WorkRequestsQuery['workRequests']
}
const WorkRequestsList = ({ workRequests }: WorkRequestsListProps) => {
  const acceptedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')
  const pendingRequests = workRequests.filter((r) => r.status === 'SUBMITTED')
  const completedRequests = workRequests.filter((r) => r.status === 'DONE')
  return (
    <div className="flex flex-col gap-4 text-white">
      <OverviewHeader>Werklijst</OverviewHeader>
      <div className="flex justify-between gap-2">
        <SortButton />
        <SearchInput />
      </div>
      <div>
        <h3 className="font-medium">Nog niet volledig bevestigd</h3>
        {pendingRequests.map((request) => (
          <WorkRequestsListItem key={request.id} request={request} />
        ))}
      </div>
      <div>
        <h3 className="font-medium">In te checken</h3>
        {acceptedRequests.map((request) => (
          <WorkRequestsListItem key={request.id} request={request} />
        ))}
      </div>
      <div>
        <h3 className="font-medium">Afgerond</h3>
        {completedRequests.map((request) => (
          <WorkRequestsListItem key={request.id} request={request} />
        ))}
      </div>
    </div>
  )
}

export default WorkRequestsList
