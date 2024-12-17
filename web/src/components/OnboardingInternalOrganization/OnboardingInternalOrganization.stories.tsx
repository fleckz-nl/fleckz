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

import OnboardingInternalOrganization from './OnboardingInternalOrganization'

const meta: Meta<typeof OnboardingInternalOrganization> = {
  component: OnboardingInternalOrganization,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OnboardingInternalOrganization>

export const Primary: Story = {}
