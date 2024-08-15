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

type Event = {
  title?: string
  start?: Date
  end?: Date
}

type BigCalendarProps = {
  defaultEvents?: WorkSchedularQuery['workRequests']
}

const BigCalendar = ({ defaultEvents }: BigCalendarProps) => {
  const events = useMemo<Event[]>(() => {
    if (defaultEvents == null) return []
    return defaultEvents.map((e) => ({
      title: e.projectName,
      start: new Date(e.startDate),
      end: new Date(e.endDate),
    }))
  }, [defaultEvents])

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedEvent, setSelectedEvent] =
    useState<Partial<CreateWorkRequestInput>>()

  function handleSelect(props: SlotInfo) {
    setSelectedEvent({
      startDate: props.start.toISOString(),
      endDate: props.end.toISOString(),
    })
    setOpenDialog(true)
  }

  return (
    <div className="mx-auto h-[600px] max-w-4xl">
      <PlanWorkComponent
        open={openDialog}
        setOpen={setOpenDialog}
        defaultValues={selectedEvent}
      />
      <Calendar
        className="m-2 bg-white p-2"
        defaultView="week"
        localizer={localizer}
        startAccessor={'start'}
        endAccessor={'end'}
        onSelectSlot={handleSelect}
        events={events}
        scrollToTime={addHours(startOfToday(), 8)}
        selectable
      />
    </div>
  )
}

export default BigCalendar
