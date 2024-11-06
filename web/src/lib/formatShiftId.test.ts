import { formatShiftId } from './formatShiftId'

describe('formatShiftId', () => {
  it('returns the last 6 characters of the shiftId', () => {
    expect(formatShiftId('cm36aim3l00012e66hx8hlfyv')).toBe('8hlfyv')
  })

  it('throws an error if shiftId is not a string', () => {
    expect(() => formatShiftId(123456)).toThrow()
  })
})
