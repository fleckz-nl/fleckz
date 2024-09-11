import { Separator } from '@radix-ui/react-separator'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Skeleton } from '../ui/skeleton'

const RequestStatusCardSkeleton = () => {
  return (
    <Card className="border-transparent bg-white/40 shadow-accent/20">
      <CardHeader className="grid grid-cols-2">
        <CardTitle className="flex items-center">
          <Skeleton className="h-4 w-full" />
        </CardTitle>
        <Skeleton className="relative -right-2 -top-2 h-5 w-20 justify-self-end rounded-full" />
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Separator className="my-8 animate-pulse bg-primary/10" />
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-4 w-3/4" />
        <Separator className="my-8 animate-pulse bg-primary/10" />
        <Skeleton className="h-16 w-full" />
      </CardContent>
      <CardFooter className="-mt-2"></CardFooter>
    </Card>
  )
}

export default RequestStatusCardSkeleton
