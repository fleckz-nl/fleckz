import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const JobProfilesPage = () => {
  return (
    <>
      <Metadata title="JobProfiles" description="JobProfiles page" />

      <h1>JobProfilesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/JobProfilesPage/JobProfilesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>jobProfiles</code>, link to me with `
        <Link to={routes.jobProfiles()}>JobProfiles</Link>`
      </p>
    </>
  )
}

export default JobProfilesPage
