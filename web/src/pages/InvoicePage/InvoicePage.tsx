import { FileSearch, FileText, Printer } from 'lucide-react'
import { Button } from 'web/src/components/ui/button'

import { Metadata } from '@redwoodjs/web'

const InvoicePage = () => {
  return (
    <>
      <Metadata title="Invoice" description="Invoice page" />
      <div className="mx-auto min-h-[120vh] bg-white">
        <div className="mx-auto flex max-w-4xl flex-col">
          <ul className="flex w-full flex-col items-center gap-1 pb-32 pt-20">
            <li className="flex h-12 w-11/12 items-center justify-between rounded-md bg-primary/20 px-5 text-primary/70 xs:w-4/5">
              <div className="flex w-3/4 gap-1">
                <FileText />
                <span className="font-semibold">12 Okt 2024</span>
              </div>
              <div className="flex gap-4">
                <Button className="bg-primary p-0">
                  <FileSearch />
                </Button>
                <Button className="bg-primary p-0">
                  <Printer />
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default InvoicePage
