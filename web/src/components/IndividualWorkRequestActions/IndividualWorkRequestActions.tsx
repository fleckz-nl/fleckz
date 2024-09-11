import { Trash2 } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ConfirmAcceptWorkRequest from '../ConfirmAcceptWorkRequest/ConfirmAcceptWorkRequest'
import ConfirmDeleteWork from '../ConfirmDeleteWork/ConfirmDeleteWork'
import ConfirmRevertInProgress from '../ConfirmRevertInProgress/ConfirmRevertInProgress'
import { QUERY as WorkRequestQuery } from '../WorkRequestCell'

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

  const [deleteRequest, { error: deleteRequestError }] = useMutation(
    DELETE_WORK_REQUEST_GQL,
    {
      onCompleted: () => {
        toast('Verwijderd', {
          icon: <Trash2 className="size-4 text-destructive" />,
          duration: 2000,
        })
      },
      refetchQueries: [
        { query: WorkRequestQuery, variables: { id: workRequest.id } },
      ],
    }
  )
  console.log(updateRequestError?.message)
  function handleConfirmRequest() {
    const loadingToast = toast.loading('Laden...')
    updateRequest({
      variables: {
        id: workRequest.id,
        input: {
          status: 'CONFIRMED',
        },
      },
    }).finally(() => toast.dismiss(loadingToast))
  }

  function revertToInProgress() {
    const loadingToast = toast.loading('Laden...')

    updateRequest({
      variables: {
        id: workRequest.id,
        input: {
          status: 'SUBMITTED',
        },
      },
    }).finally(() => toast.dismiss(loadingToast))
  }

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

  return (
    <>
      <div className="right-0 flex gap-2 self-end">
        <ConfirmDeleteWork onConfirm={handleDeleteRequest} />
        {workRequest.status === 'SUBMITTED' && (
          <ConfirmAcceptWorkRequest
            onConfirm={handleConfirmRequest}
            loading={updateRequestLoading}
            error={updateRequestError}
          />
        )}
        {workRequest.status === 'CONFIRMED' && (
          <ConfirmRevertInProgress
            onConfirm={revertToInProgress}
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
