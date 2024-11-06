import { Metadata } from '@redwoodjs/web'

const OnboardingPage = () => {
  return (
    <>
      <Metadata title="Onboarding" description="Onboarding page" />
      <div className="flex min-h-screen flex-col bg-primary text-primary-foreground">
        <main className="container flex flex-col"></main>
      </div>
    </>
  )
}

export default OnboardingPage
