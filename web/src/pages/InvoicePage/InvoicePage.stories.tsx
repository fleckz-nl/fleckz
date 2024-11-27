import type { Meta, StoryObj } from '@storybook/react'

import InvoicePage from './InvoicePage'

const meta: Meta<typeof InvoicePage> = {
  component: InvoicePage,
}

export default meta

type Story = StoryObj<typeof InvoicePage>

export const Primary: Story = {}
