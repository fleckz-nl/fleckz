// import { Link, routes } from '@redwoodjs/router'
import { Users } from 'lucide-react'
import { Checkbox } from 'web/src/components/ui/checkbox'
import { Separator } from 'web/src/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'web/src/components/ui/table'

import { Metadata } from '@redwoodjs/web'

import SearchInput from 'src/components/SearchInput'
import ShiftConfirmationDrawer from 'src/components/ShiftConfirmationDrawer'
import SortButton from 'src/components/SortButton'
import TempAgencyWorker from 'src/components/TempAgencyWorker'

const TodayPage = () => {
  return (
    <>
      <Metadata title="Today" description="Today page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <div className="flex flex-col items-center text-xl font-bold">
          <h1 className="text-white/90">Vandaag</h1>
          <span className="text-2xl font-medium text-accent">
            14 Oktober 2024
          </span>
        </div>
        <section className="flex flex-col items-center">
          <Separator className="mt-4 bg-primary-foreground/20" />
          <h3 className="center mt-2 gap-2 text-center">
            <div className="flex gap-1">
              <span>08:00</span>
              <span>-</span>
              <span>15:00</span>
            </div>
            <Separator
              orientation="vertical"
              className="h-4 w-[2px] text-accent"
            />
            <span>Funtienaam</span>
          </h3>
          <div className="center gap-1">
            <span>6</span>
            <Users className="size-5" />
          </div>
          <div className="mt-4 flex w-full items-center justify-between">
            <SortButton />
            <SearchInput />
          </div>
          <Table className="mt-4">
            <TableHeader>
              <TableHead className="flex gap-3 text-gray-400">
                <Checkbox className="border-primary-foreground bg-black/20 hover:bg-secondary" />
                <div className="flex gap-1">
                  <span>6</span>
                  <span>medewerkers</span>
                </div>
              </TableHead>
            </TableHeader>
            <TableBody>
              <TableRow className="border-secondary/10 bg-black/90 hover:bg-black">
                <TableCell className="w-8">
                  <Checkbox className="border-primary-foreground bg-black/20 hover:bg-secondary" />
                </TableCell>
                <TableCell>
                  <TempAgencyWorker className="text-white/90" />
                </TableCell>
                <TableCell className="w-2">
                  <ShiftConfirmationDrawer />
                </TableCell>
              </TableRow>
              <TableRow className="border-secondary/10 bg-black/90 hover:bg-black">
                <TableCell className="w-8">
                  <Checkbox className="border-primary-foreground bg-black/20 hover:bg-secondary" />
                </TableCell>
                <TableCell>
                  <TempAgencyWorker className="text-white/90" />
                </TableCell>
                <TableCell className="w-2">
                  <ShiftConfirmationDrawer />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </>
  )
}

export default TodayPage
