import { useRef, useState } from 'react'

import { Building2, Check, Edit, MapPin, Plus, Trash2, X } from 'lucide-react'
import { ClientBusinessesQuery } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatAddress } from 'src/lib/formatAddress'

import AddWorkplaceDialog from '../AddWorkplaceDialog/AddWorkplaceDialog'
import { QUERY as ClientBusinesses } from '../ClientBusinessesCell'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const DELETE_BUSINESS_GQL = gql`
  mutation deleteClientBusiness($id: String!) {
    deleteClientBusiness(id: $id) {
      id
    }
  }
`

const DELETE_WORKPLACE_GQL = gql`
  mutation deleteWorkplace($id: String!) {
    deleteWorkplace(id: $id) {
      id
    }
  }
`

const UPDATE_BUSINESS_GQL = gql`
  mutation updateClientBusiness(
    $id: String!
    $input: UpdateClientBusinessInput!
  ) {
    updateClientBusiness(id: $id, input: $input) {
      id
    }
  }
`

type UpdateBusinessCardProps = {
  clientBusiness: ClientBusinessesQuery['clientBusinesses'][0]
}

const UpdateBusinessCard = ({ clientBusiness }: UpdateBusinessCardProps) => {
  const [showInput, setShowInput] = useState(false)
  const businessNameInputRef = useRef<HTMLInputElement>(null)
  const [businessName, setBusinessName] = useState(clientBusiness?.name)

  const [deleteClientBusiness] = useMutation(DELETE_BUSINESS_GQL, {
    refetchQueries: [{ query: ClientBusinesses }],
  })
  const [deleteWorkplace] = useMutation(DELETE_WORKPLACE_GQL, {
    refetchQueries: [{ query: ClientBusinesses }],
  })
  const [updateClientBusiness] = useMutation(UPDATE_BUSINESS_GQL, {
    refetchQueries: [{ query: ClientBusinesses }],
  })

  function handleBusinessDelete() {
    loadingToastWrapper(
      deleteClientBusiness({
        variables: {
          id: clientBusiness.id,
        },
        onCompleted: () => toast.success('Verwijderd bedrijf'),
      })
    )
  }
  function handleWorkplaceDelete(workspaceId) {
    loadingToastWrapper(
      deleteWorkplace({
        variables: {
          id: workspaceId,
        },
        onCompleted: () => toast.success('Verwijderd werkplek'),
      })
    )
  }

  function handleBusinessNameChange() {
    loadingToastWrapper(
      updateClientBusiness({
        variables: {
          id: clientBusiness.id,
          input: {
            name: businessName,
          },
        },
        onCompleted: () => toast.success('Bijgewerkte bedrijfsnaam'),
      })
    )
  }

  function loadingToastWrapper(func: Promise<unknown>) {
    const loadingToast = toast.loading('Laden...')
    func.finally(() => toast.dismiss(loadingToast))
  }

  function Workplace(
    workplace: ClientBusinessesQuery['clientBusinesses'][0]['workplaces'][0]
  ) {
    return (
      <div className="ml-7 mt-4 flex w-11/12 flex-wrap items-center justify-between text-muted/70">
        <div className="flex w-3/4 items-center gap-1 xs:w-2/3">
          <MapPin className="size-4" />
          {formatAddress(workplace.address)}
        </div>
        <Button
          className="text-gray-500 hover:bg-black hover:text-destructive"
          onClick={() => handleWorkplaceDelete(workplace.id)}
        >
          <X className="relative right-3 size-4" />
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="max-w-2/3 flex w-3/5 items-center gap-2">
          <Building2 />
          <Input
            ref={businessNameInputRef}
            className={`text-md ${!showInput && 'hidden'}`}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <span className={`${showInput && 'hidden'}`}>{businessName}</span>
          {showInput ? (
            <Check
              className="rounded-full bg-gray-600 p-1 hover:cursor-pointer hover:bg-lime-400 hover:text-black focus:bg-lime-400"
              onClick={async () => {
                await handleBusinessNameChange()
                setShowInput(false)
              }}
            />
          ) : (
            <Edit
              onClick={() => {
                setShowInput(true)
              }}
              className="ize-5 text-gray-600 hover:cursor-pointer hover:text-accent"
            />
          )}
        </div>
        <Trash2
          className="size-5 text-white/70 hover:cursor-pointer hover:text-destructive"
          onClick={handleBusinessDelete}
        />
      </div>
      <div className="flex flex-col gap-3">
        {clientBusiness.workplaces.map((w) => (
          <Workplace key={w.id} {...w} />
        ))}
        <div className="container flex flex-wrap items-center justify-end gap-4 xs:gap-2 md:justify-start">
          <AddWorkplaceDialog clientBusiness={clientBusiness} />
        </div>
        <Separator className="mb-4 mt-2 bg-white/10" />
      </div>
    </>
  )
}

export default UpdateBusinessCard
