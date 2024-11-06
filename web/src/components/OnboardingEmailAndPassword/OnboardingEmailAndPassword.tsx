import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
const OnboardingEmailAndPassword = () => {
  return (
    <div className="rw-scaffold mx-auto my-40 max-w-md py-4">
      <div className="rw-segment-main">
        <div className="rw-form-wrapper">
          <Form onSubmit={onSubmit} className="rw-form-wrapper">
            <Label
              name="email"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Email
            </Label>
            <TextField
              name="email"
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              ref={emailRef}
              validation={{
                required: {
                  value: true,
                  message: 'Email is verplicht',
                },
              }}
            />
            <FieldError name="email" className="rw-field-error" />

            <Label
              name="password"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Wachtwoord
            </Label>
            <PasswordField
              name="password"
              className="rw-input text-accent"
              errorClassName="rw-input rw-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Wachtwoord is verplicht',
                },
              }}
            />
            <FieldError name="password" className="rw-field-error" />
            <div className="rw-button-group">
              <Submit className="rw-button rw-button-accent">Aanmelden</Submit>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default OnboardingEmailAndPassword
