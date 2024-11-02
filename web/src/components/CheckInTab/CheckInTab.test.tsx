import { render, fireEvent } from '@redwoodjs/testing/web'

import CheckInTab from './CheckInTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckInTab', () => {
  it('renders successfully', () => {
    const { getByText } = render(
      <CheckInTab
        checkInAt={new Date()}
        setCheckInAt={() => {}}
        loading={false}
        handleCheckIn={() => {}}
      />
    )

    expect(getByText('In')).toBeInTheDocument()
    expect(getByText('Nu')).toBeInTheDocument()
  })

  it('calls handleClickNow when button is clicked', () => {
    const setCheckInAt = jest.fn()
    const { getByText } = render(
      <CheckInTab
        checkInAt={new Date()}
        setCheckInAt={setCheckInAt}
        loading={false}
        handleCheckIn={() => {}}
      />
    )

    const button = getByText('Nu')
    fireEvent.click(button)

    expect(setCheckInAt).toHaveBeenCalledTimes(1)
    expect(setCheckInAt).toHaveBeenCalledWith(new Date())
  })

  it('calls handleCheckIn when button is clicked while not loading', () => {
    const handleCheckIn = jest.fn()
    const { getByText } = render(
      <CheckInTab
        checkInAt={new Date()}
        setCheckInAt={() => {}}
        loading={false}
        handleCheckIn={handleCheckIn}
      />
    )

    const button = getByText('Inchecken')
    fireEvent.click(button)

    expect(handleCheckIn).toHaveBeenCalledTimes(1)
  })

  it('calls setCheckInAt when TimePicker date changes', () => {
    const setCheckInAt = jest.fn()
    const { getByDisplayValue } = render(
      <CheckInTab
        checkInAt={new Date('2024-10-16T21:41:00')}
        setCheckInAt={setCheckInAt}
        loading={false}
        handleCheckIn={() => {}}
      />
    )

    const timeInput = getByDisplayValue('21:41')
    fireEvent.change(timeInput, { target: { value: '22:30' } })

    expect(setCheckInAt).toHaveBeenCalledTimes(1)
    expect(setCheckInAt).toHaveBeenCalledWith(new Date('2024-10-16T22:30:00'))
  })
})
