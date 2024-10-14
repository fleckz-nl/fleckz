// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TodayPage = () => {
  return (
    <>
      <Metadata title="Today" description="Today page" />
      <div className="mx-auto flex max-w-4xl flex-col ">
        <div className="flex flex-col items-center text-xl font-bold">
          <h1 className="text-white/90">Vandaag</h1>
          <span className="text-2xl font-medium text-accent">
            14 Oktober 2024
          </span>
        </div>
      </div>
    </>
  )
}

export default TodayPage
