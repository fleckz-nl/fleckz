// import { Link, routes } from '@redwoodjs/router'
import { Users } from 'lucide-react'
import { Separator } from 'web/src/components/ui/separator'

import { Metadata } from '@redwoodjs/web'

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
        </section>
      </div>
    </>
  )
}

export default TodayPage
