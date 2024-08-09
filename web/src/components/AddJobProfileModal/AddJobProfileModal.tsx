import { MutableRefObject, useState } from 'react'

import { X } from 'lucide-react'

import {
  Form,
  Submit,
  TextField,
  NumberField,
  Label,
  TextAreaField,
  FieldError,
  FormError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

import { Switch } from 'src/components/ui/switch'

import RatingStars from '../RatingStars/RatingStars'

const CREATE_JOB_PROFILE = gql`
  mutation CreateJobProfileMutation($input: CreateJobProfileInput!) {
    createJobProfile(input: $input) {
      name
      qualityNeeded
      yearsOfExp
      hourlyWageMin
      hourlyWageMax
      maxTravelDistance
      isTravelReimbursed
      isCarAvailable
      kmAllowance
      totalBudgetPerHour
      comment
    }
  }
`

const AddJobProfileModal = ({
  dialogRef,
}: {
  dialogRef: MutableRefObject<HTMLDialogElement>
}) => {
  const [create, { loading, error }] = useMutation(CREATE_JOB_PROFILE, {
    onCompleted: () => {
      toast.success('Success')
    },
  })

  const DEFAULT_QUALITY_NEEDED = 3
  const [qualityNeeded, setQualityNeeded] = useState(DEFAULT_QUALITY_NEEDED)

  function onSubmit(data) {
    create({ variables: { input: data } })
  }

  return (
    <div className="max-w-xl rounded-xl bg-black p-6 text-primary-foreground/80">
      <X
        className="absolute right-1 top-2 text-primary-foreground hover:cursor-pointer hover:text-red-900"
        onClick={() => dialogRef.current.close()}
      />
      <Toaster />
      <Form
        onSubmit={onSubmit}
        className="rw-form-wrapper flex flex-col gap-1"
        config={{ mode: 'onChange' }}
      >
        <FormError error={error} wrapperClassName="bg-red-400" />
        <h2 className="absolute top-2 text-lg font-bold text-muted-foreground/80">
          Functieprofielen aanmaken
        </h2>
        <span className="mt-6">
          <Label name="name" className="rw-label">
            Functienaam
          </Label>
          <TextField
            name="name"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{
              required: {
                value: true,
                message: 'Functienaam is verplicht',
              },
            }}
          />
        </span>
        <FieldError name="name" className="error-message" />
        <span className="flex items-center justify-between">
          <Label name="qualityNeeded" className="rw-label my-0">
            Gewenste kwaliteit
          </Label>
          <div className="flex items-center gap-2">
            <RatingStars
              className="flex h-8 gap-2 text-accent/70 hover:text-accent/90"
              value={qualityNeeded}
              onChange={setQualityNeeded}
            ></RatingStars>
            <NumberField
              name="qualityNeeded"
              className="rw-input w-auto"
              errorClassName="rw-input rw-input-error w-auto"
              validation={{
                required: {
                  value: true,
                  message: 'Gewenste kwaliteit is verplicht',
                },
                min: { value: 1, message: 'Minimaal is 1' },
                max: { value: 5, message: 'Maximum is 5' },
              }}
              min={1}
              max={5}
              value={qualityNeeded}
              onChange={(e) => setQualityNeeded(Number(e.target.value))}
            />
          </div>
        </span>
        <FieldError name="qualityNeeded" className="error-message" />
        <div className="flex items-center justify-between">
          <Label name="yearsOfExp" className="rw-label my-0">
            Aantal jaar werkervaring
          </Label>
          <NumberField
            name="yearsOfExp"
            min={0}
            className="rw-input w-auto"
            errorClassName="rw-input rw-input-error w-auto"
            validation={{
              required: {
                value: true,
                message: 'Aantal jaar werkervaring is verplicht',
              },
              valueAsNumber: true,
            }}
          />
        </div>
        <FieldError name="yearsOfExp" className="error-message" />

        {/* <Label name="certificates">Certificaten</Label>
        <TextField name="certificates" /> */}

        <fieldset>
          <legend className="rw-label">Salaris indicatie</legend>
          <div className="flex items-center gap-1">
            <span className="text-lg opacity-90">€</span>
            <NumberField
              name="hourlyWageMin"
              className="rw-input w-auto"
              errorClassName="rw-input rw-input-error w-auto"
              min={0}
              validation={{
                required: {
                  value: true,
                  message: 'Salaris indicatie (min) is verplicht',
                },
              }}
            />
            <span className="text-accent">—</span>
            <span className="text-lg opacity-90">€</span>
            <NumberField
              name="hourlyWageMax"
              min={0}
              className="rw-input w-auto"
              errorClassName="rw-input rw-input-error w-auto"
              validation={{
                required: {
                  value: true,
                  message: 'Salaris indicatie (max) is verplicht',
                },
              }}
            />
          </div>
        </fieldset>
        <FieldError name="hourlyWageMin" className="error-message" />
        <FieldError name="hourlyWageMax" className="error-message" />
        <legend className="travel-section rw-input block border p-4">
          <span className="flex items-center justify-between">
            <Label name="maxTravelDistance" className="rw-label mt-0">
              Maximale reisafstand
            </Label>
            <div className="flex items-end gap-1">
              <NumberField
                name="maxTravelDistance"
                className="rw-input w-auto"
                errorClassName="rw-input rw-input-error w-auto"
                min={0}
              />
              <span className="text-lg opacity-90">km</span>
            </div>
          </span>
          <div className="my-4 flex justify-between">
            <fieldset className="flex items-center gap-2">
              <Label
                name="isTravelReimbursed"
                className="rw-label mt-0 text-center"
              >
                Reiskosten vergoeding
              </Label>
              <Switch name="isTravelReimbursed" className="mr-4" />
            </fieldset>
            <fieldset className="flex items-center gap-2">
              <Label
                name="isCarAvailable"
                className="rw-label mt-0 text-center"
              >
                Auto beschikbaar
              </Label>
              <Switch name="isCarAvailable" />
            </fieldset>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Label name="kmAllowance" className="rw-label mt-0">
              Kilometervergoeding
            </Label>
            <span className="flex items-end gap-1">
              <NumberField
                name="kmAllowance"
                min={0}
                className="rw-input w-auto"
                errorClassName="rw-input rw-input-error"
              />
              <span className="text-lg opacity-90">km</span>
            </span>
          </div>
        </legend>
        <span className="flex items-center justify-between gap-2">
          <Label name="totalBudgetPerHour" className="rw-label mt-0">
            Budget bruto per uur
          </Label>
          <div className="flex items-center gap-1">
            <span className="text-lg opacity-90">€</span>
            <NumberField
              name="totalBudgetPerHour"
              min={0}
              className="rw-input w-auto"
              errorClassName="rw-input rw-input-error w-auto"
            />
          </div>
        </span>
        <Label name="comment" className="rw-label mt-2">
          Eventueel standaardbericht voor uitzendbureaus
        </Label>
        <TextAreaField
          name="comment"
          className="rw-input w-auto"
          errorClassName="rw-input rw-input-error w-auto"
        />
        <Submit disabled={loading} className="rw-button rw-button-green mt-2">
          Aanmaken
        </Submit>
      </Form>
    </div>
  )
}

export default AddJobProfileModal
