import { Button } from 'web/src/components/ui/button'
import { Dialog, DialogTrigger } from 'web/src/components/ui/dialog'

const AssignShiftWorkerDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-secondary/70 text-lg text-white hover:bg-secondary/30 hover:text-primary/80">
          Vul een dienst in
        </Button>
      </DialogTrigger>
    </Dialog>
  )
}

export default AssignShiftWorkerDialog
