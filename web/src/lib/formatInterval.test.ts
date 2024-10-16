import { formatInterval } from 'src/lib/formatInterval'

describe('formatInterval', () => {
  it('returns a formatted string when dates are not the same day', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-01-02')
    const result = formatInterval(date1, date2)
    expect(result).toBe('1–2 januari 2022')
  })

  it('returns a formatted string when dates are not the same month', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-03-02')
    const result = formatInterval(date1, date2)
    expect(result).toBe('1 januari–2 maart 2022')
  })

  it('returns a formatted string when dates are the same day', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-01-01')
    const result = formatInterval(date1, date2)
    expect(result).toBe('1 januari 2022')
  })

  it('returns a formatted string when dates are the same month but not the same day', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-01-15')
    const result = formatInterval(date1, date2)
    expect(result).toBe('1–15 januari 2022')
  })

  it('returns a formatted string when dates are the same day and month', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-01-01')
    const result = formatInterval(date1, date2)
    expect(result).toBe('1 januari 2022')
  })
})
