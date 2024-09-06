import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <div className="container md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-2 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 bg-cyan-300 md:sticky md:block"></aside>
            <main className="relative bg-stone-800 py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              <div className="mx-auto w-full min-w-0">Hello</div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage
