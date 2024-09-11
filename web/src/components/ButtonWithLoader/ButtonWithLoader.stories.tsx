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

import ButtonWithLoader from './ButtonWithLoader'

const meta: Meta<typeof ButtonWithLoader> = {
  component: ButtonWithLoader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ButtonWithLoader>

export const Primary: Story = {}
