import { render } from '@redwoodjs/testing/web'

import AddJobProfileModal from './AddJobProfileModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddJobProfileModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddJobProfileModal />)
    }).not.toThrow()
  })
})
