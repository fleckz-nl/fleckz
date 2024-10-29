import { useEffect, useRef, useState } from 'react'

import { LoaderCircle } from 'lucide-react'

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

import logo from './logo-white-text.png'

const HomePage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    const loadingToast = toast.loading('Laden...')
    const response = await logIn({
      username: data.email,
      password: data.password,
    })
    toast.dismiss(loadingToast)

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welkom terug!')
    }
    setIsLoading(false)
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <main className="min-h-screen bg-primary">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-4 py-20 md:py-52 lg:justify-between">
          <div className="flex w-full max-w-sm flex-col">
            <img
              src={logo}
              alt="logo"
              className="mx-auto w-48 drop-shadow-sm"
            />
            <section className="m-0 mt-2 px-2 text-center text-xl italic text-white/70 drop-shadow-sm md:text-2xl">
              <p>Vind je de beste kandidaat, overal.</p>
            </section>
          </div>
          <div className="form-wrapper m-0 flex w-11/12 max-w-sm flex-col rounded-md bg-black drop-shadow-sm">
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
                <Submit
                  className="rw-button rw-button-accent w-fit"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <LoaderCircle className="absolute animate-spin" />
                  )}
                  <span className={`${isLoading && 'invisible'}`}>
                    Inloggen
                  </span>
                </Submit>
              </div>
            </Form>
            <div className="rw-login-link mb-8 flex flex-wrap justify-center gap-1 px-4">
              <span>Nieuw op de website?</span>{' '}
              <Link to={routes.signup()} className="rw-link">
                Maak account aan!
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
