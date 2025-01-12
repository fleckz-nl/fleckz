import { useContext, useRef, useState } from 'react'

import {
  FileUploaderInline,
  UploadCtxProvider,
} from '@uploadcare/react-uploader'
import { ArrowLeft, Loader } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const CvUpload = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null)

  const [showLoading, setShowLoading] = useState(false)

  function handlePreviousClick() {
    setOnboardingStep('successMessage')
  }
  function handleNextClick() {
    setShowLoading(true)
    setTimeout(() => {
      setShowLoading(false)
      setOnboardingStep('cvsList')
    }, 2000)
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold text-white">CVs uploaden</h1>
      <div>
        <FileUploaderInline
          className="my-8"
          apiRef={uploaderRef}
          pubkey={process.env.UPLOADCARE_PUBLIC_KEY}
        />
      </div>
      <Button
        className="self-center bg-secondary py-4 text-lg"
        type="submit"
        onClick={handleNextClick}
      >
        Volgende{' '}
      </Button>
      {showLoading && <Overlay />}
    </div>
  )
}

const Overlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary">
      <div className="flex flex-col items-center space-y-4 rounded-lg bg-primary p-8">
        <p className="text-center text-2xl">Even geduld...</p>
        <Loader className="size-8 animate-spin" />
      </div>
    </div>
  )
}

export default CvUpload
