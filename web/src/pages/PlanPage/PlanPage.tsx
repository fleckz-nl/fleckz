import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PlanPage = () => {
  return (
    <>
      <Metadata title="Plan" description="Plan page" />

      <h1>PlanPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlanPage/PlanPage.tsx</code>
      </p>
      <p>
        My default route is named <code>plan</code>, link to me with `
        <Link to={routes.plan()}>Plan</Link>`
      </p>
    </>
  )
}

export default PlanPage
