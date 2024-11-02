import { render } from '@redwoodjs/testing/web'

import TempAgencyWorker from 'src/components/TempAgencyWorker'
import { Checkbox } from 'src/components/ui/checkbox'
import { mockShifts } from 'src/components/WorkRequestCell/WorkRequestCell.mock'

import TodayShiftsTable from './TodayShiftsTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TodayShiftsTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodayShiftsTable data={mockData} columns={columns} />)
    }).not.toThrow()
  })

  it('renders the table header', () => {
    const { getByText } = render(
      <TodayShiftsTable data={mockData} columns={columns} />
    )

    expect(getByText('medewerkers')).toBeInTheDocument()
  })
})

const workRequest = {
  shifts: mockShifts,
}

const columns = [
  {
    id: 'select',
    header: ({ table }) => null,
    cell: ({ row }) => (
      <Checkbox
        className="border-primary-foreground bg-black/20 hover:bg-secondary"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecteer rij"
      />
    ),
    enableSorting: false,
  },
  {
    id: 'name',
    header: () => (
      <div className="absolute left-10 top-2.5 flex gap-1">
        <span>{workRequest?.shifts?.length}</span>
        <span>medewerkers</span>
      </div>
    ),
    cell: ({ row }) => (
      <TempAgencyWorker
        workerName={row.original.workerName}
        tempAgencyName={row.original.tempAgency?.name}
        className="text-white/90"
      />
    ),
  },
  {
    id: 'checkIn',
    cell: null,
    header: () => null,
  },
]

const mockData = [
  {
    __typename: 'Shift',
    id: 'cm2dl2fxu0002fpx53qhzqy1q',
    createdAt: '2024-10-18T17:37:00.976Z',
    updatedAt: '2024-10-18T17:37:00.976Z',
    workerName: 'John Doe',
    checkedInAt: '2024-10-18T18:00:00.000Z',
    checkedOutAt: '2024-10-18T19:30:00.000Z',
    status: 'FULFILLED',
    tempAgency: 'Agency 1',
  },
  {
    __typename: 'Shift',
    id: 'cm2dl2fxu0003fpx53qhzqy1q',
    createdAt: '2024-10-18T17:37:00.976Z',
    updatedAt: '2024-10-18T17:37:00.976Z',
    workerName: 'Jane Doe',
    checkedInAt: '2024-10-18T18:00:00.000Z',
    checkedOutAt: '2024-10-18T19:30:00.000Z',
    status: 'FULFILLED',
    tempAgency: 'Agency 2',
  },
]
