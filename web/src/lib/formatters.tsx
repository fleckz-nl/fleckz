import React from 'react'

import { formatRelative } from 'date-fns'
import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import humanize from 'humanize-string'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values: string | string[] | null | undefined) => {
  let output = ''

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value))
    output = humanizedValues.join(', ')
  } else if (typeof values === 'string') {
    output = humanize(values)
  }

  return output
}

export const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (
  value: string | number,
  to: number = MAX_STRING_LENGTH
) => {
  let output = value?.toString() ?? ''

  if (output.length > to) {
    output = output.substring(0, to) + '...'
  }

  return output
}

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime?: string) => {
  let output: string | JSX.Element = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {format(dateTime, 'yyyy-MM-dd')}
      </time>
    )
  }

  return output
}

export const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

export function formatDaysFromNow(date: Date) {
  const formatRelativeLocale = {
    lastWeek: "'vorige' eeee",
    yesterday: "'gisteren'",
    today: "'vandaag'",
    tomorrow: "'morgen'",
    nextWeek: "'volgende' eeee",
    other: 'eeee',
  }

  const relativeNLlocale = {
    ...nl,
    formatRelative: (token) => formatRelativeLocale[token],
  }
  return formatRelative(date, new Date(), { locale: relativeNLlocale })
}
