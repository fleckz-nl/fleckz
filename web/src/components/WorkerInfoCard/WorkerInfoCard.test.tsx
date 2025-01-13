import { render } from '@redwoodjs/testing/web'

import WorkerInfoCard from './WorkerInfoCard'

describe('WorkerInfoCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkerInfoCard />)
    }).not.toThrow()
  })
})
