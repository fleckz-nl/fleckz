import { render } from '@redwoodjs/testing/web'

import ConfirmAction from './ConfirmAction'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmAction', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ConfirmAction
          title="Confirm this action"
          description="Please confirm this action"
          onConfirm={() => {}}
        >
          Bevestigen
        </ConfirmAction>
      )
    }).not.toThrow()
  })
})
