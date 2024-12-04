import { Toaster } from '@redwoodjs/web/toast'

import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'

type SecondaryLayoutProps = {
  children?: React.ReactNode
}

const SecondaryLayout = ({ children }: SecondaryLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-secondary text-primary">
      <Nav className="bg-primary/90 text-primary-foreground" />
      <main className="max-w-full flex-grow flex-col break-words bg-transparent px-4 py-20">
        {children}
      </main>
      <div className="bg-primary/90">
        <Footer />
      </div>
      <Toaster />
    </div>
  )
}

export default SecondaryLayout
