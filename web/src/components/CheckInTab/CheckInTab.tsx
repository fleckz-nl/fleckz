import { useState } from 'react'

import { FindWorkRequestQuery } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ButtonWithLoader from 'src/components/ButtonWithLoader'
import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TimePicker from 'src/components/TimePicker'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'
import { QUERY } from 'src/components/WorkRequestCell'

const CHECK_IN_GQL = gql`
  mutation CheckIn($id: String!, $input: UpdateShiftInput!) {
    updateShift(id: $id, input: $input) {
      id
    }
  }
`

type CheckInTabProps = {
  shift: FindWorkRequestQuery['workRequest']['shifts'][0]
}

const CheckInTab = ({ shift }: CheckInTabProps) => {
  const [checkedInAt, setCheckedInAt] = useState(
    shift.checkedInAt ? new Date(shift.checkedInAt) : new Date()
  )
  const [checkIn, { loading }] = useMutation(CHECK_IN_GQL, {
    onCompleted: () => toast.success('Ingecheckt met succes'),
    onError: (e) => toast.error(e.message),
    refetchQueries: [QUERY],
  })

  function handleClickNow() {
    setCheckedInAt(new Date())
  }

  async function handleConfirm() {
    await checkIn({
      variables: {
        id: shift.id,
        input: {
          checkedInAt,
        },
      },
    })
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
          <TimePicker date={checkedInAt} onDateChange={setCheckedInAt} />
        </div>
        <ButtonWithLoader
          loading={loading}
          onClick={handleConfirm}
          className="bg-accent/80 text-black hover:bg-accent hover:text-black sm:mx-auto"
        >
          Inchecken
        </ButtonWithLoader>
      </div>
    </>
  )
}

export default CheckInTab
