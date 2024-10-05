import { CheckCircle2, Ellipsis, Users } from 'lucide-react'

import { OverviewHeader } from '../OverviewSection/OverviewSection'
import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const AcceptedRequestsTable = () => {
  return (
    <div className="flex flex-col">
      <OverviewHeader>
        <CheckCircle2 className="mr-1 inline" />
        Geaccepteerd
      </OverviewHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-400">Datum</TableHead>
            <TableHead className="text-gray-400">Funtienaam</TableHead>
            <TableHead className="text-gray-400">Medewerkers</TableHead>
            <TableHead className="text-gray-400">Werktijd</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-primary text-white hover:bg-white hover:text-secondary">
            <TableCell className="font-bold">8 sept 2024</TableCell>
            <TableCell>Salesmanager</TableCell>
            <TableCell className="pl-10">
              5
              <Users className="relative -top-0.5 ml-1 inline size-4" />
            </TableCell>
            <TableCell>13:00-17:00</TableCell>
            <Button
              variant="outline"
              className="border-none bg-transparent p-2  hover:cursor-pointer hover:bg-accent/20"
            >
              <Ellipsis />
            </Button>
          </TableRow>
          <TableRow className="bg-primary text-white  hover:bg-white hover:text-secondary">
            <TableCell className="font-bold">1 okt 2024</TableCell>
            <TableCell>Klantenservicemedewerker</TableCell>
            <TableCell className="pl-10">
              3
              <Users className="relative -top-0.5 ml-1 inline size-4" />
            </TableCell>
            <TableCell>16:00-19:30</TableCell>
            <Button
              variant="outline"
              className="border-none bg-transparent p-2  hover:cursor-pointer hover:bg-accent/20"
            >
              <Ellipsis />
            </Button>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default AcceptedRequestsTable
