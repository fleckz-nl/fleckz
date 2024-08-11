import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import logo from './logo.png'

const HomePage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.overview())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welkom terug!')
    }
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <main className="flex min-h-screen w-full flex-wrap items-center justify-center bg-primary">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="m-4 flex w-full max-w-md flex-col">
          <img
            src={logo}
            alt="logo"
            className="mx-auto w-36 rounded-full drop-shadow-sm"
          />
          <section className="mt-6 text-center text-2xl text-white drop-shadow-sm">
            <p>Two liner</p>
            <p>Alluca essence tagline</p>
          </section>
        </div>
        <div className="form-wrapper m-4 mx-4 flex min-h-96 w-full max-w-sm flex-col rounded-md bg-black drop-shadow-sm">
          <Form onSubmit={onSubmit} className="rw-form-wrapper m-2 p-4">
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
            <div className="rw-forgot-link">
              <Link to={routes.forgotPassword()} className="rw-forgot-link">
                Wachtwoord vergeten?
              </Link>
            </div>
            <FieldError name="password" className="rw-field-error" />
            <div className="rw-button-group">
              <Submit className="rw-button rw-button-green">Inloggen</Submit>
            </div>
          </Form>
          <div className="rw-login-link mb-8 flex flex-wrap justify-center gap-1 px-4">
            <span>Nieuw op de website?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Maak account aan!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
