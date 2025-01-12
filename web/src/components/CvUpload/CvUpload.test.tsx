import { render } from '@redwoodjs/testing/web'

import CvUpload from './CvUpload'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CvUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CvUpload />)
    }).not.toThrow()
  })
})
