import { format, isSameDay, isSameMonth } from 'date-fns'

export function formatInterval(date1: Date, date2: Date) {
  const isMultiDay = !isSameDay(date1, date2)
  if (isMultiDay) {
    const isMultiMonth = !isSameMonth(date1, date2)
    if (isMultiMonth)
      return `${format(date1, 'd MMMM')}–${format(date2, 'd MMMM')} ${format(date2, 'yyyy')}`

    return `${format(date1, 'd')}–${format(date2, 'd MMMM')} ${format(date2, 'yyyy')}`
  }

  return format(date2, 'd MMMM yyyy')
}
