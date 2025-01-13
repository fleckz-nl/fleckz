import { FileSearch, FileText, Printer } from 'lucide-react'
import { Button } from 'web/src/components/ui/button'

import { Metadata } from '@redwoodjs/web'

import { Badge } from 'src/components/ui/badge'

const InvoicePage = () => {
  return (
    <>
      <Metadata title="Invoice" description="Invoice page" />
      <div className="mx-auto flex max-w-4xl flex-col text-white">
        <ul className="flex w-full flex-col items-center gap-1 pb-32 pt-20">
          <li className="flex w-11/12 flex-wrap justify-end gap-2 rounded-md bg-primary/20 p-2 text-primary/70 xs:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <FileText />
                <span className="font-semibold">12 Okt 2024</span>
              </div>
              <span>Mollie Baker</span>
              <Badge className="h-fit">Ongebetald</Badge>
            </div>
            <div className="flex gap-4 px-2">
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
    </>
  )
}

export default InvoicePage
