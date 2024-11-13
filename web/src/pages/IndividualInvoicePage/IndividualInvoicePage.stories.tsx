import type { Meta, StoryObj } from '@storybook/react'

import IndividualInvoicePage from './IndividualInvoicePage'

const meta: Meta<typeof IndividualInvoicePage> = {
  component: IndividualInvoicePage,
}

export default meta

type Story = StoryObj<typeof IndividualInvoicePage>

export const Primary: Story = {}
