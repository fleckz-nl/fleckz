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

import UpdateEmailCard from './UpdateEmailCard'

const meta: Meta<typeof UpdateEmailCard> = {
  component: UpdateEmailCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UpdateEmailCard>

export const Primary: Story = {}
