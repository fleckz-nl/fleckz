import { render } from '@redwoodjs/testing/web'

import SettingsLayout from './SettingsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsLayout />)
    }).not.toThrow()
  })
})
