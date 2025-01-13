import { useContext } from 'react'

import { ArrowLeft } from 'lucide-react'

import { navigate, routes } from '@redwoodjs/router'

import { Button } from 'src/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select'
import WorkerInfoCard from 'src/components/WorkerInfoCard/WorkerInfoCard'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const CvsList = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)
  function handlePreviousClick() {
    setOnboardingStep('cvUpload')
  }

  function handleNextClick() {
    navigate(routes.overview())
  }

  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold text-white">CVs ingelezen</h1>
      <div>
        <Filter />
      </div>
      <WorkerInfoCard />
      <Button
        className="self-end bg-secondary py-4 text-lg"
        type="submit"
        onClick={handleNextClick}
      >
        Volgende
      </Button>
    </div>
  )
}

const Filter = () => {
  const functionFilters = [
    { value: 'afwasser', label: 'Afwasser' },
    { value: 'keukenhulp', label: 'Keukenhulp' },
    { value: 'kok', label: 'Kok' },
  ]
  return (
    <Select>
      <SelectTrigger className="w-[210px]">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Functie</SelectLabel>
          <SelectSeparator />
          {functionFilters.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default CvsList
