import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TempAgenciesPage = () => {
  return (
    <>
      <Metadata title="TempAgencies" description="TempAgencies page" />

      <h1>TempAgenciesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TempAgenciesPage/TempAgenciesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>tempAgencies</code>, link to me with `
        <Link to={routes.tempAgencies()}>TempAgencies</Link>`
      </p>
    </>
  )
}

export default TempAgenciesPage
