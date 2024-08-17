import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import WorkRequestsCell from 'src/components/WorkRequestsCell'

const OverviewPage = () => {
  return (
    <>
      <Metadata title="Overview" description="Overview page" />
      <WorkRequestsCell />
    </>
  )
}

export default OverviewPage
