import { Input } from 'src/components/ui/input'
import { cn } from 'src/lib/utils'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        type={type}
        className={cn(
          'bg-white/80 text-blue-900 placeholder:text-blue-900 focus:bg-white focus:text-black',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
TextInput.displayName = 'TextInput'

export default TextInput
