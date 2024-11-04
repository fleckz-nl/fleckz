import { useState } from 'react'

import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'
import { Calendar } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PlanWorkComponent from 'src/components/PlanWorkComponent/PlanWorkComponent'
import WorkRequestsTodayCell from 'src/components/WorkRequestsTodayCell'

const TodayPage = () => {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <>
      <Metadata title="Today" description="Today page" />
      <div className="mx-auto flex max-w-4xl flex-col">
        <div className="flex flex-col items-center text-xl font-bold">
          <h1 className="text-white/90">Vandaag</h1>
          <span className="text-2xl font-medium text-accent">
            {format(new Date(), 'd MMMM yyyy', { locale: nl })}
          </span>
        </div>
        <WorkRequestsTodayCell />
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
