import { render } from '@redwoodjs/testing/web'

import ConfirmWorkRequestPage from './ConfirmWorkRequestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ConfirmWorkRequestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmWorkRequestPage />)
    }).not.toThrow()
  })
})
