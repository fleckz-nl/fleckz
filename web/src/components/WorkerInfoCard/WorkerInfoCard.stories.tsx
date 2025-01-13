import type { Meta, StoryObj } from '@storybook/react'

import WorkerInfoCard from './WorkerInfoCard'

const meta: Meta<typeof WorkerInfoCard> = {
  component: WorkerInfoCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WorkerInfoCard>

export const Primary: Story = {}
