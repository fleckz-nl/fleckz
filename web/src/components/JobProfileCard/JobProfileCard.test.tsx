import { render } from '@redwoodjs/testing/web'

import JobProfileCard from './JobProfileCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobProfileCard', () => {
  it('renders successfully', () => {
    const sampleJobProfile = {
      id: 'clzo7lgno00013b6g6xlz8ghu',
      name: 'Softwareontwikkelaar',
      hourlyWageMin: 35,
      hourlyWageMax: 50,
      yearsOfExp: 3,
      maxTravelDistance: 30,
      kmAllowance: 0.21,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 52.1,
      comment:
        'Kennis van moderne programmeertalen zoals Python en Java is een vereiste.',
    }

    expect(() => {
      render(<JobProfileCard item={sampleJobProfile} />)
    }).not.toThrow()
  })
})
