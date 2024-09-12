import { Trash2 } from 'lucide-react'
import { WorkRequestsQuery, WorkRequestStatus } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ConfirmAcceptWorkRequest from 'src/components/ConfirmAcceptWorkRequest/ConfirmAcceptWorkRequest'
import ConfirmCompleteWorkRequest from 'src/components/ConfirmCompleteWorkRequest/ConfirmCompleteWorkRequest'
import ConfirmDeleteWork from 'src/components/ConfirmDeleteWork/ConfirmDeleteWork'
import ConfirmRevertInProgress from 'src/components/ConfirmRevertInProgress/ConfirmRevertInProgress'
import ConfirmRevertToConfirmed from 'src/components/ConfirmRevertToConfirmed/ConfirmRevertToConfirmed'
import { QUERY as WorkRequestQuery } from 'src/components/WorkRequestCell'

const DELETE_WORK_REQUEST_GQL = gql`
  mutation DeleteWorkRequest($id: String!) {
    deleteWorkRequest(id: $id) {
      id
    }
  }
`

const CONFIRM_WORK_REQUEST_GQL = gql`
  mutation updateWorkRequest($id: String!, $input: UpdateWorkRequestInput!) {
    updateWorkRequest(id: $id, input: $input) {
      id
    }
  }
`

type IndividualWorkRequestActionsProps = {
  workRequest: WorkRequestsQuery['workRequests'][0]
}
const IndividualWorkRequestActions = ({
  workRequest,
}: IndividualWorkRequestActionsProps) => {
  const [
    updateRequest,
    { loading: updateRequestLoading, error: updateRequestError },
  ] = useMutation(CONFIRM_WORK_REQUEST_GQL, {
    onCompleted: () => {
      toast.success('Updated')
    },
    refetchQueries: [
      { query: WorkRequestQuery, variables: { id: workRequest.id } },
    ],
  })

  const [
    deleteRequest,
    { loading: deleteRequestLoading, error: deleteRequestError },
  ] = useMutation(DELETE_WORK_REQUEST_GQL, {
    onCompleted: () => {
      toast('Verwijderd', {
        icon: <Trash2 className="size-4 text-destructive" />,
        duration: 2000,
      })
    },
    refetchQueries: [
      { query: WorkRequestQuery, variables: { id: workRequest.id } },
    ],
  })

  function handleDeleteRequest() {
    const loadingToast = toast.loading('Laden...')
    deleteRequest({
      variables: {
        id: workRequest.id,
      },
    }).finally(() => {
      navigate(routes.overview())
      toast.dismiss(loadingToast)
    })
  }

  function handleUpdateStatus({ status }: { status: WorkRequestStatus }) {
    const loadingToast = toast.loading('Laden...')
    updateRequest({
      variables: {
        id: workRequest.id,
        input: {
          status,
        },
      },
    }).finally(() => toast.dismiss(loadingToast))
  }

  return (
    <>
      <div className="flex max-w-full flex-wrap justify-center gap-2 xs:justify-end">
        <ConfirmDeleteWork
          onConfirm={handleDeleteRequest}
          loading={deleteRequestLoading}
          error={deleteRequestError}
        />
        {workRequest.status === 'SUBMITTED' && (
          <ConfirmAcceptWorkRequest
            onConfirm={() => handleUpdateStatus({ status: 'CONFIRMED' })}
            loading={updateRequestLoading}
            error={updateRequestError}
          />
        )}
        {workRequest.status === 'CONFIRMED' && (
          <ConfirmRevertInProgress
            onConfirm={() => handleUpdateStatus({ status: 'SUBMITTED' })}
            loading={updateRequestLoading}
            error={updateRequestError}
          />
        )}
        {workRequest.status === 'CONFIRMED' && (
          <ConfirmCompleteWorkRequest
            onConfirm={() => handleUpdateStatus({ status: 'DONE' })}
            loading={updateRequestLoading}
            error={updateRequestError}
          />
        )}
        {workRequest.status === 'DONE' && (
          <ConfirmRevertToConfirmed
            onConfirm={() => handleUpdateStatus({ status: 'CONFIRMED' })}
            loading={updateRequestLoading}
            error={updateRequestError}
          />
        )}
      </div>
      {(updateRequestError || deleteRequestError) && (
        <div className="my-2 bg-red-400 px-4 py-2 text-black">
          {updateRequestError?.message || deleteRequestError?.message}
        </div>
      )}
    </>
  )
}

export default IndividualWorkRequestActions
