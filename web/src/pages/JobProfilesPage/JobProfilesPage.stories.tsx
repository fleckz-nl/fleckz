import type { Meta, StoryObj } from '@storybook/react'

import JobProfilesPage from './JobProfilesPage'

const meta: Meta<typeof JobProfilesPage> = {
  component: JobProfilesPage,
}

export default meta

type Story = StoryObj<typeof JobProfilesPage>

export const Primary: Story = {}
