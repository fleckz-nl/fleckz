import type { Meta, StoryObj } from '@storybook/react'

import CandidatesPage from './CandidatesPage'

const meta: Meta<typeof CandidatesPage> = {
  component: CandidatesPage,
}

export default meta

type Story = StoryObj<typeof CandidatesPage>

export const Primary: Story = {}
