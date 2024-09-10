import AddAddressDialog from '../AddAddressDialog/AddAddressDialog'
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
        <AddAddressDialog />
      </CardContent>
    </Card>
  )
}

export default BusinessCard
