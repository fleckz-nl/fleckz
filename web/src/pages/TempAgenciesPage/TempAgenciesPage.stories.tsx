import type { Meta, StoryObj } from '@storybook/react'

import TempAgenciesPage from './TempAgenciesPage'

const meta: Meta<typeof TempAgenciesPage> = {
  component: TempAgenciesPage,
}

export default meta

type Story = StoryObj<typeof TempAgenciesPage>

export const Primary: Story = {}
