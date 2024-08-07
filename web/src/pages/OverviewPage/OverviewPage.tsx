import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const OverviewPage = () => {
  return (
    <>
      <Metadata title="Overview" description="Overview page" />

      <h1>OverviewPage</h1>
      <p>
        Find me in <code>./web/src/pages/OverviewPage/OverviewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>overview</code>, link to me with `
        <Link to={routes.overview()}>Overview</Link>`
      </p>
    </>
  )
}

export default OverviewPage
