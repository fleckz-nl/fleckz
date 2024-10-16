import { render, fireEvent } from '@redwoodjs/testing/web'

import ShiftSummaryTab from './ShiftSummaryTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShiftSummaryTab', () => {
  it('renders successfully', () => {
    const { getByText } = render(
      <ShiftSummaryTab
        checkInAt={new Date()}
        checkOutAt={new Date()}
        loading={false}
        handleSummaryConfirm={() => {}}
      />
    )

    expect(getByText('Inchecken')).toBeInTheDocument()
    expect(getByText('Uitchecken')).toBeInTheDocument()
    expect(getByText('uren')).toBeInTheDocument()
  })

  it('calls handleSummaryConfirm when button is clicked', () => {
    const handleSummaryConfirm = jest.fn()
    const { getByText } = render(
      <ShiftSummaryTab
        checkInAt={new Date()}
        checkOutAt={new Date()}
        loading={false}
        handleSummaryConfirm={handleSummaryConfirm}
      />
    )

    const button = getByText('Bevestigen')
    fireEvent.click(button)

    expect(handleSummaryConfirm).toHaveBeenCalledTimes(1)
  })

  it('does not call handleSummaryConfirm when button is clicked during loading', () => {
    const handleSummaryConfirm = jest.fn()
    const { getByText } = render(
      <ShiftSummaryTab
        checkInAt={new Date()}
        checkOutAt={new Date()}
        loading={true}
        handleSummaryConfirm={handleSummaryConfirm}
      />
    )

    const button = getByText('Bevestigen')
    fireEvent.click(button)

    expect(handleSummaryConfirm).not.toHaveBeenCalled()
  })

  it('renders duration correctly', () => {
    const { getByText } = render(
      <ShiftSummaryTab
        checkInAt={new Date('2022-01-01T08:00:00')}
        checkOutAt={new Date('2022-01-01T12:00:00')}
        loading={false}
        handleSummaryConfirm={() => {}}
      />
    )

    const duration = getByText('4:00')
    expect(duration).toBeInTheDocument()
  })
})
