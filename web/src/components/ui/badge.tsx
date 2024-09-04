import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from 'src/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary/60 text-primary shadow hover:bg-primary/80 hover:text-muted/90 rounded-xl',
        secondary:
          'border-transparent hover:bg-accent/60 text-gray-600 bg-accent/30 rounded-xl hover:text-white',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 rounded-xl',
        outline:
          'text-white/80 hover:bg-primary-foreground/30 rounded-xl hover:text-gray-600 bg-primary-foreground/50 border-transparent hover:border-primary/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
