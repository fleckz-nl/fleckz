import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import UpdateBusinessCard from '../UpdateBusinessCard/UpdateBusinessCard'

const BusinessCard = () => {
  return (
    <Card className="border-gray-600/40 bg-black text-white xs:max-w-full">
      <CardHeader>
        <CardTitle className="text-white">Bedrijf</CardTitle>
        <CardDescription className="text-white/60">
          Werk uw bedrijf bij.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <UpdateBusinessCard />
        <UpdateBusinessCard />
        {/* TODO: Convert this button to a popover */}
        {/* Popover will be a form that can add new business
            includes:
                    business name
                    business address
 */}
        <Button className="mx-auto bg-muted/20 p-6 text-lg text-white hover:bg-white/10 hover:text-accent">
          Bedrijf toevoegen
        </Button>
      </CardContent>
    </Card>
  )
}

export default BusinessCard
