import { useState } from 'react'

import { addDays, isToday, subDays } from 'date-fns'
import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import { Calendar, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PlanWorkComponent from 'src/components/PlanWorkComponent/PlanWorkComponent'
import WorkRequestsTodayCell from 'src/components/WorkRequestsTodayCell'
import { formatDaysFromNow } from 'src/lib/formatters'

const TodayPage = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [date, setDate] = useState(new Date())
  return (
    <>
      <Metadata title="Today" description="Today page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <div className="flex flex-row items-center justify-center">
          <ChevronLeft
            className="hover:cursor-pointer"
            onClick={() => setDate((d) => subDays(d, 1))}
          />
          <div className="relative mx-4 flex flex-col items-center text-xl">
            <span className="text-2xl font-medium text-accent">
              {format(date, 'd MMMM yyyy', { locale: nl })}
            </span>
            <h1 className="text-lg text-primary-foreground">
              {formatDaysFromNow(date)}
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
            onClick={() => setDate((d) => addDays(d, 1))}
          />
        </div>
        <WorkRequestsTodayCell date={date.toISOString()} />
        <div className="center mx-auto gap-2">
          <PlanWorkComponent open={openDialog} setOpen={setOpenDialog} />
          <Link to={routes.plan()}>
            <Calendar className="relative -top-1 size-[35px] rounded-md border border-accent bg-transparent/10 p-1 text-white/80 hover:bg-muted-foreground/10 hover:text-accent" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default TodayPage
