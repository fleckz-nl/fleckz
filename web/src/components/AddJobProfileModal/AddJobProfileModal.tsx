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

const AddJobProfileModal = () => {
  const [create, { loading, error }] = useMutation(CREATE_JOB_PROFILE, {
    onCompleted: () => {
      toast.success('Success')
    },
  })

  function onSubmit(data) {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <div className="max-w-xl bg-alluca-primary text-alluca-gray">
      <Toaster />
      <Form
        onSubmit={onSubmit}
        className="flex flex-col"
        config={{ mode: 'onBlur' }}
      >
        <FormError error={error} wrapperClassName="bg-red-400" />
        <Label name="name" errorClassName="text-red-500">
          Functienaam
        </Label>
        <TextField
          name="name"
          errorClassName="border-red-500"
          validation={{
            required: {
              value: true,
              message: 'Functienaam is verplicht.',
            },
          }}
        />
        <FieldError name="name" className="text-red-600" />

        <Label name="qualityNeeded" errorClassName="bg-red-200">
          Gewenste kwaliteit
        </Label>
        <NumberField
          name="qualityNeeded"
          validation={{ required: true }}
          min={1}
          max={5}
        />

        <Label name="yearsOfExp">Aantal jaar werkervaring</Label>
        <NumberField
          name="yearsOfExp"
          min={0}
          validation={{ required: true, valueAsNumber: true }}
        />
        <FieldError name="yearsOfExp" className="text-red-600" />

        {/* <Label name="certificates">Certificaten</Label>
        <TextField name="certificates" /> */}

        <fieldset>
          <legend>Salaris indicatie</legend>
          <Label name="hourlyWageMin" errorClassName="error">
            Van
          </Label>
          <NumberField
            name="hourlyWageMin"
            min={0}
            validation={{ required: true }}
          />
          <FieldError name="hourlyWageMin" className="text-red-600" />

          <Label name="hourlyWageMin" errorClassName="error">
            Tot
          </Label>
          <NumberField
            name="hourlyWageMax"
            min={0}
            validation={{ required: true }}
          />
          <FieldError name="hourlyWageMax" className="text-red-600" />
        </fieldset>

        <Label name="maxTravelDistance">Maximale reisafstand</Label>
        <NumberField name="maxTravelDistance" min={0} />

        <fieldset>
          <Label name="isTravelReimbursed">Reiskosten vergoeding</Label>
          <CheckboxField name="isTravelReimbursed" />
        </fieldset>

        <fieldset>
          <Label name="isCarAvailable">Auto beschikbaar</Label>
          <CheckboxField name="isCarAvailable" />
        </fieldset>

        <Label name="kmAllowance">Kilometervergoeding</Label>
        <NumberField name="kmAllowance" min={0} />

        <Label name="totalBudgetPerHour">Budget bruto per uur</Label>
        <NumberField name="totalBudgetPerHour" min={0} />

        <Label name="comment">
          Eventueel standaardbericht voor uitzendbureaus
        </Label>
        <TextAreaField name="comment" />
        <Submit disabled={loading} className="hover:cursor-pointer">
          Aanmaken
        </Submit>
      </Form>
    </div>
  )
}

export default AddJobProfileModal
