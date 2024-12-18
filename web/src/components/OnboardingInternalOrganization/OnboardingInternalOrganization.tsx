import { SetStateAction, useRef, useState } from 'react'

import {
  FileUploaderInline,
  OutputCollectionState,
  OutputCollectionStatus,
  UploadCtxProvider,
} from '@uploadcare/react-uploader'
import { ArrowLeft } from 'lucide-react'

import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/ui/command'
import { OnboardingStages } from 'src/pages/OnboardingPage/OnboardingPage'

type OnboardingInternalOrganizationProps = {
  setOnboardingStep: React.Dispatch<SetStateAction<OnboardingStages>>
}

const OnboardingInternalOrganization = ({
  setOnboardingStep,
}: OnboardingInternalOrganizationProps) => {
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null)
  const [cultureInput, setCultureInput] = useState('')
  const [selectedCultures, setSelectedCultures] = useState([])
  const [commandOpen, setCommandOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  function handleOnSelectCulture(value: string) {
    setSelectedCultures((currentCultures) => {
      console.log(value)
      if (currentCultures == null) return [value]
      if (currentCultures.includes(value))
        return currentCultures.filter((culture) => culture !== value)

      return [...currentCultures, value]
    })
    setCommandOpen(false)
  }

  async function handleUploadcareDone(
    e: OutputCollectionState<OutputCollectionStatus, 'maybe-has-group'>
  ) {
    setVideoUrl(e.allEntries[0].cdnUrl)
  }

  function handlePreviousClick() {
    setOnboardingStep('addBusiness')
  }

  function handleNextClick() {
    setOnboardingStep('contactPerson')
  }

  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold">Internet organisatie</h1>
      <div className="flex max-w-2xl flex-col">
        <h2 className="mb-2 font-bold">Bedrijfsfilm toevoegen</h2>
        {videoUrl ? (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video width="100%" controls>
              <source src={videoUrl} />
            </video>

            <Button
              variant="link"
              className="self-start text-destructive"
              onClick={() => setVideoUrl('')}
            >
              Verwijderen
            </Button>
          </>
        ) : (
          <FileUploaderInline
            pubkey={process.env.UPLOADCARE_PUBLIC_KEY}
            apiRef={uploaderRef}
            multiple={false}
            onDoneClick={handleUploadcareDone}
          />
        )}
        <h2 className="mb-2 mt-16 font-bold">Bedrijfscultuur</h2>
        <div className="my-4 grid grid-cols-2 gap-2">
          {selectedCultures.map((culture) => (
            <Badge
              key={culture}
              className="cursor-pointer rounded-3xl bg-secondary px-4 py-2 text-base text-white"
              onClick={() =>
                setSelectedCultures((current) =>
                  current.filter((c) => c !== culture)
                )
              }
            >
              {culture}
            </Badge>
          ))}
        </div>
        <Command className="bg-foreground bg-white">
          <CommandInput
            className="my-4 text-lg"
            placeholder="Voeg cultuur toe"
            onFocus={() => setCommandOpen(true)}
            value={cultureInput}
            onChangeCapture={(v) => setCultureInput(v.currentTarget.value)}
          />
          {commandOpen && (
            <CommandList>
              <CommandEmpty>Geen cultuur gevonden</CommandEmpty>
              <CommandGroup>
                {businessCultures.map((culture) => {
                  if (
                    selectedCultures.find((c) => culture.businessCulture === c)
                  )
                    return
                  return (
                    <CommandItem
                      key={culture.id}
                      value={culture.businessCulture}
                      className="cursor-pointer"
                      onSelect={handleOnSelectCulture}
                    >
                      <div className="my-2 flex flex-col text-base">
                        <div className="mb-2 text-gray-700">
                          {culture.businessCulture
                            .split(new RegExp(`(${cultureInput})`))
                            .map((part, index) =>
                              index === 1 ? (
                                <mark
                                  className="bg-inherit font-bold text-black"
                                  key={index}
                                >
                                  {part}
                                </mark>
                              ) : (
                                part
                              )
                            )}
                        </div>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
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

const businessCultures = [
  {
    id: 'Q2K3M4N5L6O7P8',
    businessCulture: 'Flexibiliteit',
  },
  {
    id: 'T9G8F7E6D5C4B3A2',
    businessCulture: 'Collectiviteit',
  },
  {
    id: 'V1U0T9R8Q7P6O5N4M3L2',
    businessCulture: 'Resultaatgerichtheid',
  },
  {
    id: 'B8Y7X6W5V4U3T2S1R0',
    businessCulture: 'Innovatie',
  },
  {
    id: 'F6E5D4C3B2A1Z0Y9X8',
    businessCulture: 'Toewijding',
  },
  {
    id: 'G5H4F3E2D1C0B9A8',
    businessCulture: 'Diversiteit',
  },
  {
    id: 'P1Q0O9N8M7L6K5J4I3H2G1',
    businessCulture: 'Transparantie',
  },
  {
    id: 'X7Z6W5V4T3S2R1Q0P9',
    businessCulture: 'Leren',
  },
  {
    id: 'Y8F7E6D5C4B3A2O1N0M9',
    businessCulture: 'Creativiteit',
  },
  {
    id: 'Z9T8S7R6Q5P4O3N2L1K0J9',
    businessCulture: 'Teamwerk',
  },
]

export default OnboardingInternalOrganization
