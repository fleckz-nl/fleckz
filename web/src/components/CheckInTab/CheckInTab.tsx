import { Dispatch, SetStateAction } from 'react'

import ButtonWithLoader from 'src/components/ButtonWithLoader'
import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TimePicker from 'src/components/TimePicker'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'

type CheckInTabProps = {
  checkInAt: Date
  setCheckInAt: Dispatch<SetStateAction<Date>>
  loading: boolean
  handleCheckIn: () => void
}

const CheckInTab = ({
  checkInAt,
  setCheckInAt,
  loading,
  handleCheckIn,
}: CheckInTabProps) => {
  function handleClickNow() {
    setCheckInAt(new Date())
  }
  return (
    <>
      <div className="my-4 flex h-[250px] flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="flex flex-wrap items-center justify-between">
            <div className="flex gap-4">
              <TempAgencyWorker />
              <Badge variant="outline" className=" h-4 bg-lime-500 text-black">
                In
              </Badge>
            </div>
            <Button
              className="bg-gray-900 text-accent"
              onClick={handleClickNow}
            >
              Nu
            </Button>
          </h3>
          <TimePicker date={checkInAt} onDateChange={setCheckInAt} />
        </div>
        <ButtonWithLoader
          loading={loading}
          onClick={handleCheckIn}
          className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto"
        >
          Inchecken
        </ButtonWithLoader>
      </div>
    </>
  )
}

export default CheckInTab
