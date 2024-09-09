import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const WorkPlacesCard = () => {
  return (
    <Card className="border-gray-600/40 bg-black text-white xs:max-w-full">
      <CardHeader>
        <CardTitle className="text-white">Werkplekken</CardTitle>
        <CardDescription className="text-white/60">
          Werk uw werkplekken bij.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
    </Card>
  )
}

export default WorkPlacesCard
