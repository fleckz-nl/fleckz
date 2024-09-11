import { render } from '@redwoodjs/testing/web'

import ButtonWithLoader from './ButtonWithLoader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonWithLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonWithLoader loading={true}>Ok</ButtonWithLoader>)
    }).not.toThrow()
  })
})
