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

import OnboardingPlanWork from './OnboardingPlanWork'

const meta: Meta<typeof OnboardingPlanWork> = {
  component: OnboardingPlanWork,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OnboardingPlanWork>

export const Primary: Story = {}
