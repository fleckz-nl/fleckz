import type { Meta, StoryObj } from '@storybook/react'

import WorkPlacesPage from './WorkPlacesPage'

const meta: Meta<typeof WorkPlacesPage> = {
  component: WorkPlacesPage,
}

export default meta

type Story = StoryObj<typeof WorkPlacesPage>

export const Primary: Story = {}
