import type { Meta, StoryObj } from '@storybook/react'

import WorkRequestsListItem from './WorkRequestsListItem'

const meta: Meta<typeof WorkRequestsListItem> = {
  component: WorkRequestsListItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WorkRequestsListItem>

export const Primary: Story = {}
