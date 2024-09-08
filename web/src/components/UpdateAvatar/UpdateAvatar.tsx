import { ImageUp, User } from 'lucide-react'

import { useAuth } from 'src/auth'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UpdateAvatar = () => {
  const { currentUser } = useAuth()
  return (
    <div className="relative my-4">
      <Avatar className="h-32 w-32">
        <AvatarImage src={currentUser.avatarUrl} />
        <AvatarFallback className="bg-secondary text-black">
          <User className="size-28 stroke-1" />
        </AvatarFallback>
      </Avatar>
      <ImageUp className="absolute bottom-2 right-[26] text-white shadow-sm shadow-accent" />
    </div>
  )
}

export default UpdateAvatar
