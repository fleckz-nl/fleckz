import type { Meta, StoryObj } from '@storybook/react'

import WorkRequestPage from './WorkRequestPage'

const meta: Meta<typeof WorkRequestPage> = {
  component: WorkRequestPage,
}

export default meta

type Story = StoryObj<typeof WorkRequestPage>

export const Primary: Story = {}
