import { ChangeEvent, useMemo } from 'react'

import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'

import { cn } from 'src/lib/utils'

type TimePickerProps = {
  date: Date
  onDateChange: (newValue: Date) => void
  className?: string
}

const TimePicker = ({ date, className, onDateChange }: TimePickerProps) => {
  const datePart = useMemo(() => format(date, 'yyyy-MM-dd'), [date])
  const timePart = useMemo(() => format(date, 'HH:mm'), [date])

  const DATE_FORMAT = 'yyyy-MM-dd HH:mm'

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    onDateChange(parse(`${e.target.value} ${timePart}`, DATE_FORMAT, date))
  }

  function handleTimeChange(e: ChangeEvent<HTMLInputElement>) {
    onDateChange(parse(`${datePart} ${e.target.value}`, DATE_FORMAT, date))
  }

  return (
    <div
      className={cn(
        'mx-auto flex items-center justify-center gap-5 py-10',
        className
      )}
    >
      <input
        type="date"
        className="mx-auto bg-transparent text-xl text-muted/50"
        value={datePart}
        onChange={handleDateChange}
      />
      <input
        type="time"
        value={timePart}
        onChange={handleTimeChange}
        className="rounded-sm bg-white px-2 text-center text-3xl text-primary"
      />
    </div>
  )
}

export default TimePicker
