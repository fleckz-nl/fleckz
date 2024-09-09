import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const WorkPlacesPage = () => {
  return (
    <>
      <Metadata title="WorkPlaces" description="WorkPlaces page" />

      <h1>WorkPlacesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/WorkPlacesPage/WorkPlacesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>workPlaces</code>, link to me with `
        <Link to={routes.workPlaces()}>WorkPlaces</Link>`
      </p>
    </>
  )
}

export default WorkPlacesPage
