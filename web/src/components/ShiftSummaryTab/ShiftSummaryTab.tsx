import { useMemo } from 'react'

import { interval, intervalToDuration } from 'date-fns'
import { format } from 'date-fns/format'
import { FindWorkRequestQuery } from 'types/graphql'

import TempAgencyWorker from 'src/components/TempAgencyWorker'
import { Button } from 'src/components/ui/button'
type ShiftSummaryProps = {
  shift: FindWorkRequestQuery['workRequest']['shifts'][0]
}
const ShiftSummaryTab = ({ shift }: ShiftSummaryProps) => {
  const duration = useMemo(() => {
    return intervalToDuration(
      interval(shift.checkedInAt, shift.checkedOutAt || new Date())
    )
  }, [shift])
  return (
    <div className="my-4 flex h-[250px] flex-col justify-between">
      <div>
        <h3 className="flex flex-wrap items-center justify-between">
          <TempAgencyWorker />
        </h3>
        <div className="my-4 flex flex-col items-center">
          <span className="mx-auto text-xl text-muted/50">
            {format(shift.checkedInAt, 'dd MMMM yyyy')}
          </span>
          <div className="container my-4 grid grid-cols-3 place-items-center gap-20 text-white/80 xs:gap-0">
            <div className="center flex-col">
              <span className="font-extralight text-white/50">Inchecken</span>
              <span className="text-3xl">
                {format(shift.checkedInAt, 'HH:mm')}
              </span>
            </div>
            <div className="center flex-col">
              <span className="text-4xl font-semibold">
                {duration.hours}:{duration.minutes}
              </span>
              <span className="font-extralight text-white/50">uren</span>
            </div>
            <div className="center flex-col">
              <span className="font-extralight text-white/50">Uitchecken</span>
              <span className="text-3xl">
                {shift.checkedOutAt
                  ? format(shift.checkedOutAt, 'HH:mmt')
                  : '--'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto">
        Bevestigen
      </Button>
    </div>
  )
}

export default ShiftSummaryTab
