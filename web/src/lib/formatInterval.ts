import { format, isSameDay, isSameMonth } from 'date-fns'
import { nl } from 'date-fns/locale/nl'

export function formatInterval(date1: Date, date2: Date) {
  const isMultiDay = !isSameDay(date1, date2)
  if (isMultiDay) {
    const isMultiMonth = !isSameMonth(date1, date2)
    if (isMultiMonth)
      return `${formatToNL(date1, 'd MMMM')}–${formatToNL(date2, 'd MMMM')} ${formatToNL(date2, 'yyyy')}`

    return `${formatToNL(date1, 'd')}–${formatToNL(date2, 'd MMMM')} ${formatToNL(date2, 'yyyy')}`
  }

  return formatToNL(date2, 'd MMMM yyyy')
}

function formatToNL(date: Date, pattern: string) {
  return format(date, pattern, { locale: nl })
}
