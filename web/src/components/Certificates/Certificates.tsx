import { useContext, useRef, useState } from 'react'

import {
  FileUploaderMinimal,
  UploadCtxProvider,
} from '@uploadcare/react-uploader'
import { ArrowLeft } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { SwitchWhite } from 'src/components/ui/switch'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const Certificates = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)

  function handlePreviousClick() {
    setOnboardingStep('contactPerson')
  }
  function handleNextClick() {
    setOnboardingStep('internalOrganization')
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold text-white">Certificaties</h1>
      <div className="mx-auto space-y-8">
        <CertificateQuestion id="wka-statement" label="WKA Verklaring" />
        <CertificateQuestion id="sna-certification" label="SNA Certificering" />
        <CertificateQuestion id="abu-nbbu" label="ABU of NBBU" />
        <CertificateQuestion id="g-rekening" label="G-Rekening-overeenkomst" />
        <CertificateQuestion id="VCU" label="VCU" />
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

type CertificateQuestionProps = {
  id: string
  label: string
}

const CertificateQuestion = ({ id, label }: CertificateQuestionProps) => {
  const [checked, setChecked] = useState(false)
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null)

  return (
    <div className="my-2 max-w-sm">
      <div className="flex items-center justify-between">
        <Label className="mr-8 text-xl" htmlFor={id}>
          {label}
        </Label>
        <SwitchWhite
          id={id}
          checked={checked}
          onClick={() => setChecked((c) => !c)}
        />
      </div>
      {checked && (
        <FileUploaderMinimal
          className="mt-2"
          pubkey={process.env.UPLOADCARE_PUBLIC_KEY}
          apiRef={uploaderRef}
          multiple={false}
        />
      )}
    </div>
  )
}

export default Certificates
