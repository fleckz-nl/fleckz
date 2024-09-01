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
import type { WorkRequestsQuery } from 'types/graphql'

import RequestStatusCard from './RequestStatusCard'

const meta: Meta<typeof RequestStatusCard> = {
  component: RequestStatusCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RequestStatusCard>

const defaultRequest: WorkRequestsQuery['workRequests'][0] = {
  __typename: 'WorkRequest',
  id: 'test',
  projectName: 'test project',
  startDate: new Date().toDateString(),
  endDate: new Date().toDateString(),
  status: 'DRAFT',
  numWorkers: 1,
  location: {
    __typename: 'Address',
    id: 'xxx',
    street: 'xxx',
    houseNumber: 'xxx',
    city: 'xxxx',
    province: 'xxx',
    country: 'xxx',
    postalCode: 'xxx',
  },
  jobProfile: {
    __typename: 'JobProfile',
    name: 'xxx',
    hourlyWageMin: 4,
    hourlyWageMax: 4,
    qualityNeeded: 4,
  },
}

export const Draft: Story = {
  args: {
    request: defaultRequest,
  },
}

export const Submitted: Story = {
  args: {
    request: { ...defaultRequest, status: 'SUBMITTED' },
  },
}

export const Confirmed: Story = {
  args: {
    request: { ...defaultRequest, status: 'CONFIRMED' },
  },
}

export const Done: Story = {
  args: {
    request: { ...defaultRequest, status: 'DONE' },
  },
}
