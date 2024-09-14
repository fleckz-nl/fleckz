import { Metadata } from '@redwoodjs/web'

import WorkRequestsCell from 'src/components/WorkRequestsCell'

const OverviewPage = () => {
  return (
    <>
      <Metadata title="Overview" description="Overview page" />
      <section className="mx-auto max-w-4xl space-y-6">
        <WorkRequestsCell />
      </section>
    </>
  )
}

export default OverviewPage
