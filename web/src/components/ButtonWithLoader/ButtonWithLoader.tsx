import { forwardRef, RefAttributes } from 'react'

import { LoaderCircle } from 'lucide-react'

import { Button, ButtonProps } from 'src/components/ui/button'

interface ButtonWithLoaderProps
  extends ButtonProps,
    RefAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading: boolean
}

const ButtonWithLoader = forwardRef<HTMLButtonElement, ButtonWithLoaderProps>(
  (props: ButtonWithLoaderProps, ref) => {
    const { loading, children, ...restProps } = props
    return (
      <Button ref={ref} disabled={loading} {...restProps}>
        {loading && <LoaderCircle className="absolute animate-spin" />}
        <span className={`${loading && 'invisible'}`}>{children}</span>
      </Button>
    )
  }
)

export default ButtonWithLoader
