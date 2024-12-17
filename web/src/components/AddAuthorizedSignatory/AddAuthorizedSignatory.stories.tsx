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

import AddAuthorizedSignatory from './AddAuthorizedSignatory'

const meta: Meta<typeof AddAuthorizedSignatory> = {
  component: AddAuthorizedSignatory,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AddAuthorizedSignatory>

export const Primary: Story = {}
