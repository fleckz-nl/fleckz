import { render } from '@redwoodjs/testing/web'

import DiscardChangesAlert from './DiscardChangesAlert'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DiscardChangesAlert', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <DiscardChangesAlert
          open={false}
          setOpen={() => {}}
          onConfirm={() => {}}
        />
      )
    }).not.toThrow()
  })
})
