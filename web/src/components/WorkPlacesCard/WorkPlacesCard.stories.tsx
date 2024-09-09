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

import WorkPlacesCard from './WorkPlacesCard'

const meta: Meta<typeof WorkPlacesCard> = {
  component: WorkPlacesCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WorkPlacesCard>

export const Primary: Story = {}
