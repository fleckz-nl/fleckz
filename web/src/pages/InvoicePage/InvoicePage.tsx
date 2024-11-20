import { FileSearch, FileText, Printer } from 'lucide-react'
import { Button } from 'web/src/components/ui/button'

import { Metadata } from '@redwoodjs/web'

import { Badge } from 'src/components/ui/badge'

const InvoicePage = () => {
  return (
    <>
      <Metadata title="Invoice" description="Invoice page" />
      <div className="mx-auto min-h-[120vh] bg-white">
        <div className="mx-auto flex max-w-4xl flex-col">
          <ul className="flex w-full flex-col items-center gap-1 pb-32 pt-20">
                <span>Mollie Baker</span>
                <Badge className="h-fit">Ongebetald</Badge>
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
