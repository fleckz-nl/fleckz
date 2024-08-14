import { useState } from 'react'

import './react-big-calendar.css'
import { addHours, startOfToday } from 'date-fns'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import nl from 'date-fns/locale/nl'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { Calendar, SlotInfo, dateFnsLocalizer } from 'react-big-calendar'
import { WorkSchedularQuery } from 'types/graphql'

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
  const [events, setEvents] = useState<Event[]>(() => {
    if (defaultEvents == null) return []
    return defaultEvents.map((e) => ({
      title: e.projectName,
      start: new Date(e.startDate),
      end: new Date(e.endDate),
    }))
  })
  function handleSelect(props: SlotInfo) {
    // TODO: Handle adding events
    // setEvents((currentEvents) => [
    //   ...currentEvents,
    //   { title: '', start: props.start, end: props.end },
    // ])
  }
  return (
    <div className="mx-auto h-[600px] max-w-4xl">
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
