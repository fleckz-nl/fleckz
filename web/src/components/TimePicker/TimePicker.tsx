import { ChangeEvent, useEffect, useState } from 'react'

import { format } from 'date-fns/format'

import { cn } from 'src/lib/utils'

type TimePickerProps = {
  date: Date
  onDateChange: (newValue: Date) => void
  className?: string
}

const TimePicker = ({ date, className, onDateChange }: TimePickerProps) => {
  const [datePart, setDatePart] = useState(format(date, 'yyyy-MM-dd'))
  const [timePart, setTimePart] = useState(format(date, 'HH:mm'))

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    setDatePart(e.target.value)
    const newDate = new Date(`${e.target.value}T${timePart}`)
    setDatePart(e.target.value)
    onDateChange(newDate)
  }

  function handleTimeChange(e: ChangeEvent<HTMLInputElement>) {
    setTimePart(e.target.value)
    const newDate = new Date(`${datePart}T${e.target.value}`)
    onDateChange(newDate)
  }

  useEffect(() => {
    setDatePart(format(date, 'yyyy-MM-dd'))
    setTimePart(format(date, 'HH:mm'))
  }, [date])

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
