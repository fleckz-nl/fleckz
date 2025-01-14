import { useState } from 'react'

import { addDays, addWeeks, format, isToday, subDays, subWeeks } from 'date-fns'
import { nl } from 'date-fns/locale/nl'
import { ChevronLeft, ChevronRight, RotateCw, Users } from 'lucide-react'
import { Button } from 'web/src/components/ui/button'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import SearchInput from 'src/components/SearchInput/SearchInput'
import SortButton from 'src/components/SortButton/SortButton'
import { Badge } from 'src/components/ui/badge'
import { Separator } from 'src/components/ui/separator'

const InvoicePage = () => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <Metadata title="Invoice" description="Invoice page" />
      <div className="mx-auto flex max-w-4xl flex-col text-white">
        <h1 className="text-xl font-bold">Facturen</h1>
        <div className="flex justify-between gap-2">
          <SortButton />
          <SearchInput />
        </div>
        <div className="my-8 flex flex-row items-center justify-center">
          <ChevronLeft
            className="hover:cursor-pointer"
            onClick={() => setDate((d) => subWeeks(d, 1))}
          />
          <div className="relative mx-4 flex flex-col items-center text-xl">
            <span className="text-2xl font-medium text-accent">
              {`Week ${format(date, 'I yyyy', { locale: nl })}`}
            </span>
            <h1 className="text-lg text-primary-foreground">
              {format(subDays(date, date.getDay()), 'dd MMM yyyy', {
                locale: nl,
              })}{' '}
              -{' '}
              {format(addDays(date, 6 - date.getDay()), 'dd MMM yyyy', {
                locale: nl,
              })}
            </h1>
            <RotateCw
              className={`absolute -right-6 -top-2 size-[22px] rounded-full bg-white/60 p-1 text-primary
                hover:cursor-pointer
                hover:bg-accent ${isToday(date) && 'invisible'}`}
              onClick={() => setDate(new Date())}
            />
          </div>
          <ChevronRight
            className="hover:cursor-pointer"
            onClick={() => setDate((d) => addWeeks(d, 1))}
          />
        </div>
        <ul className="flex flex-col items-center gap-4">
          <li className="flex w-full flex-col justify-end gap-2 rounded-md bg-secondary/50 p-4 text-white/90 xs:justify-between">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="font-semibold">12 Jan 2025</div>
                <Separator orientation="vertical" className="h-4 opacity-40" />
                <div className="flex flex-wrap gap-0.5">
                  13:30
                  <span>-</span>
                  23:30
                </div>
                <Separator orientation="vertical" className="h-4 opacity-40" />
                <div className="center gap-1">
                  1
                  <Users className="size-4 flex-shrink-0" />
                </div>
                <Separator orientation="vertical" className="h-4 opacity-40" />
                <div className="col-span-2">Afwasser</div>
              </div>
              <Badge className="h-fit bg-green-600 text-primary">Betaald</Badge>
            </div>
            <ul className="flex flex-col">
              <li className="mt-4 grid grid-cols-2 gap-4">
                <span className="font-light ">Hans van Manus</span>
                <span className="text-lg text-white">€ 178,39</span>
              </li>
            </ul>
            <Link
              to={routes.individualInvoice({ id: '1', paid: true })}
              className="self-end text-primary"
            >
              <Button variant="accent" className="self-end text-primary">
                Details
              </Button>
            </Link>
          </li>
          <li className="flex w-full flex-col justify-end gap-2 rounded-md bg-secondary/50 p-4 text-white/90 xs:justify-between">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="font-semibold">14 Jan 2025</div>
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
                <div className="col-span-2">Schoonmaker</div>
              </div>
              <Badge className="h-fit text-secondary">Nog te betalen</Badge>
            </div>
            <ul className="flex flex-col">
              <li className="mt-4 grid grid-cols-2 gap-4">
                <span className="font-light">Rinus Verkerk</span>
                <span className="text-lg text-white">€ 396,25</span>
              </li>
              <li className="mt-4 grid grid-cols-2 gap-4">
                <span className="font-light">Marieke Bosch</span>
                <span className="text-lg text-white">€ 148,21</span>
              </li>
              <li className="mt-4 grid grid-cols-2 gap-4">
                <span className="font-light">Noah de Vries</span>
                <span className="text-lg text-white">€ 287,18</span>
              </li>
            </ul>
            <Link
              to={routes.individualInvoice({ id: '1', paid: false })}
              className="self-end text-primary"
            >
              <Button variant="accent" className="self-end text-primary">
                Details
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default InvoicePage
