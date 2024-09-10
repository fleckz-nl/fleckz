import { Button } from '../ui/button'
import {
  Dialog,
  DialogTrigger,
} from '../ui/dialog'
const AddAddressDialog = () => {
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto bg-white/20 p-6 text-lg text-white hover:bg-white/20 hover:text-accent">
          Bedrijf toevoegen
        </Button>
      </DialogTrigger>
    </Dialog>
}

export default AddAddressDialog
