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

import BusinessAddressCell from './BusinessAddressCell'

const meta: Meta<typeof BusinessAddressCell> = {
  component: BusinessAddressCell,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BusinessAddressCell>

export const Primary: Story = {}
