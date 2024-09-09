import { Building2, Edit, Plus } from 'lucide-react'

import BusinessAddressCell from '../BusinessAddressCell/BusinessAddressCell'
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
        <BusinessAddressCell />
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
          Wijzigingen opslaan
        </Button>
        <Separator className="mb-4 mt-2 bg-white/10" />
      </div>
    </>
  )
}

export default UpdateBusinessCard
