import { render } from '@redwoodjs/testing/web'

import ChooseSoftSkills from './ChooseSoftSkills'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChooseSoftSkills', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChooseSoftSkills />)
    }).not.toThrow()
  })
})
