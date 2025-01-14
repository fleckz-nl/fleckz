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

import WorkRequestsList from './WorkRequestsList.jsx'

const meta: Meta<typeof WorkRequestsList> = {
  component: WorkRequestsList,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WorkRequestsList>

export const Primary: Story = {}
