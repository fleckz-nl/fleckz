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

import OnboardingAvatarAndName from './OnboardingAvatarAndName'

const meta: Meta<typeof OnboardingAvatarAndName> = {
  component: OnboardingAvatarAndName,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OnboardingAvatarAndName>

export const Primary: Story = {}
