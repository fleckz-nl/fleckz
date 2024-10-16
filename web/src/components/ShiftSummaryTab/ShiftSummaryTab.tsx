import { useMemo } from 'react'

import { interval, intervalToDuration } from 'date-fns'
import { format } from 'date-fns/format'

import ButtonWithLoader from 'src/components/ButtonWithLoader'
import TempAgencyWorker from 'src/components/TempAgencyWorker'
import { formatInterval } from 'src/lib/formatInterval'
type ShiftSummaryProps = {
  checkInAt: Date
  checkOutAt: Date
  loading: boolean
  handleSummaryConfirm: () => void
}
const ShiftSummaryTab = ({
  checkInAt,
  checkOutAt,
  loading,
  handleSummaryConfirm,
}: ShiftSummaryProps) => {
  const duration = useMemo(() => {
    return intervalToDuration(interval(checkInAt, checkOutAt || new Date()))
  }, [checkInAt, checkOutAt])

  const dateString = useMemo(
    () => formatInterval(checkInAt, checkOutAt),
    [checkInAt, checkOutAt]
  )
  console.log(duration.minutes)
  return (
    <div className="my-4 flex h-[250px] flex-col justify-between">
      <div>
        <h3 className="flex flex-wrap items-center justify-between">
          <TempAgencyWorker />
        </h3>
        <div className="my-4 flex flex-col items-center">
          <span className="mx-auto text-xl text-muted/50">{dateString}</span>
          <div className="container my-4 grid grid-cols-3 place-items-center gap-20 text-white/80 xs:gap-0">
            <div className="center flex-col">
              <span className="font-extralight text-white/50">Inchecken</span>
              <span className="text-3xl">{format(checkOutAt, 'HH:mm')}</span>
            </div>
            <div className="center flex-col">
              <span className="text-4xl font-semibold">
                {duration.days ? (
                  <>
                    {duration.hours + duration.days * 24}:
                    {duration.minutes || '00'}
                  </>
                ) : (
                  <>
                    {duration.hours || '00'}:{duration.minutes || '00'}
                  </>
                )}
              </span>
              <span className="font-extralight text-white/50">uren</span>
            </div>
            <div className="center flex-col">
              <span className="font-extralight text-white/50">Uitchecken</span>
              <span className="text-3xl">{format(checkOutAt, 'HH:mm')}</span>
            </div>
          </div>
        </div>
      </div>
      <ButtonWithLoader
        loading={loading}
        onClick={handleSummaryConfirm}
        className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto"
      >
        Bevestigen
      </ButtonWithLoader>
    </div>
  )
}

export default ShiftSummaryTab
