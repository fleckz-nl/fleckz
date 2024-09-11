import { forwardRef } from 'react'

import { LoaderCircle } from 'lucide-react'

import { Button } from 'src/components/ui/button'

type ButtonWithLoaderProps = {
  children: React.ReactNode
  loading: boolean
}

const ButtonWithLoader = forwardRef<HTMLButtonElement>(
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
