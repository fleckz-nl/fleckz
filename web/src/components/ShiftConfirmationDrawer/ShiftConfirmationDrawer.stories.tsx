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

import { mockShifts } from 'src/components/WorkRequestCell/WorkRequestCell.mock'

import ShiftConfirmationDrawer from './ShiftConfirmationDrawer'

const meta: Meta<typeof ShiftConfirmationDrawer> = {
  component: ShiftConfirmationDrawer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ShiftConfirmationDrawer>

export const Primary: Story = {
  args: {
    shift: mockShifts[0],
  },
}
