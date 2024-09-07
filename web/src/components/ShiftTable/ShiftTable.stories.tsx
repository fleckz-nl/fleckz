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

import ShiftTable from './ShiftTable'

const meta: Meta<typeof ShiftTable> = {
  component: ShiftTable,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ShiftTable>

export const Primary: Story = {
  args: {
    data: [
      {
        id: 'test_row_1',
        shiftName: 'Shift 1',
        status: 'UNFULFILLED',
        agency: 'Agency 1',
      },
      {
        id: 'test_row_2',
        shiftName: 'Shift 2',
        status: 'UNFULFILLED',
        agency: 'Agency 1',
      },
      {
        id: 'test_row_3',
        shiftName: 'Shift 3',
        status: 'UNFULFILLED',
        agency: 'Agency 1',
      },
    ],
  },
}
