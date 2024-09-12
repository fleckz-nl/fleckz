// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ConfirmRevertToConfirmed from './ConfirmRevertToConfirmed'

const meta: Meta<typeof ConfirmRevertToConfirmed> = {
  component: ConfirmRevertToConfirmed,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ConfirmRevertToConfirmed>

export const Primary: Story = {}
