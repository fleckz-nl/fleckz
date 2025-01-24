import { ChangeEventHandler } from 'react'

import { Search } from 'lucide-react'
import { Input } from 'web/src/components/ui/input'

type SearchInputProps = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <>
      <div className="relative flex items-center text-white/70">
        <Search className="absolute mx-2 size-4" />
        <Input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Zoeken.."
          className="border-primary-foreground/20 bg-gray-800/50 pl-8 placeholder:text-white/70 focus:bg-black focus:text-white"
        />
      </div>
    </>
  )
}

export default SearchInput
