import { Building2 } from 'lucide-react'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'

const AddAddressDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto bg-white/20 p-6 text-lg text-white hover:bg-white/20 hover:text-accent">
          Bedrijf toevoegen
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-h-screen overflow-y-scroll bg-black py-10 text-white  shadow-md shadow-accent/50">
        <DialogHeader className="center mt-4 flex-col">
          <Building2 className="size-10 " />
          <DialogTitle>Nieuw Bedrijf</DialogTitle>
          <DialogDescription>Voeg een nieuw bedrijf toe.</DialogDescription>
        </DialogHeader>
        <div>
          <Label className="text-primary-foreground">Bedrijfsnaam</Label>
          <Input></Input>
        </div>
        <Separator className="mb-4 mt-2 bg-white/10" />
        <div className="-mt-4 space-y-4">
          <h3 className="text-center text-muted">Adres</h3>
          <div>
            <Label className="text-primary-foreground">Straat</Label>
            <Input></Input>
          </div>
          <div>
            <Label className="text-primary-foreground">
              Appartement, suitenummer, etc.
            </Label>
            <Input></Input>
          </div>
          <div className="grid grid-cols-2 gap-2 xs:gap-4">
            <div>
              <Label className="text-primary-foreground">Stad</Label>
              <Input></Input>
            </div>
            <div>
              <Label className="text-primary-foreground">Postcode</Label>
              <Input></Input>
            </div>
          </div>
          <div>
            <Label className="text-primary-foreground">Land</Label>
            <Input className=" text-white"></Input>
          </div>
        </div>
        <Button className="my-4 bg-gray-600/70 text-accent">Indienen</Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddAddressDialog
