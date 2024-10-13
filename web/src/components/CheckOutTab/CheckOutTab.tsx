import { useState } from 'react'

import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { FindWorkRequestQuery } from 'types/graphql'

import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TimePicker from 'src/components/TimePicker'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'

type CheckOutTab = {
  shift: FindWorkRequestQuery['workRequest']['shifts'][0]
}

const CheckOutTab = ({ shift }: CheckOutTab) => {
  const [checkOutAt, setCheckOutAt] = useState(
    shift.checkedOutAt ? new Date(shift.checkedOutAt) : new Date()
  )

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
          <Button className="bg-gray-900 text-accent" onChange={handleClickNow}>
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
      <Button className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto">
        Bevestigen
      </Button>
    </div>
  )
}

export default CheckOutTab
