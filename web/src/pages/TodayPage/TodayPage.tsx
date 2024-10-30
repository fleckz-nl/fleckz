// import { Link, routes } from '@redwoodjs/router'
import { format } from 'date-fns/format'
import { nl } from 'date-fns/locale/nl'

import { Metadata } from '@redwoodjs/web'

import WorkRequestsTodayCell from 'src/components/WorkRequestsTodayCell'

const TodayPage = () => {
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
      </div>
    </>
  )
}

export default TodayPage
