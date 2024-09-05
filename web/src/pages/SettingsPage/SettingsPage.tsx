import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <h1>SettingsPage</h1>
        <p>
          Find me in <code>./web/src/pages/SettingsPage/SettingsPage.tsx</code>
        </p>
        <p>
          My default route is named <code>settings</code>, link to me with `
          <Link to={routes.settings()}>Settings</Link>`
        </p>
      </div>
    </>
  )
}

export default SettingsPage
