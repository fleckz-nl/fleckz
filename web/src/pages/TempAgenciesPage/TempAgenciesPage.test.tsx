import { render } from '@redwoodjs/testing/web'

import TempAgenciesPage from './TempAgenciesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TempAgenciesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TempAgenciesPage />)
    }).not.toThrow()
  })
})
