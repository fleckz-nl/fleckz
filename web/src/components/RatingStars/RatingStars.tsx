import { useState } from 'react'

import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons'

import { cn } from 'src/lib/utils'

type OneToFiveRange = 1 | 2 | 3 | 4 | 5
type RatingStarsProps = {
  defaultValue: OneToFiveRange
  onChange: (value: number) => void
  className?: string
}

const MAX_STARS = 5

const RatingStars = ({
  defaultValue,
  onChange = () => {},
  className,
}: RatingStarsProps) => {
  const [rating, setRating] = useState(defaultValue)

  const stars = Array.from({ length: MAX_STARS }, (_, k) => {
    if (k + 1 <= rating)
      return (
        <StarFilledIcon
          key={k}
          className="h-auto w-auto cursor-pointer"
          onClick={() => {
            setRating((k + 1) as OneToFiveRange)
            onChange(k + 1)
          }}
        />
      )
    return (
      <StarIcon
        key={k}
        className="h-auto w-auto cursor-pointer"
        onClick={() => {
          setRating((k + 1) as OneToFiveRange)
          onChange(k + 1)
        }}
      />
    )
  })

  return <div className={cn('flex flex-row', className)}>{stars}</div>
}

export default RatingStars
