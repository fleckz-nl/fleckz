import Aside from 'src/components/Aside/Aside'
import Nav from 'src/components/Nav/Nav'

type SettingLayoutProps = {
  children?: React.ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  return (
    <>
      <div className="center min-h-screen flex-col bg-black text-primary-foreground">
        <Nav />
        <main className="max-w-full flex-grow flex-col break-words bg-transparent px-4 pt-20">
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">
              <div className="grid gap-4 px-2 xs:grid-cols-[140px_minmax(0,1fr)] xs:px-4 md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
                <Aside />
                <main className="relative ml-10 bg-stone-800 py-6 xs:ml-8 md:ml-0 md:gap-8 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                  <div className="center container mx-auto min-h-screen min-w-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae veniam, similique ad omnis perferendis, hic nulla
                    adipisci, quisquam eligendi magni provident dolorem.
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default SettingLayout
