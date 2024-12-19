import * as React from 'react'

import { NumericFormat } from 'react-number-format'
import { NumericFormatProps } from 'react-number-format/types/types'

import { cn } from 'src/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary-foreground focus:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

type CurrencyInputProps = {
  className: string
}
const CurrencyInput = React.forwardRef<HTMLInputElement, NumericFormatProps>(
  ({ className, ...props }: CurrencyInputProps & NumericFormatProps, ref) => {
    return (
      <NumericFormat
        className={cn(
          'flex h-9 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary-foreground focus:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        decimalSeparator=","
        thousandSeparator={'.'}
        prefix="€ "
        decimalScale={2}
        fixedDecimalScale={true}
        {...props}
        getInputRef={ref}
      />
    )
  }
)

type PercentageInputProps = {
  className: string
}
const PercentageInput = React.forwardRef<HTMLInputElement, NumericFormatProps>(
  ({ className, ...props }: PercentageInputProps & NumericFormatProps, ref) => {
    return (
      <NumericFormat
        className={cn(
          'flex h-9 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary-foreground focus:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        decimalSeparator=","
        thousandSeparator={'.'}
        suffix="%"
        decimalScale={2}
        fixedDecimalScale={true}
        {...props}
        getInputRef={ref}
      />
    )
  }
)

export { Input, CurrencyInput, PercentageInput }
