// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import InvoiceHeader from './InvoiceHeader'

const meta: Meta<typeof InvoiceHeader> = {
  component: InvoiceHeader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InvoiceHeader>

export const Primary: Story = {}
