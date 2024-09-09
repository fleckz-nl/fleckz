import { Building2, Edit, Ellipsis, MapPin, Plus } from 'lucide-react'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const UpdateBusinessCard = () => {
  return (
    <>
      <div className="flex w-full items-center gap-1 xs:gap-2">
        <Building2 />
        <Input
          defaultValue={'BedrijfNaam'}
          className="text-md border-dashed border-gray-600/60"
        ></Input>
        <Edit className="relative right-8 text-gray-600" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="ml-7 flex flex-wrap items-center justify-between text-muted/70 md:w-11/12">
          <div className="flex items-center gap-1 xs:w-2/3">
            <MapPin className="size-4" />
            {'Oude Gracht 42, 3511AB Utrecht'}
          </div>
          <Badge className=" bg-gray-400/30 text-muted/80">AdresNickname</Badge>
          <Button className="text-gray-500 hover:bg-black hover:text-accent">
            <Ellipsis />
          </Button>
        </div>
        <div className="ml-7 flex flex-wrap items-center justify-between text-muted/70 md:w-11/12">
          <div className="flex items-center gap-1 xs:w-2/3">
            <MapPin className="size-4" />
            {'Sint Gert 2, 2214ST Rotterdam'}
          </div>
          <Badge className=" bg-gray-400/30 text-muted/80">
            NicknameTweede
          </Badge>
          <Button className=" text-gray-500 hover:bg-black hover:text-accent">
            <Ellipsis />
          </Button>
        </div>
        <div className="container mt-2 flex flex-wrap items-center justify-end gap-4 xs:gap-2 md:justify-start">
          <Input className="md:w-1/2"></Input>
          <Button className="center px-2 text-accent hover:bg-gray-600 hover:text-black">
            <Plus className="mr-1 size-4" />
            Adres toevoegen
          </Button>
        </div>
        <Button
          variant="outline"
          type="submit"
          className="relative right-8 mt-4 w-fit self-end bg-accent text-black"
        >
          {/* {updateAccountLoading && (
          <LoaderCircle className="absolute animate-spin" />
        )}
        <span className={`${updateAccountLoading && 'invisible'}`}> */}
          Wijzigingen opslaan
          {/* </span> */}
        </Button>
        <Separator className="mt-2 bg-white/10" />
      </div>
    </>
  )
}

export default UpdateBusinessCard
