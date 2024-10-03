import { Toaster } from '@redwoodjs/web/toast'

type WorkRequestPageLayoutProps = {
  children?: React.ReactNode
}

const WorkRequestPageLayout = ({ children }: WorkRequestPageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-black  text-primary-foreground">
      <main className="flex max-w-full flex-grow flex-col items-center break-words">
        {children}
      </main>
      <Toaster />
    </div>
  )
}

export default WorkRequestPageLayout
