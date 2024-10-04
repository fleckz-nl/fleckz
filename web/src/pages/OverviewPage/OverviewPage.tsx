import { GalleryThumbnails, Rows4 } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AcceptedRequestsTable from 'src/components/AcceptedRequestsTable/AcceptedRequestsTable'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs'
import WorkRequestsCell from 'src/components/WorkRequestsCell'

const OverviewPage = () => {
  return (
    <>
      <Metadata title="Overview" description="Overview page" />
      <section className="mx-auto max-w-4xl space-y-6">
        <Tabs defaultValue="allRequests" className="w-full">
          <TabsList className="w-full justify-end bg-transparent">
            <TabsTrigger value="allRequests">
              <h2 className="sr-only">All Requests</h2> <GalleryThumbnails />
            </TabsTrigger>
            <TabsTrigger value="acceptedRequests">
              <h2 className="sr-only">Accepted requests</h2>
              <Rows4 />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="allRequests">
            <WorkRequestsCell />
          </TabsContent>
          <TabsContent value="acceptedRequests">
            <AcceptedRequestsTable />
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}

export default OverviewPage
