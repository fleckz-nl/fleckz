import { useRef, useState } from 'react'

import { Building2, Check, Edit, MapPin, Plus, X } from 'lucide-react'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const UpdateBusinessCard = () => {
  const [showInput, setShowInput] = useState(false)
  const businessNameInputRef = useRef<HTMLInputElement>(null)
  const [businessName, setBusinessName] = useState('BedrijfNaam')
  return (
    <>
      <div className="flex w-full items-center gap-2">
        <Building2 />
        {showInput ? (
          <Input
            ref={businessNameInputRef}
            className="text-md"
            onBlur={() => setShowInput(false)}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        ) : (
          <span>{businessName}</span>
        )}
        {showInput ? (
          <Check
            className="rounded-full bg-gray-600 p-1 hover:bg-lime-400 hover:text-black focus:bg-lime-400"
            onClick={() => setShowInput(false)}
          />
        ) : (
          <Edit
            onClick={() => {
              setShowInput(true)
              businessNameInputRef.current.select()
              businessNameInputRef.current.focus()
            }}
            className=" size-5 text-gray-600 hover:text-accent"
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="ml-7 flex w-11/12 flex-wrap items-center justify-between text-muted/70">
          <div className="flex w-3/4 items-center gap-1 xs:w-2/3">
            <MapPin className="size-4" />
            {'Oude Gracht 42, 3511AB Utrecht'}
          </div>
          <Button className="text-gray-500 hover:bg-black hover:text-destructive">
            <X className="relative right-3 size-4" />
          </Button>
        </div>
        <div className="container mt-2 flex flex-wrap items-center justify-end gap-4 xs:gap-2 md:justify-start">
          <Input className="md:w-1/2" />
          <Button className="center px-2 text-accent hover:bg-gray-600 hover:text-black">
            <Plus className="mr-1 size-4" />
            Adres toevoegen
          </Button>
        </div>
        <Separator className="mb-4 mt-2 bg-white/10" />
      </div>
    </>
  )
}

export default UpdateBusinessCard
