import { Metadata } from '@redwoodjs/web'

import WorkRequestCell from 'src/components/WorkRequestCell'

type WorkRequestPageProps = {
  id: string
}

const WorkRequestPage = ({ id }: WorkRequestPageProps) => {
  return (
    <>
      <Metadata title="WorkRequest" description="WorkRequest page" />

      <WorkRequestCell id={id} />
    </>
  )
}

export default WorkRequestPage
