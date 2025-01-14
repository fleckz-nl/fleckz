import { useContext, useState } from 'react'

import { ArrowLeft } from 'lucide-react'

import { navigate, routes } from '@redwoodjs/router'

import SearchInput from 'src/components/SearchInput/SearchInput'
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
import WorkerInfoCard, {
  Skill,
} from 'src/components/WorkerInfoCard/WorkerInfoCard'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const CvsList = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)
  const [searchValue, setSearchValue] = useState('')
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
      <div className="flex justify-between">
        <Filter />
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="mb-8 space-y-8">
        {workers.map((worker) => (
          <WorkerInfoCard key={worker.id} worker={worker} />
        ))}
      </div>
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

type Worker = {
  id: number
  name: string
  jobFunction: string
  yearOfExp: number
  age: number
  hasCar: boolean
  livingPlace: string
  factor: number
  softSkills: Skill[]
}

const workers: Worker[] = [
  {
    id: 84,
    name: 'Hans van der Veen',
    jobFunction: 'Afwasser',
    yearOfExp: 3,
    age: 21,
    hasCar: false,
    livingPlace: 'Amsterdam',
    factor: 1.2,
    softSkills: ['Flexibiliteit', 'Creativiteit'],
  },
  {
    id: 25,
    name: 'Kees de Boer',
    jobFunction: 'Kok',
    yearOfExp: 6,
    age: 34,
    hasCar: true,
    livingPlace: 'Rotterdam',
    factor: 1.5,
    softSkills: ['Diversiteit', 'Innovatie'],
  },
  {
    id: 38,
    name: 'Jan de Vries',
    jobFunction: 'Keukenhulp',
    yearOfExp: 1,
    age: 18,
    hasCar: false,
    livingPlace: 'Utrecht',
    factor: 1.1,
    softSkills: ['Leren', 'Teamwerk'],
  },
]

export default CvsList
