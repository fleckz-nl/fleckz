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
          <SelectItem value="newestFirst">Nieuwste eerst</SelectItem>
          <SelectItem value="oldestFirst">Oudste eerst</SelectItem>
          <SelectItem value="recentlyUpdatedFirst">
            Recentste gewijzigd eerst
          </SelectItem>
          <SelectItem value="mostDormantFirst">
            Oudste gewijzigd eerst
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SortButton
