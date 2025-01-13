import { FileSearch, FileText, Printer, Users } from 'lucide-react'
import { Button } from 'web/src/components/ui/button'

import { Metadata } from '@redwoodjs/web'

import SearchInput from 'src/components/SearchInput/SearchInput'
import SortButton from 'src/components/SortButton/SortButton'
import { Badge } from 'src/components/ui/badge'
import { Separator } from 'src/components/ui/separator'

const InvoicePage = () => {
  return (
    <>
      <Metadata title="Invoice" description="Invoice page" />
      <div className="mx-auto flex max-w-4xl flex-col text-white">
        <h1 className="text-xl font-bold">Facturen</h1>
        <div className="flex justify-between gap-2">
          <SortButton />
          <SearchInput />
        </div>
        <ul className="mt-4 flex flex-col items-center">
          <li className="flex w-full flex-col justify-end gap-2 rounded-md bg-secondary/50 p-4 text-white/90 xs:justify-between">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="font-semibold">12 Okt 2024</div>
                <Separator orientation="vertical" className="h-4 opacity-40" />
                <div className="flex flex-wrap gap-0.5">
                  08:00
                  <span>-</span>
                  15:00
                </div>
                <Separator orientation="vertical" className="h-4 opacity-40" />
                <div className="center gap-1">
                  3
                  <Users className="size-4 flex-shrink-0" />
                </div>
                <Separator orientation="vertical" className="h-4 opacity-40" />
                <div className="col-span-2">Afwasser</div>
              </div>
              <Badge className="h-fit text-secondary">Ongebetald</Badge>
            </div>
            <Button variant="accent" className="self-end text-primary">
              Details
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default InvoicePage
