import { Toaster } from '@redwoodjs/web/toast'

import Nav from 'src/components/Nav/Nav'
import SideNav from 'src/components/SideNav/SideNav'

type SettingLayoutProps = {
  children?: React.ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  return (
    <>
      <div className="center min-h-screen flex-col bg-black text-primary-foreground">
        <Nav />
        <section className="w-full flex-grow flex-col break-words bg-transparent px-4 pt-20">
          <div className="container grid flex-1 gap-2 px-2 xs:grid-cols-[180px_minmax(0,1fr)] xs:gap-2 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-4">
            <SideNav className="text-white/80" />
            <main className="relative ml-10 py-6 xs:ml-2 xs:w-full md:gap-8 lg:py-8">
              <div className="flex min-h-screen w-full flex-col">
                {children}
              </div>
            </main>
          </div>
        </section>
      </div>
      <Toaster />
    </>
  )
}

export default SettingLayout
