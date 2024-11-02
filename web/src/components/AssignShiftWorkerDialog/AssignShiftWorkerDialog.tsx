import { Button } from 'web/src/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'web/src/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from 'web/src/components/ui/form'
import { Input } from 'web/src/components/ui/input'

const AssignShiftWorkerDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-secondary/70 text-lg text-white hover:bg-secondary/30 hover:text-primary/80">
          Vul een dienst in
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="font-bold text-primary/80">
            Vul een dienst in
          </DialogTitle>
          <DialogDescription>Vul de naam van de werknemer</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form>
            <FormField
              name="street"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground">
                    Naam Werknemer
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AssignShiftWorkerDialog
