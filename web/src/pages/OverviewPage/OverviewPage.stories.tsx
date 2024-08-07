import type { Meta, StoryObj } from '@storybook/react'

import OverviewPage from './OverviewPage'

const meta: Meta<typeof OverviewPage> = {
  component: OverviewPage,
}

export default meta

type Story = StoryObj<typeof OverviewPage>

export const Primary: Story = {}
