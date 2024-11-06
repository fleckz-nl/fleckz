import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import ConfirmAction from './ConfirmAction'

describe('ConfirmAction', () => {
  it('renders the action button', () => {
    const title = 'Example Title'
    const description = 'Example Description'
    const actionText = 'Example Action Text'
    const onConfirm = jest.fn()
    const { getByText } = render(
      <ConfirmAction
        title={title}
        description={description}
        actionText={actionText}
        onConfirm={onConfirm}
      >
        <button>Click me</button>
      </ConfirmAction>
    )
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('open the dialog when the action is clicked', () => {
    const title = 'Example Title'
    const description = 'Example Description'
    const actionText = 'Example Action Text'
    const onConfirm = jest.fn()
    const { getByText } = render(
      <ConfirmAction
        title={title}
        description={description}
        actionText={actionText}
        onConfirm={onConfirm}
      >
        <button>Click me</button>
      </ConfirmAction>
    )
    const actionButton = getByText('Click me')

    fireEvent.click(actionButton)
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(description)).toBeInTheDocument()
    expect(getByText(actionText)).toBeInTheDocument()
  })

  it('calls onSubmit when the confirmation button is clicked on the dialog', () => {
    const title = 'Example Title'
    const description = 'Example Description'
    const actionText = 'Example Action Text'
    const onConfirm = jest.fn()
    const { getByText } = render(
      <ConfirmAction
        title={title}
        description={description}
        actionText={actionText}
        onConfirm={onConfirm}
      >
        <button>Click me</button>
      </ConfirmAction>
    )
    const actionButton = getByText('Click me')
    fireEvent.click(actionButton)

    const confirmButton = getByText(actionText)
    fireEvent.click(confirmButton)
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })
})
