import { Fragment, useContext, useState } from 'react'

import { ArrowLeft, Plus, X } from 'lucide-react'

import ContactPersonForm from 'src/components/ContactPersonForm/ContactPersonForm'
import { Button } from 'src/components/ui/button'
import { OnboardingContext } from 'src/pages/OnboardingPage/OnboardingContext'

const OnboardingContactPerson = () => {
  const { setOnboardingStep } = useContext(OnboardingContext)
  const [contactPersons, setContactPersons] = useState([
    createNewContactPerson(),
  ])

  function handleAddNewContactPerson() {
    setContactPersons((currentPersons) => [
      ...currentPersons,
      createNewContactPerson(),
    ])
  }

  function handlePreviousClick() {
    setOnboardingStep('internalOrganization')
  }

  function handleNextClick() {
    setOnboardingStep('successMessage')
  }

  function createNewContactPerson() {
    return {
      id: crypto.randomUUID(),
      firstName: undefined,
      lastName: undefined,
      function: undefined,
      email: undefined,
      phone: undefined,
      regions: [],
    }
  }
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4">
      <ArrowLeft className="cursor-pointer" onClick={handlePreviousClick} />
      <h1 className="text-2xl font-bold">Contactpersonen</h1>
      <span className="-mt-4 text-accent">Wie gaat Fleckz gebruiken?</span>
      {contactPersons.map((person, i) => (
        <Fragment key={person.id}>
          {i > 0 && (
            <X
              className="self-end text-primary-foreground hover:cursor-pointer hover:text-red-800"
              onClick={() =>
                setContactPersons((currentPersons) =>
                  currentPersons.filter((p) => p.id !== person.id)
                )
              }
            />
          )}
          <ContactPersonForm />
        </Fragment>
      ))}

      <Button
        className="w-fit self-center break-words py-6 text-lg"
        type="submit"
        variant="outline"
        onClick={handleAddNewContactPerson}
      >
        <Plus className="mr-2 size-4" />
        Nog een toevoegen
      </Button>
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

export default OnboardingContactPerson
