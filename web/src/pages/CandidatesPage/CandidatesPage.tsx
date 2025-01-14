// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const CandidatesPage = () => {
  return (
    <>
      <Metadata title="Candidates" description="Candidates page" />

      <h1>CandidatesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CandidatesPage/CandidatesPage.tsx</code>
      </p>
      {/*
          My default route is named `candidates`, link to me with:
          `<Link to={routes.candidates()}>Candidates</Link>`
      */}
    </>
  )
}

export default CandidatesPage
