import { Dispatch, SetStateAction } from 'react'

import { ThumbsDown, ThumbsUp } from 'lucide-react'

import ButtonWithLoader from 'src/components/ButtonWithLoader/ButtonWithLoader'
import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TimePicker from 'src/components/TimePicker'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'

type CheckOutTab = {
  checkOutAt: Date
  setCheckOutAt: Dispatch<SetStateAction<Date>>
  loading: boolean
  handleCheckOut: () => void
}

const CheckOutTab = ({
  checkOutAt,
  setCheckOutAt,
  loading,
  handleCheckOut,
}: CheckOutTab) => {
  function handleClickNow() {
    setCheckOutAt(new Date())
  }
  return (
    <div className="my-4 flex h-[250px] flex-col justify-between">
      <div className="flex flex-col">
        <h3 className="flex flex-wrap items-center justify-between">
          <div className="flex gap-4">
            <TempAgencyWorker />
            <Badge variant="outline" className=" h-4 bg-red-500 text-black">
              Uit
            </Badge>
          </div>
          <Button className="bg-gray-900 text-accent" onClick={handleClickNow}>
            Nu
          </Button>
        </h3>
        <TimePicker date={checkOutAt} onDateChange={setCheckOutAt} />
        <div className="flex gap-2 self-end">
          <Button className="bg-gray-900 p-2 text-accent">
            <ThumbsUp className="size-5" />
          </Button>
          <Button className="bg-gray-900 p-2 text-accent">
            <ThumbsDown className="size-5" />
          </Button>
        </div>
      </div>
      <ButtonWithLoader
        onClick={handleCheckOut}
        loading={loading}
        className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto"
      >
        Uitchecken
      </ButtonWithLoader>
    </div>
  )
}

export default CheckOutTab
