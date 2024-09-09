import type { Meta, StoryObj } from '@storybook/react'

import WorkPlacesPage from './BusinessPage'
import BusinessPage from './BusinessPage'

const meta: Meta<typeof BusinessPage> = {
  component: BusinessPage,
}

export default meta

type Story = StoryObj<typeof BusinessPage>

export const Primary: Story = {}
