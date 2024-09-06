import Nav from 'src/components/Nav/Nav'

type SettingLayoutProps = {
  children?: React.ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  return (
    <>
      <div className="center min-h-screen flex-col bg-black text-primary-foreground">
        <Nav />
        <main className="max-w-full flex-grow flex-col break-words bg-transparent px-4 py-20">
          {children}
        </main>
      </div>
    </>
  )
}

export default SettingLayout
