import '@uploadcare/react-uploader/core.css'

import { useRef, useState } from 'react'

import {
  FileUploaderRegular,
  OutputCollectionState,
  OutputCollectionStatus,
  UploadCtxProvider,
} from '@uploadcare/react-uploader'
import {
  ImageUp,
  LoaderCircle,
  MessageSquareWarningIcon,
  User,
} from 'lucide-react'

import { FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UPDATE_AVATAR_URL_GQL = gql`
  mutation UpdateAvatarUrl($id: String!, $newAvatarUrl: String!) {
    updateAvatarUrl(id: $id, newAvatarUrl: $newAvatarUrl) {
      id
    }
  }
`

const UpdateAvatar = () => {
  const { currentUser, reauthenticate } = useAuth()
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null)

  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatarUrl)

  const [updateAvatar, { loading, error }] = useMutation(
    UPDATE_AVATAR_URL_GQL,
    {
      onCompleted: () => {
        toast.success('Avatar bijgewerkt')
      },
    }
  )

  async function handleUploadcareDone(
    e: OutputCollectionState<OutputCollectionStatus, 'maybe-has-group'>
  ) {
    const loadingToast = toast.loading('Laden...')
    const avatarUrl = e.allEntries[0].cdnUrl
    await updateAvatar({
      variables: {
        id: currentUser.id,
        newAvatarUrl: avatarUrl,
      },
    })
    await reauthenticate()
    toast.dismiss(loadingToast)
    setAvatarUrl(avatarUrl)
  }

  function handleAvatarClick() {
    uploaderRef.current.api.initFlow()
  }

  return (
    <>
      <div className="relative my-4">
        {error && (
          <div className="flex h-fit items-center justify-center gap-2 bg-red-200 py-2 pl-2 text-red-600">
            <MessageSquareWarningIcon />
            <FormError error={error} />
          </div>
        )}
        <button onClick={handleAvatarClick}>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            {loading && <LoaderCircle className="size-16 animate-spin" />}
          </div>
          <Avatar className="h-32 w-32">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-secondary text-black">
              <User className="size-28 stroke-1" />
            </AvatarFallback>
          </Avatar>
          <ImageUp className="absolute bottom-2 right-[26] text-white shadow-sm shadow-accent" />
        </button>
      </div>
      <FileUploaderRegular
        sourceList="local, url, camera"
        classNameUploader="uc-dark"
        pubkey={process.env.UPLOADCARE_PUBLIC_KEY}
        apiRef={uploaderRef}
        className="invisible"
        onDoneClick={handleUploadcareDone}
        multiple={false}
        imgOnly={true}
      />
    </>
  )
}

export default UpdateAvatar
