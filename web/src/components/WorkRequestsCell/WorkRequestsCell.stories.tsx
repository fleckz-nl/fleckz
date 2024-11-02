import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './WorkRequestsCell'
import { standard } from './WorkRequestsCell.mock'

const meta: Meta = {
  title: 'Cells/WorkRequestsCell',
  tags: ['autodocs'],
  args: {
    currentUserRoles: ['CLIENT'],
  },
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
    mockCurrentUser({ name: 'Mocked User', roles: meta.args.currentUserRoles })
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
