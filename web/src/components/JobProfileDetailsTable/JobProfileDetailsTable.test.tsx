import { render } from '@redwoodjs/testing/web'

import JobProfileDetailsTable from './JobProfileDetailsTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobProfileDetailsTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobProfileDetailsTable />)
    }).not.toThrow()
  })
})
