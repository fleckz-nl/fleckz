import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons'

import { cn } from 'src/lib/utils'

type RatingStarsProps = {
  value: number
  onChange?: (value: number) => void
  className?: string
}

const MAX_STARS = 5

const RatingStars = ({
  value,
  onChange = () => {},
  className,
}: RatingStarsProps) => {
  const stars = Array.from({ length: MAX_STARS }, (_, k) => {
    if (k + 1 <= value)
      return (
        <StarFilledIcon
          key={k}
          className="h-auto w-auto cursor-pointer"
          onClick={() => {
            onChange(k + 1)
            onChange(k + 1)
          }}
        />
      )
    return (
      <StarIcon
        key={k}
        className="h-auto w-auto cursor-pointer"
        onClick={() => {
          onChange(k + 1)
          onChange(k + 1)
        }}
      />
    )
  })

  return <div className={cn('flex flex-row', className)}>{stars}</div>
}

export default RatingStars
