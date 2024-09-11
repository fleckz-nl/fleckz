import { LoaderCircle } from 'lucide-react'

import { Button, ButtonProps } from 'src/components/ui/button'

interface ButtonWithLoaderProps
  extends ButtonProps,
    React.RefAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading: boolean
}

const ButtonWithLoader = ({
  children,
  loading,
  ...props
}: ButtonWithLoaderProps) => {
  return (
    <Button {...props} disabled={loading}>
      {loading && <LoaderCircle className="absolute animate-spin" />}
      <span className={`${loading && 'invisible'}`}>{children}</span>
    </Button>
  )
}

export default ButtonWithLoader
