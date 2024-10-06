import { CheckCircle2, Hourglass, Award, NotepadText } from 'lucide-react'

import OverviewSection, {
  OverviewHeader,
  OverviewContent,
} from 'src/components/OverviewSection'
import RequestStatusCardSkeleton from 'src/components/RequestStatusCardSkeleton'

const OverviewCardsSkeleton = () => {
  return (
    <>
      <OverviewSection>
        <OverviewHeader>
          <CheckCircle2 className="mr-1 inline" />
          Geaccepteerd
        </OverviewHeader>
        <OverviewContent>
          <RequestStatusCardSkeleton />
        </OverviewContent>
      </OverviewSection>
      <OverviewSection>
        <OverviewHeader>
          <Hourglass className="mr-1 inline" />
          In uitvoering
        </OverviewHeader>
        <OverviewContent>
          {Array.from({ length: 3 }).map((_, i) => {
            return <RequestStatusCardSkeleton key={i} />
          })}
        </OverviewContent>
      </OverviewSection>
      <OverviewSection>
        <OverviewHeader>
          <Award className="mr-1 inline" />
          Afgerond
        </OverviewHeader>
        <OverviewContent>
          <RequestStatusCardSkeleton />
        </OverviewContent>
      </OverviewSection>
      <OverviewSection>
        <OverviewHeader>
          <NotepadText className="mr-1 inline" />
          Concept
        </OverviewHeader>
        <OverviewContent>
          <RequestStatusCardSkeleton />
        </OverviewContent>
      </OverviewSection>
    </>
  )
}

export default OverviewCardsSkeleton
