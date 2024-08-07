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

import AddJobProfileModal from './AddJobProfileModal'

const meta: Meta<typeof AddJobProfileModal> = {
  component: AddJobProfileModal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AddJobProfileModal>

export const Primary: Story = {}
