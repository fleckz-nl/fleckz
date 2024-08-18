import './react-big-calendar.css'

import { useMemo, useState } from 'react'

import { addHours, startOfToday } from 'date-fns'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import nl from 'date-fns/locale/nl'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { Calendar, SlotInfo, dateFnsLocalizer } from 'react-big-calendar'
import { CreateWorkRequestInput, WorkSchedularQuery } from 'types/graphql'

import PlanWorkComponent from '../PlanWorkComponent/PlanWorkComponent'

const locales = {
  'nl-NL': nl,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

type BigCalendarProps = {
  defaultEvents?: WorkSchedularQuery['workRequests']
}

const BigCalendar = ({ defaultEvents }: BigCalendarProps) => {
  const events = useMemo(() => {
    if (defaultEvents == null) return []
    return defaultEvents.map((e) => ({
      title: e.projectName,
      start: new Date(e.startDate),
      end: new Date(e.endDate),
      workRequestData: e,
    }))
  }, [defaultEvents])

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedEvent, setSelectedEvent] =
    useState<Partial<CreateWorkRequestInput & { id: string }>>()

  function handleSelectSlot(props: SlotInfo) {
    setSelectedEvent({
      startDate: props.start.toISOString(),
      endDate: props.end.toISOString(),
    })
    setOpenDialog(true)
  }

  function handleSelectEvent(props: (typeof events)[0]) {
    setSelectedEvent({
      id: props.workRequestData.id,
      startDate: props.start.toISOString(),
      endDate: props.end.toISOString(),
      projectName: props.workRequestData.projectName,
      jobProfileId: props.workRequestData.jobProfileId,
      addressId: props.workRequestData.addressId,
      numWorkers: props.workRequestData.numWorkers,
    })
    setOpenDialog(true)
  }

  return (
    <div className="mx-auto h-[600px] max-w-4xl">
      <div className="mt-4 flex items-center justify-center">
        <PlanWorkComponent
          open={openDialog}
          setOpen={setOpenDialog}
          defaultValues={selectedEvent}
        />
      </div>
      <Calendar
        className="m-2 rounded-lg bg-emerald-50 p-3"
        defaultView="week"
        localizer={localizer}
        startAccessor={'start'}
        endAccessor={'end'}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        events={events}
        scrollToTime={addHours(startOfToday(), 8)}
        selectable
        views={['week']}
      />
    </div>
  )
}

export default BigCalendar
