import { WorkRequestsTodayQuery } from 'types/graphql'

import { Badge } from 'src/components/ui/badge'

type ShiftStatusBadgeProps = {
  shift: WorkRequestsTodayQuery['workRequestsToday'][0]['shifts'][0]
}

const ShiftStatusBadge = ({ shift }: ShiftStatusBadgeProps) => {
  return (
    <>
      {shift.status === 'CHECKED_IN' && (
        <Badge variant="outline" className=" h-4 bg-lime-500 text-black">
          In
        </Badge>
      )}
      {shift.status === 'CHECKED_OUT' && (
        <Badge variant="outline" className=" h-4 bg-red-500 text-black">
          Uit
        </Badge>
      )}
    </>
  )
}

export default ShiftStatusBadge
