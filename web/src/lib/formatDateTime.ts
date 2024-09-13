export function formatDateTime(
  string: string,
  {
    locale = 'nl-NL',
    options,
  }: {
    locale?: Intl.LocalesArgument
    options?: Intl.DateTimeFormatOptions
  } = {}
) {
  return new Intl.DateTimeFormat(locale, {
    ...options,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(string))
}
