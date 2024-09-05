import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
      <Nav />
      <main className="max-w-full flex-grow flex-col break-words bg-transparent px-4 py-20">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default AppLayout
