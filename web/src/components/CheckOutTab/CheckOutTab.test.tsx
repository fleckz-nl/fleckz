import { render, fireEvent } from '@redwoodjs/testing/web'

import CheckOutTab from './CheckOutTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckOutTab', () => {
  it('renders successfully', () => {
    const { getByText } = render(
      <CheckOutTab
        checkOutAt={new Date()}
        setCheckOutAt={() => {}}
        loading={false}
        handleCheckOut={() => {}}
        shiftRating={0}
        setShiftRating={() => {}}
      />
    )

    expect(getByText('Uit')).toBeInTheDocument()
    expect(getByText('Nu')).toBeInTheDocument()
  })

  it('calls handleClickNow when button is clicked', () => {
    const setCheckOutAt = jest.fn()
    const { getByText } = render(
      <CheckOutTab
        checkOutAt={new Date()}
        setCheckOutAt={setCheckOutAt}
        loading={false}
        handleCheckOut={() => {}}
        shiftRating={0}
        setShiftRating={() => {}}
      />
    )

    const button = getByText('Nu')
    fireEvent.click(button)

    expect(setCheckOutAt).toHaveBeenCalledTimes(1)
    expect(setCheckOutAt).toHaveBeenCalledWith(new Date())
  })

  it('calls setCheckInAt when TimePicker date changes', () => {
    const setCheckOutAt = jest.fn()
    const { getByDisplayValue } = render(
      <CheckOutTab
        checkOutAt={new Date('2024-10-16T21:41:00')}
        setCheckOutAt={setCheckOutAt}
        loading={false}
        handleCheckOut={() => {}}
        shiftRating={0}
        setShiftRating={() => {}}
      />
    )

    const timeInput = getByDisplayValue('21:41')
    fireEvent.change(timeInput, { target: { value: '22:30' } })

    expect(setCheckOutAt).toHaveBeenCalledTimes(1)
    expect(setCheckOutAt).toHaveBeenCalledWith(new Date('2024-10-16T22:30:00'))
  })
})
