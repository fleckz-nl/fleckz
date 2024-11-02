import { Skeleton } from 'src/components/ui/skeleton'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from 'src/components/ui/table'

type TableSkeletonProps = {
  cols?: number
  rows?: number
}

const TableSkeleton = ({ cols = 4, rows = 10 }: TableSkeletonProps) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {Array.from({ length: cols }).map((_, i) => (
              <TableHead key={i} className="text-gray-400">
                <Skeleton className="h-4 w-full bg-secondary" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rows }).map((_, index) => (
            <TableRow
              key={index}
              className="bg-primary text-white hover:cursor-pointer hover:bg-white hover:text-secondary"
            >
              {Array.from({ length: cols }).map((_, i) => (
                <TableCell key={i}>
                  <Skeleton className="h-4 w-full bg-primary-foreground" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default TableSkeleton
