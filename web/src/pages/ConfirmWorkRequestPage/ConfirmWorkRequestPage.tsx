import { WorkRequestsQuery } from 'types/graphql'

import { Metadata } from '@redwoodjs/web'

import ConfirmAcceptWorkRequest from 'src/components/ConfirmAcceptWorkRequest/ConfirmAcceptWorkRequest'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import WorkRequestsListItem from 'src/components/WorkRequestsListItem/WorkRequestsListItem'

type ConfirmWorkRequestPageProps = {
  request: string
  workRequests: WorkRequestsQuery['workRequests']
}

const ConfirmWorkRequestPage = ({ request }: ConfirmWorkRequestPageProps) => {
  const workRequest = JSON.parse(request)
  return (
    <>
      <Metadata
        title="ConfirmWorkRequest"
        description="ConfirmWorkRequest page"
      />
      <div className="mx-auto flex max-w-4xl flex-col text-white">
        <h1 className="flex items-center gap-1 text-xl font-bold">
          Te bevestigen
        </h1>
        <ul className="mt-2 flex flex-col gap-4 rounded-md bg-red-800 p-4 hover:bg-white hover:text-red-800">
          <WorkRequestsListItem
            key={workRequest.id}
            request={workRequest}
            className="mt-0 bg-red-800 text-white hover:cursor-none hover:bg-red-800 hover:text-white"
          />
          <li className="mx-auto my-2 flex w-full max-w-xl items-center justify-between gap-4">
            <div className="flex w-full items-center gap-4 xs:gap-12">
              <Avatar className="size-12">
                <AvatarImage src={`https://avatar.iran.liara.run/public`} />
                <AvatarFallback>
                  <img
                    src={`https://avatar.iran.liara.run/public`}
                    alt="Random avatar"
                  />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>Hans van Manus</span>
                <span>0612345678</span>
              </div>
            </div>
            <ConfirmAcceptWorkRequest
              onConfirm={() => {
                /* handle confirm action */
              }}
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export default ConfirmWorkRequestPage
