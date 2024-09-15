import { render } from '@redwoodjs/testing/web'

import CommentSpeechBubble from './CommentSpeechBubble'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentSpeechBubble', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentSpeechBubble />)
    }).not.toThrow()
  })
})
