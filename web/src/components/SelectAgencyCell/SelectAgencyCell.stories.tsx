import type { Meta, StoryObj } from '@storybook/react'
import { AgenciesQuery } from 'types/graphql'

import { Loading, Empty, Failure, Success } from './SelectAgencyCell'
import { standard } from './SelectAgencyCell.mock'

export const sampleAgencies: AgenciesQuery['tempAgencies'] = [
  { id: 'agency_1', name: 'Sample Agency 1', __typename: 'TempAgency' },
  { id: 'agency_2', name: 'Sample Agency 2', __typename: 'TempAgency' },
  { id: 'agency_3', name: 'Sample Agency 3', __typename: 'TempAgency' },
  { id: 'agency_4', name: 'Sample Agency 4', __typename: 'TempAgency' },
]

const meta: Meta = {
  title: 'Cells/SelectAgencyCell',
  tags: ['autodocs'],
  args: { tempAgencies: sampleAgencies },
}

export default meta

export const loading: StoryObj<typeof Loading> = {
  render: () => {
    return Loading ? <Loading /> : <></>
  },
}

export const empty: StoryObj<typeof Empty> = {
  render: () => {
    return Empty ? <Empty /> : <></>
  },
}

export const failure: StoryObj<typeof Failure> = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
