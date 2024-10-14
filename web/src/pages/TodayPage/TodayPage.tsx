// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TodayPage = () => {
  return (
    <>
      <Metadata title="Today" description="Today page" />

      <h1>TodayPage</h1>
      <p>
        Find me in <code>./web/src/pages/TodayPage/TodayPage.tsx</code>
      </p>
      {/*
          My default route is named `today`, link to me with:
          `<Link to={routes.today()}>Today</Link>`
      */}
    </>
  )
}

export default TodayPage
