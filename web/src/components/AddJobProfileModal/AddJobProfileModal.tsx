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
  CheckboxField,
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
    <div className="max-w-xl rounded-xl bg-black p-2 text-alluca-gray">
      <X
        className="absolute right-1 top-1 text-white hover:cursor-pointer"
        onClick={() => dialogRef.current.close()}
      />
      <Toaster />
      <Form
        onSubmit={onSubmit}
        className="flex flex-col gap-1"
        config={{ mode: 'onBlur' }}
      >
        <FormError error={error} wrapperClassName="bg-red-400" />
        <h2 className="font-bold text-accent">Functieprofielen aanmaken</h2>
        <span>
          <Label
            name="name"
            className="mr-2"
            errorClassName="mr-2 text-yellow-500"
          >
            Functienaam
          </Label>
          <TextField
            name="name"
            className="rounded-md border border-accent bg-black px-1 text-white"
            errorClassName="bg-black border-yellow-500 border-2"
            validation={{
              required: {
                value: true,
                message: 'Functienaam is verplicht',
              },
            }}
          />
        </span>
        <FieldError name="name" className="text-xs text-yellow-500" />

        <span>
          <Label name="qualityNeeded" className="mr-2">
            Gewenste kwaliteit
          </Label>
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
        </span>
        <FieldError name="qualityNeeded" className="text-xs text-yellow-500" />
        <div>
          <Label name="yearsOfExp" className="mr-2">
            Aantal jaar werkervaring
          </Label>
          <NumberField
            name="yearsOfExp"
            min={0}
            className="rounded-md border border-accent bg-black px-1 text-white"
            errorClassName="bg-black border-yellow-500 border-2"
            validation={{
              required: {
                value: true,
                message: 'Aantal jaar werkervaring is verplicht',
              },
              valueAsNumber: true,
            }}
          />
        </div>
        <FieldError name="yearsOfExp" className="text-xs text-yellow-500" />

        {/* <Label name="certificates">Certificaten</Label>
        <TextField name="certificates" /> */}

        <fieldset>
          <legend>Salaris indicatie</legend>
          <span>€</span>
          <NumberField
            name="hourlyWageMin"
            className="rounded-md border border-accent bg-black px-1 text-white"
            errorClassName="bg-black border-yellow-500 border-2"
            min={0}
            validation={{
              required: {
                value: true,
                message: 'Salaris indicatie (min) is verplicht',
              },
            }}
          />
          —<span>€</span>
          <NumberField
            name="hourlyWageMax"
            min={0}
            className="rounded-md border border-accent bg-black px-1 text-white"
            errorClassName="bg-black border-yellow-500 border-2"
            validation={{
              required: {
                value: true,
                message: 'Salaris indicatie (max) is verplicht',
              },
            }}
          />
        </fieldset>
              <Switch name="isTravelReimbursed" className="mr-4" />
              <Switch name="isCarAvailable" />
            Budget bruto per uur
          </Label>
          <NumberField
            name="totalBudgetPerHour"
            min={0}
            className="rounded-md border border-accent bg-black px-1 text-white"
            errorClassName="bg-black border-yellow-500 border-2"
          />
        </span>

        <Label name="comment">
          Eventueel standaardbericht voor uitzendbureaus
        </Label>
        <TextAreaField
          name="comment"
          className="rounded-md border border-accent bg-black px-1 text-white"
          errorClassName="bg-black border-yellow-500 border-2"
        />

        <Submit
          disabled={loading}
          className="bg-accent text-white hover:cursor-pointer"
        >
          Aanmaken
        </Submit>
      </Form>
    </div>
  )
}

export default AddJobProfileModal
