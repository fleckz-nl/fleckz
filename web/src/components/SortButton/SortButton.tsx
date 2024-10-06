import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const SortButton = () => {
  return (
    <Select>
      <SelectTrigger className="w-[210px]">
        <SelectValue placeholder="Sorteren" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorteren op</SelectLabel>
          <SelectSeparator />
          <SelectItem value="newestFirst">Nieuwste Eerst</SelectItem>
          <SelectItem value="oldest">Oudste</SelectItem>
          <SelectItem value="recentlyUpdated">Onlangs bijgewerkt</SelectItem>
          <SelectItem value="leastRecentlyUpdated">
            Minst onlangs bijgewerkt
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SortButton
